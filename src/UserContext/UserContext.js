import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext();

const UserContext = ({ children }) => {

    const [loggedUser, setUser] = useState({displayName:'MK'})

    const signIn = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        // console.log(email, password)
    }

    const logOut = () => {
        setUser({})
        return signOut(auth)
       
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            const uid = loggedUser.uid
            setUser(loggedUser)
            console.log(loggedUser)
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const CurrUser = {
        name: 'Mahmud',
        signIn: signIn,
        login: logIn,
    }
    const authInfo = { CurrUser , loggedUser, logOut}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;