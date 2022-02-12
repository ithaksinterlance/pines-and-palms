import { google } from "googleapis";
const sheets = google.sheets("v4");
import nodemailer from "nodemailer";

async function handler(req, res) {
  if (req.method === "POST") {
    const Timestamp = req.body.Timestamp;
    const name = req.body.name;
    const brand = req.body.brand;
    const contact = req.body.contact;
    const description = req.body.description;
    const email = req.body.email;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "gmail",
      port: 465,
      auth: {
        user: "it.hakstime@gmail.com",
        pass: process.env.PASS,
      },
    });

    var details =
      "Timestamp : " +
      Timestamp +
      "\n" +
      "Customer Name : " +
      name +
      "\n" +
      "Description : " +
      description;
    var detailEncode = encodeURI(details);

    const mailOptions = {
      from: email,
      to: [ "it.haksinterlance@gmail.com"],
      subject: `Emirates-car.com - Auto Spare Parts Inquiry Received`,
      html: `<div><h4>Hi Auto spare parts response received for</h4>
      <p>Timestamp: ${Timestamp}</p>
      <p>Customer Name : ${name}</p>
      <p>Description : ${description}</p>
      <p>WhatsApp Link: https://api.whatsapp.com/send?phone=${contact}&text=${detailEncode}%0AWe%20received%20your%20enquiry%20for%20car%20battery%20for%20above%20vehicle</p>
      </div>`,
    };

    transporter.sendMail(mailOptions);

    const scopes = ["https://www.googleapis.com/auth/spreadsheets"];
    const jwt = new google.auth.JWT(
      process.env.EMIRATES_CAR_CLIENT_EMAIL,
      null,
      process.env.EMIRATES_CAR_FORMS_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes,
      null
    );

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.EMIRATES_CAR_DATABASE_ID,
      range: "emirates-car-sheet",
      valueInputOption: "USER_ENTERED",
      auth: jwt,
      requestBody: {
        values: [[Timestamp, brand, contact, description, email]],
      },
    });
    const data = JSON.stringify(response);

    res.status(201).json(data);
  } else {
    res.status(200).json({ message: "error" });
  }
}

export default handler;
