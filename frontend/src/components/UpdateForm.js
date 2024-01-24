import React, { useState, useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from '../hooks/useAuthContext';
// import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const UpdateForm = ({ workout, user_id: initialUserId }) => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  const [title, setTitle] = useState(workout.title || '');
  const [load, setLoad] = useState(workout.load || '');
  const [note, setNote] = useState(workout.note || '');
  const [reps, setReps] = useState(workout.reps || '');
  const [user_id, setUser_id] = useState(initialUserId || ''); // State for user_id
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  

  useEffect(() => {
    if (workout) {
      setTitle(workout.title || '');
      setLoad(workout.load || '');
      setNote(workout.note || '');
      setReps(workout.reps || '');
      setUser_id(initialUserId || ''); // Set user_id state when workout or initialUserId changes
    }
  }, [workout, initialUserId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError('You must be logged in');
      return;
    }

    const updatedWorkout = {
      title,
      load,
      note,
      reps,
      user_id,
    };
    console.log(user_id)

    const response = await fetch(`/api/workouts/${workout._id}`, {
      method: 'PATCH',
      body: JSON.stringify(updatedWorkout),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields || []);
    } else {
      setError(null);
      setEmptyFields([]);
      dispatch({ type: 'UPDATE_WORKOUT', payload: json });


      /// trying to refresh the page via update

       // Fetch the updated data and set it to the component state
    const updatedDataResponse = await fetch(`/api/workouts/${workout._id}`);
    const updatedDataJson = await updatedDataResponse.json();

    
    
   


    // the update toggle button should change the state. also the value should be updated.
    

    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Phone Number:</label>
      <input
        type="number"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
      />

      <label>Note:</label>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      
      {/* <label>Assign:</label>
      <input
        type="text"
        value={user_id.value}
        onChange={(e) => setUser_id(e.target.value)} 
        
      /> */}


    <label>Assign:</label>
    <select
      value={user_id}
      onChange={(e) => setUser_id(e.target.value)}
      
    >
      <option value={"659b7d3bfc9fd6488bd6e"}>Ignore</option>
      <option value={"659b7d3bfc9fd6488bd6814e"}>Silvester</option>
      <option value={"659bb10eea296d710828221e"}>Nitin</option>
      <option value={"6597db0203d753bb8717823b"}>Delete</option>
    </select>


      <label>Email:</label>
      <input
        type="text"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />

      <button type="submit">Update Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default UpdateForm;
