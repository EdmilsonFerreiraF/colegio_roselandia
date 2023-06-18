import type { NextApiRequest, NextApiResponse } from "next";
import { FormidableError, parseForm } from "../../lib/parse-form";
const fs = require("fs");

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{
    data: {
      url: string | string[];
    } | null;
    error: string | null;
  }>
) => {
  try {
    const { fields, files } = await parseForm(req);
    const { subject, from, to, text } = fields;

    const filesMedia = files.media as any;
    const pathToAttachment = filesMedia[0].filepath;
    const attachment = fs.readFileSync(pathToAttachment).toString("base64");

    console.log("filesMedia[0]", filesMedia[0]);
    console.log("pathToAttachment", pathToAttachment);
    console.log("attachment", attachment);

    const msg = {
      to: to[0],
      from: from[0],
      subject: subject[0],
      text: text[0],
      attachments: [
        {
          content: attachment,
          filename: filesMedia[0].newFilename,
          type: filesMedia[0].mimetype,
          disposition: "attachment",
        },
      ],
    };

    sgMail.send(msg).catch((err: any) => {
      console.log(err);
    });

    const file = files.media;
    let url = Array.isArray(file) ? file.map((f) => f.filepath) : file.filepath;

    console.log("files", files);
    console.log("fields", fields);
    console.log("url", url);

    res.status(200).json({
      data: {
        url,
      },
      error: null,
    });
  } catch (e: any) {
    if (e instanceof FormidableError) {
      res.status(e.httpCode || 400).json({ data: null, error: e.message });
    } else {
      console.error(e);
      res.status(500).json({ data: null, error: "Internal Server Error" });
    }
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({
      data: null,
      error: "Method Not Allowed",
    });
    return;
  }

  // res.status(200).json({
  //   data: {
  //     url: "/uploaded-file-url",
  //   },
  //   error: null,
  // });
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
