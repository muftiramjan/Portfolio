import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Nodemailer transporter configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // আপনার ইমেইল
        pass: process.env.EMAIL_PASS, // আপনার ইমেইল পাসওয়ার্ড
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Replace with your email
      subject: `New message from ${name}`,
      text: `Email: ${email}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      if(res.status){
        res.status(200).json({ message: "Email sent successfully" });
      }
    } catch (error) {
      console.error("Error sending email: ", error);
      if(res.status){


        res.status(500).json({ message: "Error sending email" });
      }
    }
  } else {
    if(res.status){

      res.status(405).json({ message: "Method not allowed" });
    }
  }
}
