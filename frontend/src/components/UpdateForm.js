

import React, { useState, useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from '../hooks/useAuthContext';

const UpdateForm = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  const [title, setTitle] = useState(workout.title || '');
  const [load, setLoad] = useState(workout.load || '');
  const [note, setNote] = useState(workout.note || '');
  const [reps, setReps] = useState(workout.reps || '');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  useEffect(() => {
    if (workout) {
      setTitle(workout.title || '');
      setLoad(workout.load || '');
      setNote(workout.note || '');
      setReps(workout.reps || '');
    }
  }, [workout]);

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
    };

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