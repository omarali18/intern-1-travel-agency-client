import { useEffect, useState } from "react"
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    updateProfile,
    onAuthStateChanged,
    sendEmailVerification,
  } from "firebase/auth";
import firebaseInitialize from "../pages/Login/Login/Firebase/firebase.init"


firebaseInitialize()

const useFirebase = ()=>{
    const [user, setUser] = useState({})
    const [authError, setAuthError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const auth = getAuth();

    const loginByGoogle = (location, navigate) => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            const user = result.user;
            // setUser(user)
            console.log("user is ==", user);
            setAuthError("");
            // saveUsers(user.email, user.displayName, "PUT", user.password, navigate, location)
            navigate(location);
          })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally(() => setIsLoading(false));
      };


      // observe user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

   // SignOut function
   const handleLogout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };

    return {
        user,
        authError,
        isLoading,
        loginByGoogle,
        handleLogout
    }
}

export default useFirebase