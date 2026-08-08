# 80 Bold Priest

Next.js course website prepared for AWS Amplify Hosting.

## Current features

- Responsive course landing page
- 80 Bold Priest branding and logo
- Tigrigna course title
- Stripe test checkout link
- Cognito managed sign-up and sign-in
- Server-side OAuth callback and secure HTTP-only session cookies
- Student dashboard
- Ordered video categories with protected Mux playback
- No EC2 dependency

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## AWS Amplify

Connect this GitHub repository in AWS Amplify and use the default Next.js build settings. Amplify will run `npm run build`.

## Security

Never commit `.env`, Stripe secret keys, Cognito client secrets, AWS credentials, Mux signing keys, or webhook secrets. Add production secrets through AWS Amplify environment variables or AWS Secrets Manager.

The current Stripe link is a test-mode payment link. It cannot collect a real payment.

Required Amplify variables: `COGNITO_DOMAIN`, `COGNITO_CLIENT_ID`, `COGNITO_CLIENT_SECRET`, `COGNITO_REDIRECT_URI`, `COGNITO_LOGOUT_URI`, `COGNITO_ISSUER`, `COURSE_API_URL`, `MUX_SIGNING_KEY_ID`, and `MUX_SIGNING_PRIVATE_KEY`.

Signed Mux playback IDs and lesson ordering are stored in `lib/courses.ts`. Playback IDs are identifiers, not signing secrets. Never add the Mux private key to that file.
