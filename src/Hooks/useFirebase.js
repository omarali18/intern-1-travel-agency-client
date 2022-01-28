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
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)

    const auth = getAuth();


    console.log("admin", admin);

     // Registation function
     const handleRegistetion = (email, password, name, location, navigate) => {
      setIsLoading(true)
      createUserWithEmailAndPassword(auth, email, password)
          .then(result => {
            
              // const user = result.user
              setAuthError("")
              // update user enter name
              const newUser = { displayName: name, email }
              setUser(newUser)
              // save database
              saveUsers(email, name, "POST", password, navigate, location)
              // update name
              updateProfile(auth.currentUser, {
                  displayName: name
              }).then(() => { })
                  .catch((error) => { });
              // history.push("/")
          })
          .catch(error => {
              setAuthError(error.message)
          })
          .finally(() => setIsLoading(false))

  };


  // Login email password function
  const loginEmailPassword = (email, password, location, navigate) => {

    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        navigate(location);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  }



    // Login by google
    const loginByGoogle = (location, navigate) => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            const user = result.user;
            // setUser(user)
            
            setAuthError("");
            saveUsers(user.email, user.displayName, "PUT", user.password, navigate, location)
            // navigate(location);
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
  }, [auth]);


  // Find admin email
  useEffect(() => {
    let emailIs = user.email;
    if (emailIs) {

        fetch(`https://secure-fortress-87123.herokuapp.com/users/${emailIs}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }

}, [user.email])



   // SignOut function
   const handleLogout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };

   // save user in database
   const saveUsers = (email, displayName, method, Password = "", navigate, location = "/") => {
    const user = { email, displayName, Password }
    fetch("https://secure-fortress-87123.herokuapp.com/users", {
        method: method,
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged) {
                alert("Registration Successfully..!")
                
                navigate(location)
            }
        })
}

    return {
        user,
        admin,
        authError,
        isLoading,
        handleRegistetion,
        loginEmailPassword,
        loginByGoogle,
        handleLogout
    }
}

export default useFirebase