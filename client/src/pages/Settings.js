import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useSettingsContext } from "../utils/GlobalState";

const Settings = () => {
    // gets context
    let [ settingsState, setSettingsState] = useSettingsContext();
    //console.log(state);
    // detect change
    const handleChange = (event) => {
      const { name, checked } = event.target;
      /*
        imperial is false & metric is true
        light is false & dark is true
      */ 
      //toggle units
      if(name === 'units' && checked === true){
        setSettingsState({...settingsState, units: 'metric', unitsBool: true});
      } else if(name === 'units' && checked === false){
        setSettingsState({...settingsState, units: 'imperial', unitsBool: false});
      }
      //toggle theme
      if(name === 'theme' && checked === true){
        setSettingsState({...settingsState, theme: 'dark', themeBool: true});
      } else if(name === 'theme' && checked === false){
        setSettingsState({...settingsState, theme: 'light', themeBool: false});
      }
    };

    //html
    return (
      <div className=" flex-row">
        <aside className=" w3-sidebar w3-light-grey w3-bar-block" >
            <h3 className="w3-bar-item">Menu</h3>
                <Link  className="w3-bar-item w3-button"  to='/progress'>Progress</Link>
                <Link  className="w3-bar-item w3-button"  to='/workouts'>Workouts</Link>
                <Link  className="w3-bar-item  alink"  to='/settings'>Settings</Link>
        </aside>
        <br/>
        <main className="dashcont">
            {/* Toggle switch for Units */}
            <h4 className="ms-4">Units of Measurement</h4>
            <div className="switch form-check form-switch form-check-inline d-flex">
              <label class="switch-label text-1" for="units-switch">
                Imperial
              </label>
              <div className="form-check form-switch form-check-inline">
                <input className='form-check-input'
                       id='units-switch' 
                       type='checkbox'
                       name='units'
                       checked={settingsState.unitsBool}
                       onChange={handleChange}>
                </input>
              </div>
              <label class="switch-label text-2" for="units-switch">
                Metric
              </label>
            </div>
            {/* Toggle switch for them (dark and light mode) */}
            <h4 className="ms-4">Theme</h4>
            <div className="switch form-check form-switch form-check-inline d-flex">
              <label class="switch-label text-1" for="theme-switch">
                Light
              </label>
              <div className="form-check form-switch form-check-inline">
                <input className='form-check-input'
                  id='theme-switch'
                  type='checkbox'
                  name='theme'
                  checked={settingsState.themeBool}
                  onChange={handleChange}>
                </input>
              </div>
              <label class="switch-label text-2" for="theme-switch">
                Dark
              </label>
            </div>
          
        </main>
      
      </div>
    );
  };


export default Settings;