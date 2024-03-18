const nodemailer = require('nodemailer');

const sendEmail =  (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: '3stackcoder@gmail.com',
      pass: 'wzkmtlkivwncecio'
    }
  });

  const mailOptions = {
    from: '3stackcoder@gmail.com',
    to: to,
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = sendEmail;






//     sendEmail(['martinwarren2000@gmail.com', 'leolalopeslobo@gmail.com'], 'Lead Saved Notification', 'The lead has been saved successfully.');
// this put it wheveer you want to call it
