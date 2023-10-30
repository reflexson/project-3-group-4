import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useSettingsContext } from "../utils/GlobalState";

const SingleWorkout = () => {
    // gets global context
    let [ settingsState, setSettingsState] = useSettingsContext();
    //console.log(settingsState);
    // set set state

    // const location = window.location.toString();
    // const splitLocation = location.split('/');
    // console.log(splitLocation[splitLocation.length-1]);
    const query = [
        {
            name: 'bloop',
            
        },
        {
            name: 'bleep'
        },
        {
            name: 'bop'
        }
    ];

    const exercises = query.map((ex) => (
        {
            name: ex.name,
            setInputs: [{reps: 0, weight: 0}]
        }
    ));

    let [formState, setFormState] = useState({ 
        exercises    
    });
    console.log(formState);
    const addNewSet = (indE) => {
        const exercises = [...formState.exercises];
        exercises[indE].setInputs.push({reps: 0, weight: 0});
        setFormState({exercises});
        console.log(formState);
    };

    const addNewExercise = () =>{
        const exercises = [...formState.exercises];
        exercises.push({
            setInputs: [{reps: 0, weight: 0}]
        });
        setFormState({exercises});
    }

    const onRepChange = (e) =>{
        const {value} = e.target;
        const indE = e.target.getAttribute('indexexercise');
        const indS = e.target.getAttribute('indexset');

        const exercises = [...formState.exercises];
        exercises[indE].setInputs[indS] = {...formState.exercises[indE].setInputs[indS], reps: value};
        setFormState({exercises});
    }

    const onWeightChange = (e) =>{
        const {value} = e.target;
        const indE = e.target.getAttribute('indexexercise');
        const indS = e.target.getAttribute('indexset');

        const exercises = [...formState.exercises];
        exercises[indE].setInputs[indS] = {...formState.exercises[indE].setInputs[indS], weight: value};
        setFormState({exercises});
    }


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
                                indexset={indS}
                                indexexercise={ind}
                                onChange={onRepChange}
                            /> 
                            <label> reps</label>
                            &nbsp; x &nbsp;
                            <input type='number'
                                    className="weight"
                                    indexset={indS}
                                    indexexercise={ind}
                                    onChange={onWeightChange}/> 
                            <label> lbs</label>
                        </div>
                    ))}
                    
                </div>
          ))}
          <button onClick={(event) => {event.preventDefault(); addNewExercise()}}> 
                        add exercise
                    </button>
          </form>

          form end
        </main>
      
      </div>
    );
};

export default SingleWorkout;