
import React, { useState } from 'react';
import { useSettingsContext } from "../utils/GlobalState";


function Test(props){
    // state
    const [testState, setTestState] = useState('');
    // gets context
    let [ settingsState, setSettingsState] = useSettingsContext();
    

    const onClick = (event) => {
        console.log(settingsState);
    }


    // the html
    return(
        <div className="container">
            Hello this is a testing area
            <div>
                {settingsState.units}
            </div>
            <button onClick={onClick}></button>
        </div>
    );
}

export default Test;
