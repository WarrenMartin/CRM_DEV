const Lead = require('../models/LeadModel');
// const mongoose = require('mongoose');
const path = require('path');
const nodemailer = require('nodemailer');    
const sendEmail = require("./mailsent");







const getLeads = async (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'form.html'));
};


const saveLead = async (req, res) => {
  console.log("The lead has been saved")
  const { title, reps, note, load } = req.body;
  const user_id = "659b7d3bfc9fd6488bd6814e";

  console.log('name:', title, 'email:', reps, 'phone:', note, load);

  try {
    // Save the lead to the database
    const newLead = new Lead({ title, reps, note, load, user_id });
    await newLead.save();
    // await sendEmail();
    await sendEmail(title, reps, note, load);

  



    console.log('Lead saved to the database:', newLead);


    

       
    
    
    // leadSaved=false;
    // Send response to client
    res.status(200).json({ success: true, message: 'Form submitted successfully' });

    return newLead;
  } catch (error) {
    console.error('Error saving lead to the database:', error);
    throw error;
  }
};

module.exports = {
  getLeads, 
  saveLead,
};


