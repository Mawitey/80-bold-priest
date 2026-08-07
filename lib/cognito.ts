export function getCognitoConfig() {
  const config = {
    domain: process.env.COGNITO_DOMAIN,
    clientId: process.env.COGNITO_CLIENT_ID,
    clientSecret: process.env.COGNITO_CLIENT_SECRET,
    redirectUri: process.env.COGNITO_REDIRECT_URI,
    logoutUri: process.env.COGNITO_LOGOUT_URI,
    issuer: process.env.COGNITO_ISSUER,
  };

  const missing = Object.entries(config)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missing.length) {
    throw new Error(`Missing Cognito configuration: ${missing.join(", ")}`);
  }

  return config as Record<keyof typeof config, string>;
}

export function cognitoEndpoint(domain: string, path: string) {
  return `${domain.replace(/\/$/, "")}${path}`;
}

export function getCourseConfig() {
  const config = {
    courseApiUrl: process.env.COURSE_API_URL,
    muxPlaybackId: process.env.MUX_PLAYBACK_ID,
    muxSigningKeyId: process.env.MUX_SIGNING_KEY_ID,
    muxSigningPrivateKey: process.env.MUX_SIGNING_PRIVATE_KEY,
  };

  const missing = Object.entries(config)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missing.length) {
    throw new Error(`Missing course configuration: ${missing.join(", ")}`);
  }

  return config as Record<keyof typeof config, string>;
}
