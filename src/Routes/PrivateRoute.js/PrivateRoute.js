import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

const PrivateRoute = ({children}) => {
    
    const {loggedUser} = useContext(AuthContext)

    console.log(loggedUser)
    
    if(loggedUser && loggedUser.uid){
        return children;
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;