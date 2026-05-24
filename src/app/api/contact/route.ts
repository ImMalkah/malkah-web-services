import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// We will use process.env.RESEND_API_KEY
// The user will provide this in .env.local
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy');

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, package: selectedPackage, message } = body;

    // Server-side validation
    if (!name || !message || !selectedPackage) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!email && !phone) {
      return NextResponse.json({ error: 'Email or phone is required' }, { status: 400 });
    }

    // Construct the HTML email
    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #ffffff; border: 1px solid #eaeaea; border-radius: 10px;">
        <h2 style="color: #111111; margin-bottom: 24px; border-bottom: 2px solid #00f0ff; padding-bottom: 12px;">New Inquiry from Malkah Web Services</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eaeaea; width: 120px; font-weight: bold; color: #555;">Name:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eaeaea; color: #111;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eaeaea; font-weight: bold; color: #555;">Email:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eaeaea; color: #111;">
              ${email ? `<a href="mailto:${email}" style="color: #0066cc;">${email}</a>` : '<em>Not provided</em>'}
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eaeaea; font-weight: bold; color: #555;">Phone:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eaeaea; color: #111;">
              ${phone ? `<a href="tel:${phone}" style="color: #0066cc;">${phone}</a>` : '<em>Not provided</em>'}
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eaeaea; font-weight: bold; color: #555;">Package:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eaeaea; color: #111;">
              <span style="background: #00f0ff; color: #000; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 0.9em;">
                ${selectedPackage}
              </span>
            </td>
          </tr>
        </table>

        <h3 style="color: #333; margin-bottom: 12px;">Message:</h3>
        <div style="background: #f9f9f9; padding: 16px; border-radius: 8px; border: 1px solid #eaeaea; white-space: pre-wrap; color: #333; line-height: 1.6;">
          ${message}
        </div>
        
        <div style="margin-top: 32px; font-size: 0.85em; color: #888; text-align: center;">
          This email was automatically generated from your website's contact form.
        </div>
      </div>
    `;

    // Send email using Resend
    // By default, you can only send from a domain you verified on Resend (e.g., info@malkahservices.ca)
    // For testing, Resend allows sending FROM onboarding@resend.dev TO your registered email.
    // Assuming the user has verified their domain and added RESEND_API_KEY:
    
    // Fallback: If no API key is provided, log to console and simulate success for dev purposes
    if (!process.env.RESEND_API_KEY) {
      console.log('--- RESEND_API_KEY not found. Simulating email send. ---');
      console.log('To:', 'admin@malkahservices.ca');
      console.log('Subject:', `New Inquiry: ${selectedPackage} Package - ${name}`);
      console.log('Body:', htmlContent);
      console.log('-------------------------------------------------------');
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      return NextResponse.json({ success: true, simulated: true });
    }

    const data = await resend.emails.send({
      from: 'Contact Form <info@malkahservices.ca>', // User should configure this to their verified domain
      to: ['admin@malkahservices.ca'],
      subject: `New Inquiry: ${selectedPackage} Package - ${name}`,
      html: htmlContent,
      reply_to: email || undefined,
    });

    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error('Email API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
