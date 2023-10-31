import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {newWorkout  } from '../utils/wohelpers'
import { ADD_NEW_WORKOUT} from "../utils/mutations";
import {GET_WORKOUTS} from "../utils/queries";
import { useMutation, useQuery } from "@apollo/client";


  
const Workouts = () => {

  const location = window.location.toString();
      const splitLocation = location.split('/');
      console.log(splitLocation[splitLocation.length-1])
  
 const [newEx, setnewEx] = useState('0');
 const [exercises, setExercise ] = useState([])
 const [addNewWorkout, {error}] = useMutation(ADD_NEW_WORKOUT)
 

//function to submit workouts

 async function handleWoSubmit(){
   const newWoName = document.getElementById('newWoName');
   const exercisesArray = [];
for(let i=0; i<exercises.length; i++){
let newexercise =  {exercise:exercises[i]};
exercisesArray.push(newexercise);
}
   const newWoObject = {
    name: newWoName.value,
    exercises: exercisesArray
   }
   const {data} = await addNewWorkout({
    variables: {workoutData : {...newWoObject}}
   })
  }


// show input for new exercise based on option selected

  const newExInput = () => {
    if (newEx === '0') {
      return <div  className="mt-3">
                <label >Exercise Name</label>
                   <textarea className="form-control" id="newExName" rows="1"></textarea>
              </div>;;
    }

    return null;
  };


  //function to sumbit selected exercise to exercises array

  function handleExSubmit(e){
    e.preventDefault();
    var select = document.getElementById('select');
    var newExName = document.getElementById('newExName');
  
    if ( select.options[select.selectedIndex].text === "New Exercise"){
        setExercise(exercises => [...exercises, newExName.value])
    }else{
        setExercise( exercises => [...exercises, select.options[select.selectedIndex].textContent])
    }  
}

   //Show Workouts as options and select existing workout

   const { loading, data } = useQuery(GET_WORKOUTS);
   const workouts = data?.workouts || [];
   const WorkoutList = ({workouts}) => {

      if (!workouts.length) {
        return <div><a>No Workouts Yet</a></div>;
      }
      return (
        <div>
          {workouts &&
            workouts.map((workout, index) => (
              <Link key={index} className="w3-bar-item w3-button " to={`/workout/${index}`}>{workout.name}</Link>
            ))}
        </div>
      );
    }
        
        

    return (

      // Sidebar
      <div className="col-12 flex-row">
        <div className="w3-sidebar w3-light-grey w3-bar-block" >
          <h3 className="w3-bar-item">Menu</h3>
            <Link  className="w3-bar-item w3-button"  to='/progress'>Progress</Link>
            <Link  className="w3-bar-item  alink"  to='/workouts'>Workouts</Link>
            <Link  className="w3-bar-item w3-button"  to='/settings'>Settings</Link>
        </div>

      {/* Choose existing or new workout */}

        <div className="dashcont flex-row justify-content-center text-center">
          <div id='woButtons'>
            <button className="overwrite-btn mt-3" onClick={newWorkout}>Create Workout</button>
            <div className="w3-dropdown-hover">
              <button className="overwrite-btn ms-4 mt-3">Choose Existing Workout</button>
              <div className="w3-dropdown-content w3-bar-block w3-border ms-4">
                <WorkoutList workouts={workouts}/>
              </div>
            </div>
          </div>  

          {/* exercise selector */}

          <div className=" hide mt-4 col-6" id='newWoForm'>
             <div className="form-group">
                <label >Choose Exercise</label>
                <select className="form-control" id="select" 
                onChange={(event) => {
                        setnewEx(event.target.value);
                    }}>
                   <option value="0">New Exercise</option>
                   <option value="1">Bench Press</option>
                   <option value="1">Bicep Curls</option>
                   <option value="1">Leg Press</option>
                   <option value="1">Upright Rows</option>
                 </select>
                 {newExInput()}  
              </div>
              <div className="col text-center mt-3">
                <button className="rounded" onClick={handleExSubmit}>Submit Exercise</button>
               </div>        

              {/* Workout Table populated with exercises */}
              <div className=" border border-success rounded mt-3 pb-3">
              <textarea className='mt-3 justify-content-center'name="" id="newWoName" cols="30" rows="1" placeholder="              Enter Workout Name"></textarea>

               <div className="table mt-3 text-center">
                 
                  <ol>
                 {
                 exercises.map((exerciseIndex, index) => {
                  return(
                      <ExTable key={index} exercise={exerciseIndex}></ExTable>
                  )
                  function ExTable(props) { 
                      const deleteByIndex = index => {
                      setExercise(oldValues => {
                          return oldValues.filter( (_, i) => i !== index)
                      })
                    }
                    return ( 
                      <div> 
                          <li>{props.exercise}<button onClick={() => deleteByIndex(index)}className='btn btn-lin mb-1'>x</button></li>
                          
                        </div> 
                    ); 
                    } 
                 })}
                    </ol>

                </div>
                <div className="col text-center mt-3">
                <button className="rounded" id='woSubmit'onClick={handleWoSubmit}>Save Workout</button>
               </div>
           </div>
           </div>  
        </div>

      </div>
    );
  };
















export default Workouts;