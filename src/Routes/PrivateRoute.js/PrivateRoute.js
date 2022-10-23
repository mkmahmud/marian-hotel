import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

const PrivateRoute = ({Children}) => {
    
    const {CurrUser} = useContext(AuthContext)

    console.log(CurrUser)
    
    if(!CurrUser.name){
        return <Navigate to='/login'></Navigate>
    }

    return Children;
};

export default PrivateRoute;