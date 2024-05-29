import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../../src/hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  //   creat user with email
  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login with google
  const handleGoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // login old user with email
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update profile of user
  const updateUserProfile = (name, photo) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // observe the user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(`current User: `, currentUser);
      if (currentUser) {
        // get token and store client
        const userInfo = { email: currentUser.email };
        axiosPublic.post(`/jwt`, userInfo)
        .then((res) => {
          if (res.data.token) {
            localStorage.setItem(`access-token`, res.data.token);
          }
        });
      } else {
        localStorage.removeItem('access-token')
      }
      
      console.log(`current usr::`, currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, [auth]);

  // log out the user
  const logOut = () => {
    signOut(auth);
  };

  const authInfo = {
    loading,
    user,
    creatUser,
    loginUser,
    logOut,
    updateUserProfile,
    handleGoogleLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
