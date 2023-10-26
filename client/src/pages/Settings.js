import React from "react";
import { Link } from 'react-router-dom';

const Settings = () => {
    return (
      <div className=" flex-row">
        <div className=" w3-sidebar w3-light-grey w3-bar-block" >
            <h3 className="w3-bar-item">Menu</h3>
                <Link  className="w3-bar-item w3-button"  to='/progress'>Progress</Link>
                <Link  className="w3-bar-item w3-button"  to='/workouts'>Workouts</Link>
                <Link  className="w3-bar-item  alink"  to='/settings'>Settings</Link>
        </div>
        <div className="dashcont">
            <h4 className="ms-4">Units of measure</h4>
            <div className="switch form-check form-switch form-check-inline d-flex">
              <label class="switch-label text-1" for="units-switch">
                Imperial
              </label>
              <div className="form-check form-switch form-check-inline">
                <input className='form-check-input' id='units-switch' type='checkbox'></input>
              </div>
              <label class="switch-label text-2" for="units-switch">
                Metric
              </label>
            </div>
            <h4 className="ms-4">Theme</h4>
            <div className="switch form-check form-switch form-check-inline d-flex">
              <label class="switch-label text-1" for="theme-switch">
                Light
              </label>
              <div className="form-check form-switch form-check-inline">
                <input className='form-check-input' id='theme-switch' type='checkbox'></input>
              </div>
              <label class="switch-label text-2" for="theme-switch">
                Dark
              </label>
            </div>
            
        </div>
      
      </div>
    );
  };
















export default Settings;