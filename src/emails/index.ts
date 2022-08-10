import { buildSendMail } from "mailing-core";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  pool: true,
  host: "smtp.sendgrid.net",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: "apikey",
    pass: process.env.SENDGRID_API_KEY,
  },
});

const sendMail = buildSendMail({
  transport,
  defaultFrom: "Notificaciones Dvlance <notificaciones@dvlance.com>",
});

export default sendMail;
