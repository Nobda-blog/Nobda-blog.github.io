export async function post({ request }) {
    const { firstName, lastName, email, phone, details } = await request.json();
  
    // Use a service like Nodemailer or an external API (SendGrid, Mailgun, etc.) to send the email.
    const nodemailer = require('nodemailer');
  
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or your preferred email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  
    const mailOptions = {
      from: email,
      to: process.env.RECIPIENT_EMAIL, // Your email address
      subject: `New Contact Message from ${firstName} ${lastName}`,
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone: ${phone}
        Details: ${details}
      `,
    };
  
    try {
      await transporter.sendMail(mailOptions);
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
  }
  