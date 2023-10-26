import React from "react";
import { Link } from 'react-router-dom';

const Workouts = () => {
    return (
      <div className="col-12 flex-row">
        <div className="w3-sidebar w3-light-grey w3-bar-block" >
          <h3 className="w3-bar-item">Menu</h3>
            <Link  className="w3-bar-item w3-button"  to='/progress'>Progress</Link>
            <Link  className="w3-bar-item  alink"  to='/workouts'>Workouts</Link>
            <Link  className="w3-bar-item w3-button"  to='/settings'>Settings</Link>
        </div>
        <div className="ms-4">
            <h2>Workouts</h2>

        </div>
      </div>
    );
  };
















export default Workouts;