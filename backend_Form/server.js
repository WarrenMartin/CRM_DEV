require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');

//importing mongoose
const mongooose = require("mongoose")

//const Lead = require('./models/leadModel') //importing the database model
const leadRoutes = require('./routes/leads')
const path = require('path')


const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


// Set the path for static files (like HTML)
app.use(express.static(path.join(__dirname, 'views')));



app.use(express.json())

app.use((req,res,next) => {
  console.log("Request path",req.path,"and Request method",req.method)
  next()
})

//ROUTES
app.use('/api/leads',leadRoutes)


// // Define a route to serve the form HTML
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'views', 'form.html'));
// });

// // Define a route to handle form submissions
// app.post('/submit', async (req, res) => {
//   const { name, email, phone } = req.body;

//   console.log('name:', name, 'email:', email, 'phone:', phone);

//   try {
//     // Save lead data to the MongoDB database
//     const newLead = new Lead({ name, email, phone });
//     await newLead.save();
//     console.log('Lead saved to the database:', newLead);
    
//     // Send a success response
//     res.send(`Form submitted successfully!<br>Name: ${name}<br>Email: ${email}<br>Phone: ${phone}`);
//   } catch (error) {
//     console.error('Error saving lead to the database:', error);
    
//     // Send an error response
//     res.status(500).send('Internal Server Error');
//   }
// });


//CONNECTING TO THE DATABASE
mongooose.connect(process.env.MONGO_URI) //this function is asyn in nature so it takes a little bit of time to do and therefore it returns a 'promise'
    .then(() => {
        console.log("Connected to the DB")
        //listen for request on a certain port number, once connected to DB
        app.listen(process.env.PORT, ()=>{
            console.log("listening in port",process.env.PORT)
        })
    }) //.then method to fire a function when it's complete
    .catch((error) => {
        console.log("Your getting this error because you havent connected to the form backend database",error)
    }) //to catch any kind of error

// mongooose.connect('process.env.MONGO_URI', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to the database');
//     app.listen(process.env.PORT, () => {
//       console.log('Server is listening on port 5000');
//     });
//   })
//   .catch(error => {
//     console.error('Error connecting to the database:', error);
//   });