const nodemailer = require("nodemailer")

let mailTransporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: `${process.env.EMAIL_USER}`,
    pass: `${process.env.EMAIL_PASSWORD}`,
  },
})

export default function handler(req, res) {
  console.log(EMAIL_PASSWORD)
  console.log(EMAIL_USER)
  const clientName = req.body.clientName
  const deposit = req.body.deposit
  const totalCost = req.body.totalCost
  const date = req.body.date
  const excursion = req.body.excursion
  const email = req.body.email
  let mailDetails = {
    from: "grandbay.puntacana@zohomail.com",
    to: `karnes.james@gmail.com`,
    subject: "Adventure Fun Tours Deposit",
    text: `${clientName} will be ${excursion} on ${date}, they have a deposit of ${deposit}, the total cost of their excursion is ${totalCost}`,
    html: `<h1>${excursion}</h1>
        <p>${clientName} will be ${excursion} on ${date}, they have a deposit of ${deposit}, the total cost of their excursion is ${totalCost}</p>
        <p>Client Email: ${email}</p>`,
  }

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log(err)
    } else {
      console.log("Email sent successfully")
    }
  })

  res.status(200)
}
