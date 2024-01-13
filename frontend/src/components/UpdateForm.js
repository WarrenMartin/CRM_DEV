

// export default UpdateForm;
import { useState, useEffect } from "react";
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
      id: workout.id,
      title,
      load,
      note,
      reps,
    };

    const response = await fetch(`/api/workouts/${workout.id}`, {
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
      setEmptyFields(json.emptyFields);
    } else {
      setTitle(json.title);
      setLoad(json.load);
      setNote(json.note);
      setReps(json.reps);
      setError(null);
      setEmptyFields([]);
      dispatch({ type: 'UPDATE_WORKOUT', payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Update Workout</h3>

      <label>Name:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Phone Number:</label>
      <input
        type="number"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
        className={emptyFields.includes('load') ? 'error' : ''}
      />

      <label>Note:</label>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className={emptyFields.includes('note') ? 'error' : ''}
      />

      <label>Email:</label>
      <input
        type="text"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        className={emptyFields.includes('reps') ? 'error' : ''}
      />

      <button>Update Member</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default UpdateForm;