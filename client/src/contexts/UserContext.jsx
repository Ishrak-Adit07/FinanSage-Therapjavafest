/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({children}) =>{
    
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        name: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        username: "",
        userID: "",
    });

    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}

export default UserProvider;