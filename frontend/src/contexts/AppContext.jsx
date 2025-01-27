import React, { useState } from "react";

const Context = React.createContext(null)

    
const ProviderWrapper = (props) => {
    
    const exposedValue = {
    }
    
    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>    
}
    
export {    
    Context,
    ProviderWrapper,    
}    
