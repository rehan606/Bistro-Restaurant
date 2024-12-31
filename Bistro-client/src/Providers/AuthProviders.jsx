import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../Firebase/firebase.config';
const auth = getAuth(app);

export const AuthContext = createContext()

const AuthProviders = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    // Create User 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login USer 
    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword( email, password)
    }

    // LogOut
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    // Observer
    useEffect(() => {
        const unSubscrive =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current user', currentUser);
            
            setLoading(false)
        })
        return () => {
            return unSubscrive ()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;