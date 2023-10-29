import React, { createContext, useContext, useState } from "react";

//init context
const SettingsContext = createContext();
const { Provider } = SettingsContext;
// hook to use context
export const useSettingsContext = () => useContext(SettingsContext);

// provider keeps track of the state
export const WorkoutProvider = ( { value = [], ...props } ) => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    const storedUnits = localStorage.getItem('units') || 'imperial';
    let isMetric = false;
    let isDark = false;

    if(storedTheme === 'dark'){
        isDark = true;
    }
    if(storedUnits === 'metric'){
        isMetric = true;
    }
    const [settingState, setSettingsState] = useState({
        units: storedUnits,
        isMetric: isMetric,
        theme: storedTheme,
        isDark: isDark
    });

    return (
        <Provider value={[settingState, setSettingsState]}{...props}>
          {/* We render children in our component so that any descendent can access the value from the provider */}
 
        </Provider>
    );
};

// on app load change to dark mode if stored in local storage
export const setDefaultDark= ()=> {
    //set to stored info for first load
    const storedTheme = localStorage.getItem('theme');
    if( storedTheme === 'dark')
    {
        document.querySelector('body').setAttribute('dark-theme','dark');
    }
}

setDefaultDark();
