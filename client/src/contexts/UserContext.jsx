/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({children}) =>{
    
    const [user, setUser] = useState({
        name: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        wallets: [],
        budgets: [],
    });

    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}

export default UserProvider;