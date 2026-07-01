import nodemailer from 'nodemailer'
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' })
  }

  const { name, email, company, subject, message } = req.body ?? {}

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: 'Missing required fields.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: 'Invalid email address.' })
  }

  console.log('[DEBUG] Credentials Check:', { 
    hasEmail: !!process.env.SMTP_EMAIL, 
    hasPassword: !!process.env.SMTP_PASSWORD 
  });

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  const subjectLine = `[Nurofin Enquiry] ${subject}${company ? ' - ' + company : ''}`

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><title>New Contact Enquiry</title></head>
<body style="margin:0;padding:0;background:#11121C;font-family:'Inter',system-ui,sans-serif;color:#F5F7FA;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#11121C;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#1A1B28;border-radius:12px;border:1px solid rgba(245,247,250,0.08);overflow:hidden;max-width:600px;width:100%;">
        <tr><td style="background:linear-gradient(135deg,#B137FF 0%,#173EEA 50%,#67C8FF 100%);padding:32px 40px;">
          <h1 style="margin:0;font-size:24px;font-weight:700;color:#fff;">New Contact Enquiry</h1>
          <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.75);">Received via nurofin.com/contact</p>
        </td></tr>
        <tr><td style="padding:36px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
            <tr><td colspan="2" style="border-bottom:1px solid rgba(245,247,250,0.08);padding-bottom:16px;"><p style="margin:0;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#67C8FF;">Sender Details</p></td></tr>
            <tr><td height="16"></td></tr>
            <tr><td style="font-size:13px;color:rgba(245,247,250,0.6);padding-bottom:10px;width:130px;">Full Name</td><td style="font-size:14px;color:#F5F7FA;font-weight:500;padding-bottom:10px;">NAMEPLACEHOLDER</td></tr>
            <tr><td style="font-size:13px;color:rgba(245,247,250,0.6);padding-bottom:10px;">Work Email</td><td style="font-size:14px;padding-bottom:10px;">EMAILPLACEHOLDER</td></tr>
            COMPANYROW
            <tr><td style="font-size:13px;color:rgba(245,247,250,0.6);">Subject</td><td><span style="display:inline-block;background:rgba(103,200,255,0.1);border:1px solid rgba(103,200,255,0.25);border-radius:20px;padding:4px 12px;font-size:12px;color:#67C8FF;font-weight:500;">SUBJECTPLACEHOLDER</span></td></tr>
          </table>
          <p style="margin:0 0 12px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#67C8FF;">Message</p>
          <div style="background:#22233A;border-radius:8px;border:1px solid rgba(245,247,250,0.08);padding:20px 24px;">
            <p style="margin:0;font-size:14px;line-height:1.7;color:rgba(245,247,250,0.85);white-space:pre-wrap;">MESSAGEPLACEHOLDER</p>
          </div>
        </td></tr>
        <tr><td style="padding:20px 40px 28px;border-top:1px solid rgba(245,247,250,0.08);"><p style="margin:0;font-size:12px;color:rgba(245,247,250,0.35);text-align:center;">Sent from the contact form at nurofin.com</p></td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`

  const companyRow = company
    ? `<tr><td style="font-size:13px;color:rgba(245,247,250,0.6);padding-bottom:10px;">Company</td><td style="font-size:14px;color:#F5F7FA;font-weight:500;padding-bottom:10px;">${escHtml(company)}</td></tr>`
    : ''

  const finalHtml = html
    .replace('NAMEPLACEHOLDER', escHtml(name))
    .replace('EMAILPLACEHOLDER', `<a href="mailto:${escHtml(email)}" style="color:#67C8FF;text-decoration:none;">${escHtml(email)}</a>`)
    .replace('COMPANYROW', companyRow)
    .replace('SUBJECTPLACEHOLDER', escHtml(subject))
    .replace('MESSAGEPLACEHOLDER', escHtml(message))

  try {
    await transporter.sendMail({
      from: `"Nurofin Contact Form" <${process.env.SMTP_EMAIL}>`,
      to: process.env.SMTP_EMAIL,
      replyTo: email,
      subject: subjectLine,
      html: finalHtml,
    })
    return res.status(200).json({ success: true, message: 'Your message has been sent. We will get back to you shortly.' })
  } catch (err) {
    console.error('[contact] sendMail error:', err)
    return res.status(500).json({ success: false, error: 'Failed to send message. Please try again or email us directly at info.nurofin@gmail.com.' })
  }
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;')
}
