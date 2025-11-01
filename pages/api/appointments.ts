import type { NextApiRequest, NextApiResponse } from 'next';

const requests: any[] = [];

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, phone, email, reason, preferredDate, preferredTime, visitType } = req.body;

    if (!name || !phone || !reason) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newRequest = {
      id: Date.now().toString(),
      name,
      phone,
      email,
      reason,
      preferredDate,
      preferredTime,
      visitType,
      receivedAt: new Date().toISOString(),
    };

    requests.push(newRequest);
    console.log('New appointment request', newRequest);
    return res.status(200).json({ message: 'Request received' });
  }

  if (req.method === 'GET') {
    return res.status(200).json({ requests });
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).json({ message: 'Method not allowed' });
};

export default handler;
