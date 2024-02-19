const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({

    // name: {
    //     type: String,
    //     required: true
    // },
    // email: {
    //     type: String,
    //     required: true,
    // },
    // phone: {
    //     type: String,
    //     required: true
    // }

    title: {
        type: String,
        required: true
      },
      reps: {
        type: String,
        //email
        required: true
      },
      note:{
        type:String,
        required:true
      },
      load: {
        type: Number,
        //phn number
        required: true
      },
      user_id: {
        type: String,
        required: true
      }
    }, { timestamps: true}); //this adds a creats and update time


// const Lead = mongoose.model('Lead', leadSchema);
//module.exports = mongoose.model('Lead', leadSchema);
const Lead = mongoose.model('workouts', leadSchema);
module.exports = Lead;