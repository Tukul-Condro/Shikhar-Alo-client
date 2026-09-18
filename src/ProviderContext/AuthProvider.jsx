
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firebase/firebae.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    const creatUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleSinIn = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('current user', currentUser);
            setUser(currentUser);
            if(currentUser){
                // get token and set client side local storage
                const userInfo ={email: currentUser.email};
                axiosPublic.post('/jwt', userInfo)
                    .then(res =>{
                        console.log('jwt response', res.data)
                        if(res.data.token){
                            localStorage.setItem('access-token', res.data.token);
                        }
                    })
             }
            else{
                // remove token 
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        });
        return () =>{
            return unsubscribe();
        }
    },[])

    const AuthInfo = {
        user,
        loading,
        creatUser,
        signIn,
        googleSinIn,
        logOut,
    }
    
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


