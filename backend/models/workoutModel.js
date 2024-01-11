const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
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
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)