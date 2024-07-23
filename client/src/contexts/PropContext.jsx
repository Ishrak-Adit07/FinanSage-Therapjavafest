/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const PropContext = createContext();

const PropProvider = ({children}) =>{
    
    const [props, setProps] = useState({
        wallets: [],
        budgets: [],
        accounts: [],
        fsAccount: {},
        posts: [],
        friends: [],
    });

    return <PropContext.Provider value={{props, setProps}}>
        {children}
    </PropContext.Provider>
}

export default PropProvider;