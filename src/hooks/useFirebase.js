import {useState, useEffect} from 'react';
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
       return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     console.log(result.user);
        // })
    }

    const logOut = () => {
        signOut(auth) 
        .then(() =>{
            setUser({});
        })
    }
    //observe whether user auth state changed or not
    useEffect(() => {
       onAuthStateChanged(auth, (user) => {
           if(user){
               setUser(user)
           }
       })
    },[])
    return{
        user,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;