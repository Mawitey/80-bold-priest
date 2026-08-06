# 80 Bold Priest

Next.js course website prepared for AWS Amplify Hosting.

## Current features

- Responsive course landing page
- 80 Bold Priest branding and logo
- Tigrigna course title
- Stripe test checkout link
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
