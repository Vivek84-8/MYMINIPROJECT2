import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [loggedIn, setLoggedIn] = useState(false);

    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem('user');
        setLoggedIn(false);
        navigate('/login');
    }

    return <UserContext.Provider value={{loggedIn, setLoggedIn, logout}}>
        {children}
    </UserContext.Provider>
};

const useUserContext = () => { return useContext( UserContext ) };

export default useUserContext;