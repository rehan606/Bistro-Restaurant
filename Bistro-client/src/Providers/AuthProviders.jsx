import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/firebase.config';
const auth = getAuth(app);

export const AuthContext = createContext()

const AuthProviders = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    // Create User 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login User 
    const signInUser = (email, password) =>{
        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password)
    }

    // SIgnin with google
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // LogOut
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    // UPdate User Profile

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
        })
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
        updateUserProfile,
        googleSignIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;