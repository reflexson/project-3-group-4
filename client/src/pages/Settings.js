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
        <div className="pagecont">
            <h4 className="pagecont">units of measure</h4>
            
        </div>
      
      </div>
    );
  };
















export default Settings;