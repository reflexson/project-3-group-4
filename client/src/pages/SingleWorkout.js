import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useSettingsContext } from "../utils/GlobalState";

const SingleWorkout = () => {
    // gets global context
    let [ settingsState, setSettingsState] = useSettingsContext();
    //console.log(settingsState);
    // set set state
    let [formState, setFormState] = useState({ 
        exercises:[
            {
                setInputs: [{reps: 0, weight: 0}]
            }
        ]     
    });
    console.log(formState);
    const addNewSet = (indE) => {
        const exercises = [...formState.exercises];
        exercises[indE].setInputs.push({reps: 0, weight: 0});
        setFormState({exercises});
        console.log(formState);
    };

    const addNewExercise = (indE) =>{
        const exercises = [...formState.exercises];
        exercises.push({
            setInputs: [{reps: 0, weight: 0}]
        });
        setFormState({exercises});
    }

    const tempWorks = [
        {
            name: 'bloop'
        },
        {
            name: 'bleep'
        },
        {
            name: 'bop'
        }
    ];


    //html
    return (
      <div className=" flex-row">
        <aside className=" w3-sidebar w3-light-grey w3-bar-block" >
            <h3 className="w3-bar-item">Menu</h3>
                <Link  className="w3-bar-item w3-button"  to='/progress'>Progress</Link>
                <Link  className="w3-bar-item w3-button"  to='/workouts'>Workouts</Link>
                <Link  className="w3-bar-item  alink"  to='/settings'>Settings</Link>
                <Link  className="w3-bar-item  alink"  to='/test'>Test</Link>
                <Link  className="w3-bar-item  alink"  to='/workout/1'>SingleWorkout</Link>
        </aside>
        <br/>
        <main className="dashcont">
          <h2>Excercises</h2>
          <form>
          {
            formState.exercises.map((ex, ind) => (
                <div className="exercise " key={ind}>
                    {ex.name} {ind}
                    <button onClick={(event) => {event.preventDefault(); addNewSet(ind)}}> 
                        add set
                    </button>
                    {ex.setInputs.map((set, indS) => (
                        <div className="set" key={indS}>
                            {indS}
                            <input type='number'
                                className="reps"
                                index={indS}
                                //onChange={handleRepChange}
                            /> 
                            <label> reps</label>
                            &nbsp; x &nbsp;
                            <input type='number' className="weight"/> 
                            <label> lbs</label>
                        </div>
                    ))}
                    <button onClick={(event) => {event.preventDefault(); addNewExercise(ind)}}> 
                        add exercise
                    </button>
                </div>
          ))}
          </form>

          form end
        </main>
      
      </div>
    );
};

export default SingleWorkout;