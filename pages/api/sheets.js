import { google } from "googleapis";
const sheets = google.sheets("v4");

async function handler(req, res) {
  if (req.method === "POST") {
    const Timestamp = req.body.Timestamp;
    const whatsappno = req.body.whatsappno;
    const email = req.body.email;
    const make = req.body.make;
    const model = req.body.model;
    const year = req.body.year;
    const partnumber = req.body.partnumber;
    const partname = req.body.partname;
    const city = req.body.city;
    const refno = req.body.refno;

    console.log(
      Timestamp,
      whatsappno,
      email,
      make,
      model,
      year,
      partnumber,
      partname,
      city,
      refno
    );

    const scopes = ["https://www.googleapis.com/auth/spreadsheets"];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_FORMS_CLIENT_EMAIL,
      null,
      process.env.GOOGLE_SHEETS_FORMS_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes,
      null
    );

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.DATABASE_ID,
      range: "asp-haksit",
      valueInputOption: "USER_ENTERED",
      auth: jwt,
      requestBody: {
        values: [
          [
            Timestamp,
            whatsappno,
            email,
            make,
            model,
            year,
            partnumber,
            partname,
            city,
            refno,
          ],
        ],
      },
    });
    const data = JSON.stringify(response);

    res.status(201).json(data);
  } else {
    res.status(200).json({ message: "error" });
  }
}

export default handler;
