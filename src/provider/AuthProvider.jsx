import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../firebase/firebase.config";

const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] =useState(null)
    const [loading, setLoading] = useState(true)

    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)

    }

    const userInfo = {
        user,
        loginWithGoogle
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };