import type { NextApiRequest, NextApiResponse } from 'next';
import type { ApiSuccessResponse, QuoteBuilderPayload, QuoteLineItem } from '@/lib/forms';

type QuoteResponse = ApiSuccessResponse | { message: string };

export default function handler(req: NextApiRequest, res: NextApiResponse<QuoteResponse>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const payload = (req.body || {}) as QuoteBuilderPayload;
  const requiredFields: (keyof QuoteBuilderPayload)[] = ['name', 'email'];
  const missing = requiredFields.filter((field) => {
    const value = payload[field];
    return typeof value !== 'string' || !value.trim();
  });

  if (missing.length > 0) {
    return res.status(400).json({ message: `Missing required fields: ${missing.join(', ')}` });
  }

  const lineItems = Array.isArray(payload.lineItems) ? payload.lineItems : [];
  const invalidLineItems = lineItems.filter((item: QuoteLineItem) => {
    const hasMarble = typeof item?.marbleSlug === 'string' && item.marbleSlug.trim();
    const hasQuantity = typeof item?.quantity === 'string' && item.quantity.trim();
    return !hasMarble || !hasQuantity;
  });

  if (lineItems.length === 0 || invalidLineItems.length > 0) {
    return res
      .status(400)
      .json({ message: 'Each quote requires at least one marble with quantity specified.' });
  }

  console.log('Quote payload', payload);

  return res.status(200).json({
    id: `quote_${Date.now()}`,
    message: 'Quote request received',
    receivedAt: new Date().toISOString()
  });
}
