import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useSettingsContext } from "../utils/GlobalState";

const Settings = () => {
    // gets context
    let [ settingsState, setSettingsState] = useSettingsContext();
    console.log(settingsState);

    const setDark= () => {
        setSettingsState({...settingsState, theme: 'dark', isDark: true});
        localStorage.setItem("theme", "dark");
        document.querySelector('body').setAttribute('dark-theme','dark');
    }

    const setLight= () => {
        setSettingsState({...settingsState, theme: 'light', isDark: false});
        localStorage.setItem("theme", "light");
        document.querySelector('body').setAttribute('dark-theme', 'light');
    }

    const setMetric= () => {
        setSettingsState({...settingsState, units: 'metric', isMetric: true});
        localStorage.setItem("units", "metric");
    }

    const setImperial= () => {
        setSettingsState({...settingsState, units: 'imperial', isMetric: false});
        localStorage.setItem("units", "imperial");
    }
    // detect change
    const handleChange = (event) => {
      const { name, checked } = event.target;
      //toggle units
      if(name === 'units' && checked === true){
        setMetric();
      } else if(name === 'units' && checked === false){
        setImperial();
      }
      //toggle theme
      if(name === 'theme' && checked === true){
        setDark();
      } else if(name === 'theme' && checked === false){
        setLight();
      }
    };
    
    //set to stored info for first load
    const storedTheme = localStorage.getItem('theme');
    const storedUnits = localStorage.getItem('units');
    if( storedTheme === 'dark' && settingsState.isDark == false)
    {
      setDark();
    }
    if( storedUnits === 'metric' && settingsState.isMetric == false)
    {
      setMetric();
    }

    //html
    return (
      <div className="col-12 flex-row">
        <aside className=" w3-sidebar w3-bar-block" >
            <h3 className="w3-bar-item">Menu</h3>
                <Link  className="w3-bar-item w3-button"  to='/progress'>Progress</Link>
                <Link  className="w3-bar-item w3-button"  to='/workouts'>Workouts</Link>
                <Link  className="w3-bar-item  alink"  to='/settings'>Settings</Link>
                {/* <Link  className="w3-bar-item  alink"  to='/test'>Test</Link>
                <Link  className="w3-bar-item  alink"  to='/workout/1'>SingleWorkout</Link> */}
        </aside>

        <main className="dashcont">
            {/* Toggle switch for Units */}
            <br/>
            <h4 className="ms-4">Units of Measurement</h4>
            <div className="switch form-check form-switch form-check-inline d-flex">
              <label className="switch-label text-1" htmlFor="units-switch">
                Imperial
              </label>
              <div className="form-check form-switch form-check-inline">
                <input className='form-check-input'
                       id='units-switch' 
                       type='checkbox'
                       name='units'
                       checked={settingsState.isMetric}
                       onChange={handleChange}>
                </input>
              </div>
              <label className="switch-label text-2" htmlFor="units-switch">
                Metric
              </label>
            </div>
            {/* Toggle switch for them (dark and light mode) */}
            <h4 className="ms-4">Theme</h4>
            <div className="switch form-check form-switch form-check-inline d-flex">
              <label className="switch-label text-1" htmlFor="theme-switch">
                Light
              </label>
              <div className="form-check form-switch form-check-inline">
                <input className='form-check-input'
                  id='theme-switch'
                  type='checkbox'
                  name='theme'
                  checked={settingsState.isDark}
                  onChange={handleChange}>
                </input>
              </div>
              <label className="switch-label text-2" htmlFor="theme-switch">
                Dark
              </label>
            </div>
          
        </main>
      
      </div>
    );
  };


export default Settings;