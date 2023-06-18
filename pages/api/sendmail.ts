import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { subject, from, to, text } = req.body;

    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to,
      from,
      subject,
      text,
    };

    console.log("to, from, subject, text", to, from, subject, text);

    sgMail.send(msg).catch((err: any) => {
      console.log(err);
    });

    res
      .status(200)
      .send({ message: "Agendamento de visita enviado com sucesso" });
  } catch (error: any) {
    res.status(500).send({ error });
  }
};

export default handler;
