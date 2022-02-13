import nodemailer from 'nodemailer'

export default function (req, res) {
  const Timestamp = req.body.Timestamp;
    const name = req.body.name;
    const brand = req.body.brand;
    const contact = req.body.contact;
    const description = req.body.description;
    const email = req.body.email;
  require('dotenv').config()

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
       auth: {
            user: 'it.hakstime@gmail.com',
            pass: process.env.PASS,
         },
    secure: true,
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
  const mailData = {
    from: email,
    to: [ "it.haksinterlance@gmail.com"],
    subject: `Emirates-car.com - Auto Spare Parts Inquiry Received`,
    html: `<div><h4>Hi Auto spare parts response received for</h4>
    <p>Timestamp: ${Timestamp}</p>
    <p>Customer Name : ${name}</p>
    <p>Description : ${description}</p>
    <p>WhatsApp Link: https://api.whatsapp.com/send?phone=${contact}&text=${detailEncode}%0AWe%20received%20your%20enquiry%20for%20car%20battery%20for%20above%20vehicle</p>
    </div>`,
  }

  transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info);
  })

  console.log(req.body)
  res.send('success')
}