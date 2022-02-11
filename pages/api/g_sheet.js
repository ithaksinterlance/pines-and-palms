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
      port: 465,
      secure: true,
      auth: {
        user: "it.hakstime@gmail.com",
        pass: process.env.PASS,
      },
    });

    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
          if (error) {
              console.log(error);
              reject(error);
          } else {
              console.log("Server is ready to take our messages");
              resolve(success);
          }
      });
  });

    var details = "Timestamp : " + Timestamp + "\n" + "Customer Name : " + name + "\n" + "Description : " + description;
    var detailEncode = encodeURI(details);

    try {
      const emailRes = await transporter.sendMail({
        from: email,
        to: ["haksinterlance@gmail.com","it.haksinterlance@gmail.com"],
        subject: `Emirates-car.com - Auto Spare Parts Inquiry Received`,
        html: `<div><h4>Hi Auto spare parts response received for</h4>
        <p>Timestamp: ${Timestamp}</p>
        <p>Customer Name : ${name}</p>
        <p>Description : ${description}</p>
        <p>WhatsApp Link: https://api.whatsapp.com/send?phone=${contact}&text=${detailEncode}%0AWe%20received%20your%20enquiry%20for%20car%20battery%20for%20above%20vehicle</p>
        </div>`,
      });
      console.log(`Message sent`, emailRes.messageId);
    } catch (err) {
      console.log(err);
    }

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
