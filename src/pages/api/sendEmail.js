import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function sendEmail(req, res) {
  if (req.method === "POST") {
    const form = formidable();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Błąd podczas parsowania formularza:", err);
        return res.status(500).json({ message: "Błąd serwera" });
      }

      const { name, email, message } = fields;

      if (!name || !email || !message) {
        return res.status(400).json({ message: "Wszystkie pola są wymagane" });
      }

      const attachments = [];
      if (files.attachments) {
        const uploadedFiles = Array.isArray(files.attachments)
          ? files.attachments
          : [files.attachments];

        uploadedFiles.forEach((file) => {
          attachments.push({
            filename: file.originalFilename,
            path: file.filepath,
          });
        });
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_MAIN,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: email,
        to: process.env.EMAIL_MAIN,
        subject: `Nowa wiadomość od ${name}`,
        text: `Od: ${name}\nEmail: ${email}\n\nWiadomość:\n${message}`,
        attachments: attachments,
      };

      try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: "Wiadomość wysłana pomyślnie" });
      } catch (error) {
        console.error("Błąd podczas wysyłania wiadomości:", error);
        return res
          .status(500)
          .json({ message: "Wystąpił błąd podczas wysyłania wiadomości" });
      } finally {
        attachments.forEach((attachment) => {
          fs.unlink(attachment.path, (err) => {
            if (err) console.error("Błąd podczas usuwania pliku:", err);
          });
        });
      }
    });
  } else {
    return res.status(405).json({ message: "Metoda niedozwolona" });
  }
}
