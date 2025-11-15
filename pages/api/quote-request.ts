import type { NextApiRequest, NextApiResponse } from 'next';
import type { ApiSuccessResponse, QuoteRequestPayload } from '@/lib/forms';

type QuoteRequestResponse = ApiSuccessResponse | { message: string };

export default function handler(req: NextApiRequest, res: NextApiResponse<QuoteRequestResponse>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const payload = (req.body || {}) as QuoteRequestPayload;
  const requiredFields: (keyof QuoteRequestPayload)[] = ['product', 'name', 'email', 'quantity'];
  const missing = requiredFields.filter((field) => {
    const value = payload[field];
    return typeof value !== 'string' || !value.trim();
  });

  if (missing.length > 0) {
    return res.status(400).json({ message: `Missing required fields: ${missing.join(', ')}` });
  }

  console.log('Product quote', payload);

  return res.status(200).json({
    id: `quote_req_${Date.now()}`,
    message: 'Product quote received',
    receivedAt: new Date().toISOString()
  });
}
