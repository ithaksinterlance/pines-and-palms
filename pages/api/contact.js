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
    try {
      await transporter.sendMail({
        from: email,
        to: ["it.haksinterlance@gmail.com", "haksinterlance@gmail.com"],
        subject: `Emirates-car.com - Auto Spare Parts Inquiry Received`,
        html: `<div><h4>Hi Auto spare parts response received for</h4>
      <p>Timestamp: ${Timestamp}</p>
      <p>Customer Name : ${name}</p>
      <p>Description : ${description}</p>
      <p>WhatsApp Link: https://api.whatsapp.com/send?phone=${contact}&text=${detailEncode}%0AWe%20received%20your%20enquiry%20for%20car%20battery%20for%20above%20vehicle</p>
      </div>`,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message || error.toString() });
    }
  } else {
    res.status(200).json({ message: "error" });
  }
}

export default handler;
