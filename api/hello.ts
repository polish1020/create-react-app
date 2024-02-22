import type { VercelRequest, VercelResponse } from '@vercel/node';

// export const config = {
//   runtime: 'nodejs', // this is a pre-requisite
// };

export default function handler(request: VercelRequest, response: VercelResponse) {
  return response.status(200).json({ text: 'I am a Serverless Function!' });
}

export function GET(request: Request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
