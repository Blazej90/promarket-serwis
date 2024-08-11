import nodemailer from "nodemailer";

export default async function sendEmail(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Wszystkie pola są wymagane" });
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
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: "Wiadomość wysłana pomyślnie" });
    } catch (error) {
      console.error("Błąd podczas wysyłania wiadomości:", error);
      return res
        .status(500)
        .json({ message: "Wystąpił błąd podczas wysyłania wiadomości" });
    }
  } else {
    return res.status(405).json({ message: "Metoda niedozwolona" });
  }
}
