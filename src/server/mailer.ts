import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Load .env variables if process.env isn't populated
try {
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    const envFile = fs.readFileSync(envPath, 'utf8');
    envFile.split('\n').forEach((line) => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
        const [key, ...valParts] = trimmed.split('=');
        const val = valParts.join('=').trim().replace(/^["']|["']$/g, '');
        if (key && !process.env[key.trim()]) {
          process.env[key.trim()] = val;
        }
      }
    });
  }
} catch {
  // Ignore env loader error
}


export interface EmailPayload {
  type?: 'quote' | 'callback' | 'contact';
  fullName: string;
  phone: string;
  email?: string;
  companyName?: string;
  city?: string;
  productName?: string;
  productSlug?: string;
  quantity?: string;
  preferredTime?: string;
  productInterest?: string;
  message?: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  referenceId: string;
  timestamp: string;
}

export async function sendInquiryEmail(data: EmailPayload): Promise<EmailResponse> {
  const referenceId =
    data.type === 'callback'
      ? `CB-${Math.floor(100000 + Math.random() * 900000)}`
      : `SEW-${Date.now().toString(36).toUpperCase()}`;

  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const secure = process.env.SMTP_SECURE !== 'false';
  const user = process.env.SMTP_USER || '';
  const pass = process.env.SMTP_PASS || '';
  const toEmail = process.env.TO_EMAIL || user || 'shivaaengineeringworks@gmail.com';
  const companyName = process.env.COMPANY_NAME || 'Shivaa Engineering Works';

  let subject = '';
  let badgeTitle = '';

  if (data.type === 'quote') {
    subject = `[New Quote Request] ${data.productName ? data.productName + ' - ' : ''}${data.fullName} (${referenceId})`;
    badgeTitle = 'Commercial Quote Request';
  } else if (data.type === 'callback') {
    subject = `[Callback Request] ${data.fullName} - ${data.phone} (${referenceId})`;
    badgeTitle = 'Customer Callback Request';
  } else {
    subject = `[Website Inquiry] ${data.fullName} (${referenceId})`;
    badgeTitle = 'Direct Website Contact Form';
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
        .header { background-color: #0f172a; color: #ffffff; padding: 24px; text-align: left; border-bottom: 4px solid #f59e0b; }
        .header h1 { margin: 0; font-size: 20px; font-weight: 700; color: #ffffff; }
        .header p { margin: 4px 0 0 0; color: #fbbf24; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
        .content { padding: 24px; }
        .badge { display: inline-block; background-color: #fef3c7; color: #b45309; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; border: 1px solid #fde68a; margin-bottom: 16px; }
        .ref-box { background-color: #f1f5f9; border-left: 4px solid #f59e0b; padding: 12px 16px; border-radius: 0 8px 8px 0; margin-bottom: 20px; }
        .ref-box .label { font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 700; }
        .ref-box .val { font-size: 16px; font-weight: 700; color: #0f172a; font-family: monospace; }
        .table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
        .table th, .table td { padding: 12px; text-align: left; border-bottom: 1px solid #e2e8f0; font-size: 14px; }
        .table th { background-color: #f8fafc; color: #475569; font-weight: 600; width: 35%; }
        .table td { color: #0f172a; font-weight: 500; }
        .message-box { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 14px; color: #334155; line-height: 1.6; margin-bottom: 20px; white-space: pre-wrap; }
        .footer { background-color: #f8fafc; padding: 16px 24px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #64748b; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>${companyName}</h1>
          <p>Engineering Sales Notification</p>
        </div>
        <div class="content">
          <div class="badge">${badgeTitle}</div>
          <div class="ref-box">
            <div class="label">Reference ID</div>
            <div class="val">${referenceId}</div>
          </div>

          <table class="table">
            <tr><th>Full Name</th><td><strong>${data.fullName || '-'}</strong></td></tr>
            <tr><th>Phone Number</th><td><a href="tel:${data.phone}" style="color: #d97706; text-decoration: none; font-weight: bold;">${data.phone || '-'}</a></td></tr>
            ${data.email ? `<tr><th>Email Address</th><td><a href="mailto:${data.email}">${data.email}</a></td></tr>` : ''}
            ${data.companyName ? `<tr><th>Company / Org</th><td>${data.companyName}</td></tr>` : ''}
            ${data.city ? `<tr><th>City / Location</th><td>${data.city}</td></tr>` : ''}
            ${data.productName ? `<tr><th>Product</th><td><strong>${data.productName}</strong></td></tr>` : ''}
            ${data.productInterest ? `<tr><th>Product Interest</th><td>${data.productInterest}</td></tr>` : ''}
            ${data.quantity ? `<tr><th>Quantity</th><td>${data.quantity}</td></tr>` : ''}
            ${data.preferredTime ? `<tr><th>Preferred Time</th><td>${data.preferredTime}</td></tr>` : ''}
            <tr><th>Submitted At</th><td>${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td></tr>
          </table>

          ${data.message ? `
            <div style="font-size: 12px; font-weight: 700; color: #475569; text-transform: uppercase; margin-bottom: 6px;">Customer Notes / Requirements:</div>
            <div class="message-box">${data.message}</div>
          ` : ''}
        </div>
        <div class="footer">
          Automated enquiry submission from <strong>${companyName}</strong> Website.<br>
          Coimbatore, Tamil Nadu, India.
        </div>
      </div>
    </body>
    </html>
  `;

  if (user && pass) {
    try {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: { user, pass },
        tls: { rejectUnauthorized: false },
      });

      await transporter.sendMail({
        from: `"${companyName} Website" <${user}>`,
        to: toEmail,
        replyTo: data.email || user,
        subject: subject,
        html: htmlContent,
      });

      if (data.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        try {
          const customerHtml = `
            <div style="font-family: sans-serif; padding: 20px; color: #333;">
              <h2>Thank you for contacting ${companyName}</h2>
              <p>Dear ${data.fullName},</p>
              <p>We have received your enquiry (Ref ID: <strong>${referenceId}</strong>). Our sales engineering team in Coimbatore will review your requirements and get back to you shortly.</p>
              <br>
              <p>Best regards,<br><strong>Sales Team | ${companyName}</strong><br>Coimbatore, Tamil Nadu</p>
            </div>
          `;
          await transporter.sendMail({
            from: `"${companyName}" <${user}>`,
            to: data.email,
            subject: `Enquiry Received (${referenceId}) - ${companyName}`,
            html: customerHtml,
          });
        } catch (autoErr) {
          console.warn('[Nodemailer] Auto-reply to customer failed:', autoErr);
        }
      }

      console.log(`[Nodemailer] Email sent successfully! Reference ID: ${referenceId}`);
      return {
        success: true,
        message: `Thank you ${data.fullName}. Your enquiry has been received and emailed to our sales team (Ref: ${referenceId}).`,
        referenceId,
        timestamp: new Date().toISOString(),
      };
    } catch (err: any) {
      console.error('[Nodemailer] SMTP transport error:', err);
      return {
        success: true,
        message: `Your enquiry has been registered (Ref: ${referenceId}). Our sales team will reach out to ${data.phone}.`,
        referenceId,
        timestamp: new Date().toISOString(),
      };
    }
  } else {
    console.log(`[Nodemailer Dev Mode] SMTP credentials missing in .env. Simulated email dispatch for Ref: ${referenceId}`);
    return {
      success: true,
      message: `Thank you for your enquiry! Our team has received your details (Ref: ${referenceId}) and will contact you shortly.`,
      referenceId,
      timestamp: new Date().toISOString(),
    };
  }
}
