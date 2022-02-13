import { google } from "googleapis";
const sheets = google.sheets("v4");

async function handler(req, res) {
  if (req.method === "POST") {
    const Timestamp = req.body.Timestamp;
    const name = req.body.name;
    const brand = req.body.brand;
    const contact = req.body.contact;
    const description = req.body.description;
    const email = req.body.email;

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
