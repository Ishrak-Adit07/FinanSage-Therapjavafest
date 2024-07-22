/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const EnumContext = createContext();

const EnumProvider = ({children}) =>{
    
    const [enums, setEnums] = useState({
        currencies: [],
        taxRates: [],
        banks: [],
    });

    return <EnumContext.Provider value={{enums, setEnums}}>
        {children}
    </EnumContext.Provider>
}

export default EnumProvider;