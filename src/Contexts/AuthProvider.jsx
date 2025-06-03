import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const provider = new GoogleAuthProvider();


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const googleSignin = () => {
        return signInWithPopup(auth, provider)
    }


    const updateUserProfile = (data) => {
        return updateProfile(auth.currentUser, data)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)

        })
        return () => {
            unSubscribe()
        }
    }, [])


    const userinfo = {
        createUser,
        signInUser,
        user,
        setUser,
        loading,
        setLoading,
        signOutUser,
        googleSignin,
        updateUserProfile,

    }

    return (
        <div>
            <AuthContext value={userinfo}>
                {
                    children
                }

            </AuthContext>
        </div>
    );
};

export default AuthProvider;