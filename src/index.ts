import nodemailer from "nodemailer";

import SMTP_CONFIG from "./config/smtp";

const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port : SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass,
    },
    tls: {
        rejectUnauthorized: false,
    }
});

async function run() {
    const mailSent = transporter.sendMail({
        text: "Texto de email",
        subject: "Assunto do email",
        from: "Luis Gonga Mendes <luischimucomendes8@gmail.com>",
        to: ["luischimucomendes8@gmail.com", "luischimucomendes8@gmail.com"]
    })

    console.log("meu email foi enviado com cusse", mailSent)
}

run();

