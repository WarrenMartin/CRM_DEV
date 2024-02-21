const Lead = require('../models/LeadModel') 
const mongoose = require('mongoose')
const path = require('path');

const getLeads = async(req,res) => {
    // const leads = await Lead.find({}).sort({createdAt: -1})  //sorting according to dates but -a makes it from newest date to the oldest
    // res.status(200).json(leads)
    
    res.sendFile(path.join(__dirname, '../views', 'form.html'));
}

const saveLead = async (req, res) => {
  const { title, reps, note, load } = req.body;
  const user_id = "659b7d3bfc9fd6488bd6814e";

  console.log('name:', title, 'email:', reps, 'phone:', note, load);

  try {
      const newLead = new Lead({ title, reps, note, load, user_id });
      await newLead.save();
      return;
      console.log('Lead saved to the database:', newLead);
      res.send(`Form submitted successfully`);
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