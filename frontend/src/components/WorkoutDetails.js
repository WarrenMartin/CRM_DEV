import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext'


// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()

  const handleClick = async () => {
    if (!user) {
      return
    }

    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

  //function to update

  const handleUpdate = async () => {
    if (!user) {
      return;
    }
  
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'PATCH', // or 'PATCH' depending on your API
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });
  
    const json = await response.json();
  
    if (response.ok) {
      dispatch({ type: 'UPDATE_WORKOUT', payload: json });
    }
  };

  return (
    // <div className="workout-details">
    //   <h4>{workout.title}</h4>
    //   <p><strong>Phn.: </strong>{workout.load}</p>
    //   <p><strong>Note:</strong>{workout.note}</p>
    //   <p><strong>Email: </strong>{workout.reps}</p> {/*reps is email and load is number */}
    //   <p><strong>createdAt</strong>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
    //   <p><strong>updatedAt </strong>{formatDistanceToNow(new Date(workout.updatedAt), { addSuffix: true })}</p>

    //   <span className="material-symbols-outlined" onClick={handleClick}>delete</span>

      
    // </div>

    <div className="workout-details">
  <h4>{workout.title}</h4>
  <p><strong>Phn.: </strong>{workout.load}</p>
  <p><strong>Note: </strong>{workout.note}</p>
  <p><strong>Email: </strong>{workout.reps}</p> {/*reps is email and load is number */}
  <p><strong>createdAt: </strong>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
  <p><strong>updatedAt: </strong>{formatDistanceToNow(new Date(workout.updatedAt), { addSuffix: true })}</p>

  <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
  <span className="material-symbols-outlined" onClick={handleUpdate}>update</span>

  


</div>
  )
  
}

export default WorkoutDetails