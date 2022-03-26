import React from "react";

const Context = React.createContext('light');

function Provider({ children }) {
    const [theme, setTheme] = React.useState('light');
    return <Context.Provider defaultValue={{theme, setTheme}}>{children}</Context.Provider>
}

export {Context, Provider};