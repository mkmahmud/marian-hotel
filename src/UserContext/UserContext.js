import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import app from '../Firebase/Firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext();

const UserContext = ({ children }) => {

    const signIn = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        // console.log(email, password)
    }

    const CurrUser = {
        name: 'Mahmud',
        signIn: signIn,
        login: logIn,
    }
    const authInfo = { CurrUser }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;