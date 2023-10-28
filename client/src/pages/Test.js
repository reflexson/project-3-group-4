
import React, { useState } from 'react';
import { useSettingsContext } from "../utils/GlobalState";
import { Link } from 'react-router-dom';
import { convertImperialToMetric, convertMetricToImperial } from '../utils/unitConversion';


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
        <div className="container ">
            <div>
            <Link to="/Settings">← Go to Settings</Link>
            </div>
            
            <p>
                Hello this is a testing area
            </p>
            <div>
                {settingsState.units}, {settingsState.theme}
            </div>
            <TestComponent units={settingsState.units}></TestComponent>
            <button onClick={onClick}></button>
        </div>
    );
}

export default Test;

function TestComponent(props){
    // gets context
    let [ number, setNumberState] = useState(25);
    let [currUnit, setCurrUnit] = useState('imperial');
    let {units} = props;
    //
    if(units === 'metric' && currUnit === 'imperial'){
        setNumberState(
             convertImperialToMetric(number)
        );
        setCurrUnit('metric')

        console.log(convertImperialToMetric(number))
    }
    //
    if(units === 'imperial' && currUnit === 'metric'){
        setNumberState(
             convertImperialToMetric(number)
        );
        setCurrUnit('imperial')

        console.log(convertImperialToMetric(number))
    }

    // the html
    return(
        <div className="container ">
            unit: {units}
            <div>{number}</div>
            
        </div>
    );
}

