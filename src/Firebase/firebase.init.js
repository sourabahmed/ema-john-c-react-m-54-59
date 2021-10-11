import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;

/* steps for authntication
***step-1
1.firebase: create project
2.create web app
3.get configaration
4.initialize firebase
5.enable auth method
*** step-2
1.create login component
2.create register cmponent
3.create route for login and register
*** step-3
1. set up sign in method
2. set up sign out sign out method
3. user state
4.special observer
5. return necessary methods and state from useFirebase
*** step 4
1. create auth context
2. create context provider
3. set context provider context value
3. use Auth provider
4. create useAuth hook
*** step-5
1. create private route
2. set private route
*** step-5 
1. after login reidrect user their desire destination
*/