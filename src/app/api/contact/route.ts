import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
export const revalidate = 0;

export async function POST(req: NextRequest) {
  try {
    // Validate environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.error("Missing required environment variables: GMAIL_USER or GMAIL_PASS");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    const { firstName, lastName, email, interests, message } = await req.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Gmail SMTP Configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      },
      // Extended timeout settings for better network reliability
      connectionTimeout: 60000, // 60 seconds
      greetingTimeout: 30000,    // 30 seconds
      socketTimeout: 60000       // 60 seconds
    });
    
    console.log('📧 Using Gmail SMTP to send email to:', process.env.GMAIL_USER);

    const mailOptions = {
      from: process.env.GMAIL_USER, // Send from your Gmail account
      to: 'techudev1@gmail.com', // This is where you want to receive notifications
      subject: `📨 New Contact Form Submission from ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nInterests: ${Array.isArray(interests) ? interests.join(", ") : interests || "None specified"}\nMessage: ${message}`,
      html: `
        <h2>🎉 New Contact Form Submission - TechUDev</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; font-family: Arial, sans-serif; max-width: 600px;">
          <p><strong>👤 Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>🎯 Interests:</strong> ${Array.isArray(interests) ? interests.join(", ") : interests || "None specified"}</p>
          <p><strong>💬 Message:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px; border-left: 4px solid #007bff;">
            ${message.replace(/\n/g, '<br/>')}
          </div>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
          <p style="font-size: 12px; color: #666;">This email was sent from your TechUDev portfolio contact form.</p>
        </div>
      `
    };

    console.log('📧 Sending contact form submission...');
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully!');
    console.log('🔗 Preview URL:', nodemailer.getTestMessageUrl(info));
    console.log('📬 You can view this email at: https://ethereal.email/');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : "An unexpected error occurred" 
      },
      { status: 500 }
    );
  }
}
