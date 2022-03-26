import React from "react";

const Context = React.createContext('en')

function Provider({ children }) {
    const [lang, setLang] = React.useState('en');
    return <Context.Provider defaultValue={{lang, setLang}}>{children}</Context.Provider>
}

export {Context, Provider};