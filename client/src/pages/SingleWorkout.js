import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useSettingsContext } from "../utils/GlobalState";

const SingleWorkout = () => {
    // gets global context
    let [ settingsState, setSettingsState] = useSettingsContext();
    console.log(settingsState);
    // set set state
    const [formState, setFormState] = useState({ 
        name: '', 
        data: [{reps: 0, weight: 0}]
    });
    const handleRepChange = (event) => {
        //gffdg
        console.log('test');
    };

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
            tempWorks.map((ex, ind) => (
                <div className="exercise ">
                    {ex.name}
                    <div className="set">
                        {ind}
                        <input type='number'
                            className="reps"
                            //onChange={handleRepChange}
                        /> reps
                        x &nbsp;
                        <input type='number' className="weight"/> lbs
                    </div>
                </div>
          ))}
          </form>
          
          form end
        </main>
      
      </div>
    );
};

export default SingleWorkout;