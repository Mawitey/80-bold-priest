import { NextRequest, NextResponse } from "next/server";
import { getCourseConfig } from "@/lib/cognito";
import { getCurrentUser } from "@/lib/current-user";
import { paypalRequest } from "@/lib/paypal";

type PayPalOrder = {
  id?: string;
  status?: string;
  message?: string;
};

function dashboardRedirect(
  request: NextRequest,
  payment: "success" | "cancelled" | "error",
) {
  return NextResponse.redirect(
    new URL(`/dashboard?payment=${payment}`, request.url),
    303,
  );
}

async function getOrder(orderId: string) {
  const response = await paypalRequest(
    `/v2/checkout/orders/${encodeURIComponent(orderId)}`,
  );

  const payload = (await response.json()) as PayPalOrder;

  return {
    response,
    payload,
  };
}

export async function GET(request: NextRequest) {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.redirect(
      new URL("/api/auth/login", request.url),
      303,
    );
  }

  const orderId = request.nextUrl.searchParams.get("token");

  if (!orderId) {
    console.error("PayPal returned without an order ID");
    return dashboardRedirect(request, "error");
  }

  try {
    let { response, payload } = await getOrder(orderId);

    if (!response.ok) {
      console.error("Unable to retrieve PayPal order", {
        status: response.status,
        message: payload.message,
      });

      return dashboardRedirect(request, "error");
    }

    if (payload.status !== "COMPLETED") {
      const captureResponse = await paypalRequest(
        `/v2/checkout/orders/${encodeURIComponent(orderId)}/capture`,
        {
          method: "POST",
          body: "{}",
        },
      );

      const capturePayload =
        (await captureResponse.json()) as PayPalOrder;

      if (!captureResponse.ok) {
        const refreshedOrder = await getOrder(orderId);

        response = refreshedOrder.response;
        payload = refreshedOrder.payload;

        if (!response.ok || payload.status !== "COMPLETED") {
          console.error("PayPal capture failed", {
            status: captureResponse.status,
            message: capturePayload.message,
          });

          return dashboardRedirect(request, "error");
        }
      } else {
        payload = capturePayload;
      }
    }

    if (payload.status !== "COMPLETED") {
      console.error("PayPal order is not completed", {
        orderId,
        status: payload.status,
      });

      return dashboardRedirect(request, "error");
    }

    const course = getCourseConfig();

    const accessResponse = await fetch(
      `${course.courseApiUrl.replace(/\/$/, "")}/paypal-access`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.idToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderId }),
        cache: "no-store",
      },
    );

    if (!accessResponse.ok) {
      console.error("Course-access update failed", {
        status: accessResponse.status,
        response: (await accessResponse.text()).slice(0, 300),
      });

      return dashboardRedirect(request, "error");
    }

    return dashboardRedirect(request, "success");
  } catch (error) {
    console.error("Unable to complete PayPal checkout", error);
    return dashboardRedirect(request, "error");
  }
}
