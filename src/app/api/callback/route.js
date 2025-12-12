import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { callback_name, callback_telephone } = await req.json();

    // Basic validation
    if (!callback_name || !callback_telephone) {
      return Response.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Format email body
    let emailBody = `Rückruf-Anfrage\n\n`;
    emailBody += `Name: ${callback_name}\n`;
    emailBody += `Telefonnummer: ${callback_telephone}\n`;

    // Send email
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: `Rückruf-Anfrage von ${callback_name}`,
      text: emailBody,
    });

    return Response.json({ ok: true });
  } catch (e) {
    console.error("Email sending error:", e);
    return Response.json(
      { ok: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}

