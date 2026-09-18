import { sendInquiryEmail } from '../src/server/mailer';

export default async function handler(req: any, res: any) {
  // Enable CORS headers if needed
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    
    if (!body || !body.fullName || !body.phone) {
      return res.status(400).json({
        success: false,
        message: 'Full name and mobile number are required.',
      });
    }

    const result = await sendInquiryEmail(body);
    return res.status(200).json(result);
  } catch (err: any) {
    console.error('[API send-email] Internal error:', err);
    return res.status(500).json({
      success: false,
      message: err.message || 'An error occurred while sending your request via Nodemailer.',
    });
  }
}
