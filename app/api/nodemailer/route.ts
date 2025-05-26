import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (name | email | message) {
      return NextResponse.json(
        {
          message: "Invalid or empty input fields",
          response: false,
        },

        { status: 401 }
      );
    }
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: "kartik200421@gmail.com",
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Form Submission</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #ffffff; line-height: 1.5;">
      <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff;">
        
        <!-- Header -->
        <div style="border-bottom: 1px solid #000000; padding: 0 0 24px 0; margin-bottom: 32px;">
          <h1 style="margin: 0; color: #000000; font-size: 24px; font-weight: 500; letter-spacing: -0.02em;">
           Message from your Portfolio
          </h1>
        </div>

        <!-- Content -->
        <div style="padding: 0;">
          
          <!-- From Section -->
          <div style="margin-bottom: 32px;">
            <h2 style="margin: 0 0 16px 0; color: #000000; font-size: 16px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">
              From
            </h2>
            
            <div style="margin-bottom: 8px;">
              <span style="color: #000000; font-size: 18px; font-weight: 400;">${name}</span>
            </div>
            
            <div>
              <a href="mailto:${email}" style="color: #000000; text-decoration: underline; font-size: 16px; text-decoration-thickness: 1px; text-underline-offset: 2px;">${email}</a>
            </div>
          </div>

          <!-- Message Section -->
          <div style="margin-bottom: 32px;">
            <h2 style="margin: 0 0 16px 0; color: #000000; font-size: 16px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">
              Message
            </h2>
            <div style="border-left: 2px solid #000000; padding-left: 16px;">
              <p style="margin: 0; color: #000000; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <!-- Reply Button -->
          <div style="margin-top: 40px;">
            <a href="mailto:${email}" 
               style="display: inline-block; 
                      background-color: #000000; 
                      color: #ffffff; 
                      text-decoration: none; 
                      padding: 12px 24px; 
                      font-size: 16px; 
                      font-weight: 400; 
                      border: none;
                      transition: all 0.2s ease;">
              Reply
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="border-top: 1px solid #000000; padding: 24px 0 0 0; margin-top: 48px;">
          <p style="margin: 0; color: #666666; font-size: 14px; font-weight: 400;">
            Received on ${new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })} at ${new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })}
          </p>
        </div>

      </div>
    </body>
    </html>
  `,
    };

    const response = await transport.sendMail(mailOptions);

    return NextResponse.json(
      {
        response: true,
        messageId: response.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      {
        error: true,
        errorMessage: "Failed to send email",
      },
      { status: 500 }
    );
  }
}
