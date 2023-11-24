import { getAuth, GoogleAuthProvider, signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] =useState(null)
    const [loading, setLoading] = useState(true)


    //login with google///////////////////////////////////
    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)

    }

    //create a new user///////////////////////////////////
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
      };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
          setUser(loggedUser);
          setLoading(false);
        });
        return () => {
          unsubscribe;
        };
      }, []);
    const userInfo = {
        user,
        loading,
        loginWithGoogle,
        createUser,
        login,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };