import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { rateLimit } from '@/lib/rate-limit';

// Rate limiting: 5 requests per minute per IP
const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500, // Max 500 users per interval
});

// Enable Gmail SMTP in production
const isProduction = process.env.NODE_ENV === 'production';

// Email configuration from environment variables
const EMAIL_USER = process.env.GMAIL_USER;
const EMAIL_PASS = process.env.GMAIL_PASS;

// Email template
const getEmailTemplate = (email: string) => ({
  from: '"TechUDev" <noreply@techudev.com>',
  to: [email, 'techudev1@gmail.com'].join(','),
  subject: 'Response Recorded',
  text: 'response recorded',
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb;">Response Recorded</h2>
      <p>response recorded</p>
      <p>Thank you for your interest in TechUDev!</p>
      <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;">
      <p style="font-size: 12px; color: #718096;">
        This is an automated message. Please do not reply to this email.
      </p>
    </div>
  `,
});

// Validate email format
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';

    // Apply rate limiting
    try {
      await limiter.check(request, 5, ip); // 5 requests per minute
    } catch (error) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': '60' } }
      );
    }

    // Validate email
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    let transporter;
    
    if (isProduction) {
      // Use Gmail SMTP in production
      if (!EMAIL_USER || !EMAIL_PASS) {
        console.error('Missing email configuration');
        throw new Error('Email service is not properly configured');
      }
      
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASS
        }
      });
    } else {
      // Use Ethereal for development
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass
        }
      });
    }

    // Prepare and send email
    const message = getEmailTemplate(email);
    const info = await transporter.sendMail(message);

    // Log email info
    if (isProduction) {
      console.log(`Email sent to: ${email}, techudev1@gmail.com`);
    } else {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      console.log('Preview URL:', previewUrl);
      
      // In development, return the preview URL for testing
      return NextResponse.json({ 
        success: true,
        message: 'Email sent successfully (development mode)',
        previewUrl
      });
    }

    return NextResponse.json({ 
      success: true,
      message: 'Email sent successfully',
      ...(!isProduction && { previewUrl: nodemailer.getTestMessageUrl(info) })
    });

  } catch (error: unknown) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    const errorResponse: { error: string; details?: string } = {
      error: 'Failed to send email. Please try again later.'
    };
    
    if (process.env.NODE_ENV === 'development') {
      errorResponse.details = errorMessage;
    }
    
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
