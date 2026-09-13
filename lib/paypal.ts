type PayPalConfig = {
  clientId: string;
  clientSecret: string;
  baseUrl: string;
  currency: string;
  price: string;
};

export function getPayPalConfig(): PayPalConfig {
  const config = {
    clientId: process.env.PAYPAL_CLIENT_ID,
    clientSecret: process.env.PAYPAL_CLIENT_SECRET,
    baseUrl:
      process.env.PAYPAL_BASE_URL ||
      "https://api-m.sandbox.paypal.com",
    currency: process.env.PAYPAL_CURRENCY || "USD",
    price: process.env.PAYPAL_PRICE || "500.00",
  };

  const missing = Object.entries(config)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missing.length) {
    throw new Error(
      `Missing PayPal configuration: ${missing.join(", ")}`,
    );
  }

  return config as PayPalConfig;
}

export async function getPayPalAccessToken() {
  const config = getPayPalConfig();

  const response = await fetch(`${config.baseUrl}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${config.clientId}:${config.clientSecret}`,
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`PayPal authentication failed: ${response.status}`);
  }

  const data = (await response.json()) as {
    access_token?: string;
  };

  if (!data.access_token) {
    throw new Error("PayPal did not return an access token");
  }

  return data.access_token;
}

export async function paypalRequest(
  path: string,
  options: RequestInit = {},
) {
  const config = getPayPalConfig();
  const accessToken = await getPayPalAccessToken();

  return fetch(`${config.baseUrl}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
    cache: "no-store",
  });
}
