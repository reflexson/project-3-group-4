import React, { createContext, useContext } from "react";

//init context
const SettingsContext = createContext();

// hook to use context
export const useSettingsContext = () => useContext(SettingsContext);

// provider keeps track of the state
export const WorkoutProvider = ( {children} ) => {
    const units = 'Imperial';
    const theme = 'Light';

    return (
        <SettingsContext.Provider value={{units, theme }}>
          {/* We render children in our component so that any descendent can access the value from the provider */}
          {children}
        </SettingsContext.Provider>
    );
};

