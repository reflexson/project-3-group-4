import React, { createContext, useContext, useState } from "react";

//init context
const SettingsContext = createContext();
const { Provider } = SettingsContext;
// hook to use context
export const useSettingsContext = () => useContext(SettingsContext);

// provider keeps track of the state
export const WorkoutProvider = ( { value = [], ...props } ) => {
    const [settingState, setSettingsState] = useState({
        units: 'imperial',
        isMetric: false,
        theme: 'light',
        isDark: false
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


