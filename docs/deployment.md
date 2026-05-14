# Deployment

Pulseer Dashboard is a standard Next.js application and can be deployed to any modern web hosting provider (Vercel, Netlify, AWS, etc.).

## Environment Variables

Ensure the following variables are set in your production environment:
- `NEXT_PUBLIC_STELLAR_NETWORK`: `public` or `testnet`.
- `NEXT_PUBLIC_HORIZON_URL`: The URL of your Horizon provider.
- `NEXT_PUBLIC_SOROBAN_RPC_URL`: The URL of your Soroban RPC provider.

## Build Steps

```bash
npm install
npm run build
npm run start
```
