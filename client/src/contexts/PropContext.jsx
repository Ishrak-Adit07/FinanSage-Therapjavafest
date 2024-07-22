/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const PropContext = createContext();

const PropProvider = ({children}) =>{
    
    const [props, setProps] = useState({
        wallets: [],
        budgets: [],
        accounts: [],
        posts: [],
    });

    return <PropContext.Provider value={{props, setProps}}>
        {children}
    </PropContext.Provider>
}

export default PropProvider;