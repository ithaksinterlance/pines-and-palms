import { google } from "googleapis";
const sheets = google.sheets("v4");

async function handler(req, res) {
  if (req.method === "POST") {
    const scopes = ["https://www.googleapis.com/auth/spreadsheets"];
    const jwt = new google.auth.JWT(
      process.env.EMIRATES_CAR_CLIENT_EMAIL,
      null,
      process.env.EMIRATES_CAR_FORMS_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes,
      null
    );

    const readData = await sheets.spreadsheets.values.get({
      auth: jwt,
      spreadsheetId: process.env.EMIRATES_CAR_DATABASE_ID,
      range: "emirates-car-sheet",
    });

    const today = new Date();
    const thisYear = today.getFullYear();
    const RefNo =
      thisYear.toString().substring(2) +
      "000" +
      (readData.data.values.length + 1);
    const Timestamp = req.body.Timestamp;
    const name = req.body.name;
    const brand = req.body.brand;
    const contact = req.body.contact;
    const description = "Ref: " + RefNo + "\n" + req.body.description;
    const email = req.body.email;
    const WApp = null;
    const SCnfD = null;
    const Y = null;
    const N = null;
    const Q = null;
    const Follow = null;
    const S = null;

    let messageURIOne =
      encodeURI(description) +
      "%0AWe%20received%20your%20enquiry%20for%20car%20auto%20parts%20for%20above%20vehicle";

    fetch(
      `https://api.telegram.org/bot${
        process.env.TELEGRAM_BOT
      }/sendMessage?chat_id=${process.env.CHAT_ID}&text=${messageURIOne +
        "\n" +
        "https://api.whatsapp.com/send?phone=" +
        contact +
        "&text=" +
        messageURIOne}`
    );

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.EMIRATES_CAR_DATABASE_ID,
      range: "emirates-car-sheet",
      valueInputOption: "USER_ENTERED",
      auth: jwt,
      requestBody: {
        values: [
          [
            Timestamp,
            RefNo,
            email,
            brand,
            contact,
            description,
            WApp,
            SCnfD,
            Y,
            N,
            Q,
            Follow,
            S,
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
