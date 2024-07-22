/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({children}) =>{
    
    const [user, setUser] = useState({
        firstName: localStorage.getItem('firstName'),
        lastName: localStorage.getItem('lastName'),
        name: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        username: localStorage.getItems('username'),
    });

    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}

export default UserProvider;