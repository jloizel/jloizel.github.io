import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { render } from "@react-email/render";
import { EmailTemplate } from '../../../components/contact/emailTemplate';


export async function POST(request: NextRequest) {
  const { company, job, file, message, name, email, phoneNumber } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Message from ${name}`,
    text: `${message}`,
    html: render(EmailTemplate({ company: company, job: job, name: name, emailAddress: email, phoneNumber: phoneNumber, message: message })),
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err:any) {
        if (!err) {
          // resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}