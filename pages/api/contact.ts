import type { NextApiRequest, NextApiResponse } from 'next';
import type { ApiSuccessResponse, ContactFormPayload } from '@/lib/forms';

type ContactResponse = ApiSuccessResponse | { message: string };

export default function handler(req: NextApiRequest, res: NextApiResponse<ContactResponse>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const payload = (req.body || {}) as ContactFormPayload;
  const requiredFields: (keyof ContactFormPayload)[] = ['name', 'email', 'message'];
  const missing = requiredFields.filter((field) => {
    const value = payload[field];
    return typeof value !== 'string' || !value.trim();
  });

  if (missing.length > 0) {
    return res.status(400).json({ message: `Missing required fields: ${missing.join(', ')}` });
  }

  console.log('Contact enquiry', payload);

  return res.status(200).json({
    id: `contact_${Date.now()}`,
    message: 'Contact enquiry logged',
    receivedAt: new Date().toISOString()
  });
}
