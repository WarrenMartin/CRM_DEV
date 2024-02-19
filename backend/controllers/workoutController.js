const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')
const Lead = require('../models/LeadModel') 
const path = require('path');



// get all workouts
const getWorkouts = async (req, res) => {
  const user_id = req.user._id
  // console.log(user_id)

  const workouts = await Workout.find({user_id}).sort({createdAt: -1})

  res.status(200).json(workouts)
}

// get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such single member'})
  }

  const workout = await Workout.findById(id)

  if (!workout) {
    return res.status(404).json({error: 'No such single member'})
  }
  
  res.status(200).json(workout)
}


// create new workout
// const createWorkout = async (req, res) => {
//   const {title, load, note,reps} = req.body

//   let emptyFields = []

//   if(!title) {
//     emptyFields.push('title')
//   }
//   if(!load) {
//     emptyFields.push('load')
//   }
//   if(!note) {
//     emptyFields.push('note')
//   }
//   if(!reps) {
//     emptyFields.push('reps')
//   }
//   if(emptyFields.length > 0) {
//     return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
//   }

//   // add doc to db
//   try {
//     const user_id = req.user._id
//     const workout = await Workout.create({title, load,note, reps, user_id})
//     res.status(200).json(workout)
//   } catch (error) {
//     res.status(400).json({error: error.message})
//   }
// }



const createWorkout = async (req, res) => {
  const { title, reps, note, load } = req.body;
  const user_id = "659b7d3bfc9fd6488bd6814e";

  console.log('name:', title, 'email:', reps, 'phone:', note, load);

  try {
      const newLead = new Lead({ title, reps, note, load, user_id });
      await newLead.save();
      console.log('Lead saved to the database:', newLead);
      res.send(`Form submitted successfully!<br>Name: ${title}<br>Email: ${reps}<br>Phone: ${note}<br>Load${load}`);
      return newLead;
  } catch (error) {
      console.error('Error saving lead to the database:', error);
      throw error;
  }
};

// delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Member from del'})
  }

  const workout = await Workout.findOneAndDelete({_id: id})

  if (!workout) {
    return res.status(400).json({error: 'No such Member from del'})
  }

  res.status(200).json(workout)
}

// update a workout
// const updateWorkout = async (req, res) => {
//   const user_id = req.user._id
//   console.log(user_id)
//   const { id } = req.params;


//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     // it will check for a workout
//     return res.status(404).json({error: 'No such Member from upd'})
//   }

//   const workout = await Workout.findOneAndUpdate({_id: id}, {
//     ...req.body // spread opr for GNCIC
//   },{new:true});; // { new: true } ensures that the updated workout is returned

//   if (!workout) {
//     return res.status(400).json({error: 'No such Member from upd'})
//   }

//   res.status(200).json(updateWorkout,user_id) // in the second argument i have passed it in the frotntend
// }


// module.exports = {
//   getWorkouts,
//   getWorkout,
//   createWorkout,
//   deleteWorkout,
//   updateWorkout
// }


const updateWorkout = async (req, res) => {
  const user_id = req.user._id;
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such Member from upd' });
  }

  const workout = await Workout.findOneAndUpdate({ _id: id }, {
    ...req.body // spread opr for GNCIC
  }, { new: true });

  if (!workout) {
    return res.status(400).json({ error: 'No such Member from upd' });
  }

  res.status(200).json({ workout, user_id });
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
};