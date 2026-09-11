import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/current-user";
import {
  getPayPalConfig,
  paypalRequest,
} from "@/lib/paypal";

export async function POST(request: NextRequest) {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.redirect(
      new URL("/api/auth/login", request.url),
      303,
    );
  }

  try {
    const config = getPayPalConfig();
    const siteUrl = request.nextUrl.origin;

    const response = await paypalRequest("/v2/checkout/orders", {
      method: "POST",
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            reference_id: "80-bold-priest",
            custom_id: user.subject,
            invoice_id: `80BP-${Date.now()}-${randomUUID()}`,
            description: "80 Bold Priest lifetime course access",
            amount: {
              currency_code: config.currency,
              value: config.price,
            },
          },
        ],
        payment_source: {
          paypal: {
            experience_context: {
              brand_name: "80 Bold Priest",
              landing_page: "LOGIN",
              shipping_preference: "NO_SHIPPING",
              user_action: "PAY_NOW",
              return_url: `${siteUrl}/api/paypal/complete`,
              cancel_url: `${siteUrl}/dashboard?payment=cancelled`,
            },
          },
        },
      }),
    });

    const payload = (await response.json()) as {
      id?: string;
      links?: Array<{
        href: string;
        rel: string;
      }>;
      message?: string;
    };

    if (!response.ok || !payload.id) {
      console.error("PayPal order creation failed", {
        status: response.status,
        message: payload.message,
      });

      return NextResponse.redirect(
        new URL("/dashboard?payment=error", request.url),
        303,
      );
    }

    const approvalUrl = payload.links?.find(
      (link) =>
        link.rel === "payer-action" || link.rel === "approve",
    )?.href;

    if (!approvalUrl) {
      console.error("PayPal approval URL was missing");

      return NextResponse.redirect(
        new URL("/dashboard?payment=error", request.url),
        303,
      );
    }

    return NextResponse.redirect(approvalUrl, 303);
  } catch (error) {
    console.error("Unable to start PayPal checkout", error);

    return NextResponse.redirect(
      new URL("/dashboard?payment=error", request.url),
      303,
    );
  }
}
