const nodemailer = require('nodemailer');

// const sendEmail = async () => {
  const sendEmail = async (title, reps, note, load) => {
    console.log("Hello Wor")
  try {
      // Sending email using Nodemailer
      const transporter = nodemailer.createTransport({
          service: 'gmail',
          host: 'smtp.gmail.com', 
          port: 587, 
          secure: false, 
          auth: {
              user: '3stackcoder@gmail.com',
              pass: 'wzkmtlkivwncecio'
              //pass: 'WarLeo@182558'
          }
      });

      const mailOptions = {
          from: '3stackcoder@gmail.com',
          to: ['martinwarren2000@gmail.com','leolalopeslobo@gmail.com'],
          subject: 'New Lead Captured',
          // text: `A new lead has been captured: {}`
          text: `A new lead has been captured:\nName: ${title}\nEmail: ${reps}\nPhone: ${note}\nLoad: ${load}`

      };

      console.log("email sent!")

      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
  } catch (error) {
      console.error("Email not sent:", error);
  }
};

module.exports = sendEmail;



// const nodemailer = require('nodemailer');

// const sendEmail = async (title, reps, note, load) => {
//   console.log("Hello World")
//   try {
//       // Sending email using Nodemailer
//       const transporter = nodemailer.createTransport({
//           service: 'gmail',
//           host: 'smtp.gmail.com', 
//           port: 587, 
//           secure: false, 
//           auth: {
//               user: '3stackcoder@gmail.com',
//               pass: 'wzkmtlkivwncecio'
//           }
//       });

//       const mailOptions = {
//           from: '3stackcoder@gmail.com',
//           to: ['martinwarren2000@gmail.com', 'leolalopeslobo@gmail.com'],
//           subject: 'New Lead Captured',
//           text: `A new lead has been captured:\nName: ${title}\nEmail: ${reps}\nPhone: ${note}\nLoad: ${load}`
//       };

//       console.log("email sent!")

//       await transporter.sendMail(mailOptions);
//       console.log('Email sent successfully');
//   } catch (error) {
//       console.error("Email not sent:", error);
//   }
// };

// module.exports = sendEmail;