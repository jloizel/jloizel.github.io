import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { render } from "@react-email/render";
import { EmailTemplate } from '../../../../components/contact/contactForm/emailTemplate';

export async function POST(request: NextRequest) {
  try {
    const { message, name, email } = await request.json(); // Ensure JSON is correctly parsed

    // Configure nodemailer transport
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // Mail options
    const mailOptions: Mail.Options = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Message from ${name}`,
      text: message,
      html: render(EmailTemplate({ name: name, emailAddress: email, message: message })),
    };

    // Send email using the transport
    const sendMailPromise = () =>
      new Promise<void>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve(); // Properly resolve the promise when email is sent
          } else {
            reject(err.message); // Reject if there's an error
          }
        });
      });

    // Wait for the email to be sent
    await sendMailPromise();

    // Respond with success JSON message
    return NextResponse.json({ message: 'Email sent' });

  } catch (err) {
    console.error('Error occurred while sending email:', err);
    
    // Respond with a valid JSON error message
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
