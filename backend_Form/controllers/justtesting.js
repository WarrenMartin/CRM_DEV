
var nodemailer = require('nodemailer');

myVariable=2
// Assuming you have a variable named 'myVariable' that is set to 2
if (myVariable === 2) {
    // Paste the email sending code here
    var nodemailer = require('nodemailer');
    // Rest of the code...
  
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: '3stackcoder@gmail.com',
        pass: 'wzkmtlkivwncecio'
      }
    });
  
    var mailOptions = {
      from: 'martinwarren2000@gmail.com',
      to: ['martinwarren2000@gmail.com','leolalopeslobo@gmail.com'],
      subject: 'Sending Email using Node.js',
      text: 'That was easy!',
    };
  
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  } else {
    // Code to run if the condition is not met
    console.log("myVariable is not equal to 2");
  }