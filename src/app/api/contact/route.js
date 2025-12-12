import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.json();
    const {
      name,
      email,
      institution,
      pickup_address,
      pickup_time,
      collection_day,
      destination_address,
      return_trip,
      return_trip_time,
      telephone,
      transport_type,
      recurring_trip,
      news,
    } = formData;

    // Basic validation for required fields
    if (!name || !email || !pickup_address || !destination_address || !telephone || !transport_type) {
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

    // Format transport type labels
    const transportTypeLabels = {
      transportation_with_wheelchair: "Transport mit Rollstuhl",
      wheelchair_transport_convertible: "Rollstuhltransport (umrüstbar)",
      transportation_without_wheelchair: "Transport ohne Rollstuhl",
      car_up_to_4_people: "Auto (bis zu 4 Personen)",
      minibus_db_8_persons: "Minibus (DB 8 Personen)",
    };

    const transportTypeLabel = transportTypeLabels[transport_type] || transport_type;

    // Format email body
    let emailBody = `Neue Fahrdienst-Schnellanfrage\n\n`;
    emailBody += `=== Kontaktinformationen ===\n`;
    emailBody += `Name: ${name}\n`;
    emailBody += `E-Mail: ${email}\n`;
    emailBody += `Telefonnummer: ${telephone}\n`;
    if (institution) {
      emailBody += `Institution/Organisation: ${institution}\n`;
    }
    emailBody += `\n=== Fahrtdetails ===\n`;
    emailBody += `Abholadresse: ${pickup_address}\n`;
    if (pickup_time) {
      emailBody += `Abholzeit: ${pickup_time}\n`;
    }
    if (collection_day) {
      emailBody += `Abholtag: ${collection_day}\n`;
    }
    emailBody += `Zieladresse: ${destination_address}\n`;
    if (return_trip) {
      emailBody += `Rückfahrt: ${return_trip === "yes" ? "Ja" : "Nein"}\n`;
      if (return_trip === "yes" && return_trip_time) {
        emailBody += `Rückfahrtzeit: ${return_trip_time}\n`;
      }
    }
    emailBody += `Art des Transports: ${transportTypeLabel}\n`;
    if (recurring_trip) {
      emailBody += `Wiederkehrende Fahrt: ${recurring_trip === "yes" ? "Ja" : "Nein"}\n`;
    }
    if (news) {
      emailBody += `\n=== Nachricht ===\n${news}\n`;
    }

    // Send email
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `Neue Fahrdienst-Schnellanfrage von ${name}`,
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

