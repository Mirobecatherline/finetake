'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
// import { auth} from '@/firebase';
import { auth } from '../../firebase';


const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
     if (user) {
      setUser(user);
     } 
      else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // const signIn = () => {
  //   const provider = new GoogleAuthProvider();

  //   return signInWithPopup(auth, provider);
  // };

  const signIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // Ensure user is updated in state
      console.log(user);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  // const logOut = () => {
  //   return signOut(auth);
  // };

  const logOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      console.log(user);
//       displayName
// : 
// "Catherline Mirobe"
// email
// : 
// "catemirobe@gmail.com"
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}