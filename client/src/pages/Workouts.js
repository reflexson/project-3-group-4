import React from "react";
import { Link } from 'react-router-dom';

const Workouts = () => {
    return (
      <div className="col-12 flex-row">
        <div className="w3-sidebar w3-light-grey w3-bar-block" >
  <h3 className="w3-bar-item">Menu</h3>
  <Link  className="w3-bar-item w3-button" activeStyle={{color: "#ff3333"}} to='/progress'>Progress</Link>
  <Link  className="w3-bar-item  alink" activeStyle={{color: "#ff3333"}} to='/workouts'>Workouts</Link>
  <Link  className="w3-bar-item w3-button" activeStyle={{color: "#ff3333"}} to='/settings'>Settings</Link>
</div>
  
      
      </div>
    );
  };
















export default Workouts;