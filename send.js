import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true = 465, false = 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const info = await transporter.sendMail({
  from: `"Smavo Mailer" <${process.env.SMTP_USER}>`,
  to: "recipient@example.com", // change this
  subject: "Test Email from Smavo Mailer",
  text: "If you're seeing this, Gmail app password worked!",
});

console.log("✅ Message sent:", info.messageId);
