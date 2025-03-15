'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
// import { auth} from '@/firebase';
import { auth } from '../../firebase';
import { useRouter } from 'next/navigation'


const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter()

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


   // Check for stored user data on component mount
   useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []); 
  
  // const signIn = () => {
  //   const provider = new GoogleAuthProvider();

  //   return signInWithPopup(auth, provider);
  // };

  const signIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const userData = {
        uid: result.user.uid,
        name: result.user.displayName,
        email: result.user.email,
        photo_url: result.user.photoURL,
      };
      
      // setUser(userData); // Ensure user is updated in state
      // localStorage.setItem("user", JSON.stringify(userData)); // Store user data


      await sendUserToBackend(userData); // Send user data to backend
      const userInf = JSON.parse(localStorage.getItem('user'));
    
      console.log(userInf.role);

      if (userInf.role === "client") {
        router.push('/application/clientdashboard');
      } else if (userInf.role === "admin") {
        router.push('/application/admin');
      } else if (userInf.role === "photographer") {
        router.push('/application/photographerdashboard');
      } else {
        router.push('/');
      }
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  const sendUserToBackend = async (userData) => {
    try {
      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to send user data to backend");
      }
const data = await response.json();
      setUser(data); // Ensure user is updated in state
      localStorage.setItem("user", JSON.stringify(data)); // Store user data
      console.log(data);
      console.log("User data sent successfully");
    } catch (error) {
      console.error("Backend Error:", error);
    }
  };

  // const logOut = () => {
  //   return signOut(auth);
  // };

  const logOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      console.log(user.email);
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