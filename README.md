This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## LinkedIn newsletter admin form

A new admin-only page has been added:

```text
/admin-linkedin-newsletter.html
```

This page lets an authorized admin user paste a LinkedIn post URL and send it to newsletter subscribers through the AWS Lambda API.

### Environment variable

Create `.env.local` from `.env.local.example`:

```env
NEXT_PUBLIC_BNI_NEWSLETTER_API_URL=https://yn2vj6fare.execute-api.us-east-1.amazonaws.com/send-linkedin-newsletter
```

Do not store the production `x-api-key` in frontend code. The admin form asks the user for an admin access key and sends it in the request body as `adminKey`. The Lambda function validates this key using the `ADMIN_ACCESS_KEY` environment variable.

### Admin form request

```json
{
  "adminKey": "<ADMIN_ACCESS_KEY>",
  "linkedinPostUrl": "https://www.linkedin.com/posts/example-post-url"
}
```

### Build

```bash
npm install
npm run build
```

If the hosting uses static export:

```bash
npm run export
```
