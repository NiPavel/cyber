import { createTransport } from "nodemailer";

export const sendMail = (subject, body, to) => {
  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: "ercyb2070@gmail.com",
      pass: "omshnqpdlqofldts",
    },
  });
  const mailOptions = {
    from: "ercyb2070@gmail.com",
    to,
    subject: "Verification code",
    text: body,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
