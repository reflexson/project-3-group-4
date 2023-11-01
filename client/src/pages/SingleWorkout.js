import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { useSettingsContext } from "../utils/GlobalState";
import { convertMetricToImperial, calcMaxRep, average } from "../utils/unitConversion";
import { GET_WO_EXERCISES, GET_WORKOUTS } from "../utils/queries";
import { useMutation, useQuery } from "@apollo/client";
// import { calculateOneRepMax } from '../utils/oneRepMax';
import { formatDate } from '../utils/dateUtils';
import { ADD_SET } from "../utils/mutations";

const SingleWorkout = () => {
    // gets global context
    var progressButton = document.getElementById('progressButton')
  
    let [ settingsState, setSettingsState] = useSettingsContext();

    const [weightLabel, setweightLabel]= useState('lbs');
    if(settingsState.units === 'metric' && weightLabel === 'lbs'){
        setweightLabel('kg');
    }
    const [date, setDate] = useState(formatDate(new Date())); 

    // get id in url
    const location = window.location.toString();
    const splitLocation = location.split('/');
    const workInd = splitLocation[splitLocation.length-1];


    const { loading, data } = useQuery(GET_WORKOUTS);
    const workouts = data?.workouts || [];

    const chosenWorkout =workouts[workInd];
    const exercises = chosenWorkout.exercises.map((ex) => (
        {
            name: ex.exercise,
            _id: ex._id,
            setInputs: [{reps: 0, weight: 0}]
        }
    ));
    // set set state
    let [formState, setFormState] = useState({ 
        exercises    
    });

    // form functions---------------------------------------------------------
    const addNewSet = (indE) => {
        const exercises = [...formState.exercises];
        exercises[indE].setInputs.push({reps: 0, weight: 0});
        setFormState({exercises});
    };

    const addNewExercise = () =>{
        const exercises = [...formState.exercises];
        exercises.push({
            setInputs: [{reps: 0, weight: 0}]
        });
        setFormState({exercises});
    }

    const deleteSet = (indE, indS) =>{
        const exercises = [...formState.exercises];
        exercises[indE].setInputs.splice(indS,1);
        setFormState({exercises});
    }

    const onChange = (e) =>{
        const {name, value} = e.target;
        const indE = e.target.getAttribute('indexexercise');
        const indS = e.target.getAttribute('indexset');

        const exercises = [...formState.exercises];
        exercises[indE].setInputs[indS] = {
            //keep info to specific set
            ...formState.exercises[indE].setInputs[indS],
            // set new info
            [name]: parseFloat(value)
        };
        setFormState({exercises});
    }

    const onDateChange = (e) => {
        const {name, value} = e.target;
        setDate(value);
  
    }
    //new Logic for submitting sets

    const [addSet, {error}] = useMutation(ADD_SET)

    // form handler
    const handleFormSubmit = async (event) => {
        //prevents form sumbitting to itself

        event.preventDefault();
        // loop through exercises

        const exercises = [...formState.exercises];
        
        const setArray=[]
        for(let i = 0; i < exercises.length; i++){
            let setInfo = [];

            //loop through an excercises sets

            for(let j = 0; j < exercises[i].setInputs.length; j++)
            {
                let reps = exercises[i].setInputs[j].reps;
                let weight = exercises[i].setInputs[j].weight;
                if(settingsState.units ==='metric'){
                    weight = convertMetricToImperial(weight);
                }
                setInfo[j] = calcMaxRep(reps, weight);   
            }
           
            //reps saved as setInfo average
     
            setArray.push({
                exercise: exercises[i].name,
                oneRepMax: setInfo.reduce((a,b)=>a+b)/ setInfo.length,
                date: date
            })


 

            const {data} = await addSet({
                variables: {setData :{
                exercise: exercises[i].name,
                oneRepMax: setInfo.reduce((a,b)=>a+b)/ setInfo.length,
                date: date
                }}
               })
        }
        
      
        window.location = '/progress'
        // console.log({setArray});
    };
    //end of form functions------------------------------------------

    //html
    return (
      <div className="col-12 flex-row">
        <aside className=" w3-sidebar w3-bar-block" >
            <h3 className="w3-bar-item">Menu</h3>
                <Link  className="w3-bar-item w3-button"  id='progressButton' to='/progress'>Progress</Link>
                <Link  className="w3-bar-item w3-button alink"  to='/workouts'>Workouts</Link>
                <Link  className="w3-bar-item w3-button "  to='/settings'>Settings</Link>

        </aside>

        <main className="dashcont">
          
          <form className='workout-form ' onSubmit={handleFormSubmit}>
            <h2>{chosenWorkout.name}</h2>
            <div className="exercise-wrapper">
          {
            
            formState.exercises.map((ex, ind) => (
                
                <div className="exercise card overwrite-card" key={ind}>
                    <h3>{ex.name}</h3>
                    <div className="button wrapper">
                        <button className="overwrite-btn add input-btn" onClick={(event) => {event.preventDefault(); addNewSet(ind)}}> 
                            Add Set
                        </button>
                        <button  className="overwrite-btn delete input-btn" onClick={(event) => {event.preventDefault(); deleteSet(ind)}}>
                            Delete Set
                        </button>
                    </div>

                    <br/>
                    {ex.setInputs.map((set, indS) => (
                        <div className="set" key={indS}>
                            Set {indS + 1} &nbsp;
                            <input type='number'
                                className="reps"
                                name='reps'
                                indexset={indS}
                                indexexercise={ind}
                                onChange={onChange}
                            /> 
                            <label>&nbsp; reps</label>
                            &nbsp; x &nbsp;
                            <input type='number'
                                    className="weight"
                                    name='weight'
                                    indexset={indS}
                                    indexexercise={ind}
                                    onChange={onChange}/> 
                            <label>&nbsp; {weightLabel}</label>
                            &nbsp;
                            <br/>
                            <br/>
                        </div>
                    ))}
                    
                    <br/>
                </div>
                
          ))}
          </div>
            <br/>
            
            <div>
                <label htmlFor="birthday">Enter Date:</label>
                &nbsp;
                <input type="date" 
                        id="date" 
                        name="date"
                        onChange={onDateChange}
                />
            </div>
            <br/>
          
            <button type='submit' className="overwrite-btn"> 
                Submit
            </button>
          </form>
        </main>
      
      </div>
    );
};

export default SingleWorkout;