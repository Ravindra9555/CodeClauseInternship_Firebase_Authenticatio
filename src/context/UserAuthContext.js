import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,GithubAuthProvider
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }
  
  function facebookLogin(){
    const fbprovider = new FacebookAuthProvider();
    signInWithPopup(auth, fbprovider)
    signInWithPopup(auth, fbprovider)
    .then((result) => {
      const user = result.user;
      console.log(user);
    }).catch((error) => {
      console.log(error.message);
    });
  
  
  }
  function githubLogin(){
    const gitprovider = new GithubAuthProvider();
    signInWithPopup(auth, gitprovider)
  .then((result) => {
    const user = result.user;
    console.log(user);
  }).catch((error) => {
    console.log(error.message);
  });


  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn,facebookLogin,githubLogin }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
