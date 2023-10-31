import React, { useState } from 'react'; 

function ExForm(props) { 
const [exercise, setexercise] = useState(''); 
const [reps, setReps] = useState(''); 

const changeWeight = (event) => { 
	setWeight(event.target.value); 
}; 

const changeReps = (event) => { 
	setReps(event.target.value); 
}; 

const transferValue = (event) => { 
	event.preventDefault(); 
	const val = { 
	weight, 
	reps, 
	}; 
	props.func(val); 
	clearState(); 
}; 

const clearState = () => { 
	setWeight(''); 
	setReps(''); 
}; 

function newExInput(){
    switch(newEx){
        case "0":
            return <div id='newExName' className="mt-3">
            <label >Exercise Name</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
        </div>;
        case "1":
            return null;
        default:
            return <div id='newExName' className="mt-3">
            <label >Exercise Name</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
        </div>;
      
    }
}

return ( 
	// <div> 
	// <label>Name</label> 
	// <input type="text" value={name} onChange={changeName} /> 
	// <label>City</label> 
	// <input type="text" value={city} onChange={changeCity} /> 
	// <button onClick={transferValue}> Click Me</button> 
	// </div> 
    <div>
        <div className="form-group">
                <label >Choose Exercise</label>
                <select className="form-control" id="select" onChange={(event) => {
        
                        setnewEx(event.target.value);
                    }}>
                   <option value="0">New Exercise</option>
                   <option value="1">Bench Press</option>
                   <option value="1">Bicep Curls</option>
                   <option value="1">Leg Press</option>
                   <option value="1">Upright Rows</option>
                 </select>
                 {newExInput()}  
        </div>
             
              
              
        
    </div>

); 
} 

export default ExForm;

