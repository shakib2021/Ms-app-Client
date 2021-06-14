import React, { useContext } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig'
import { userContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
// import PermIdentityIcon from '@material-ui/icons/PermIdentity';

import Bounce from 'react-reveal/Bounce';
firebase.initializeApp(firebaseConfig);
const Login= () => {
    let [loggedInUser,setLoggedInUser]=useContext(userContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    let handleSignIn=()=>{

        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          
          // The signed-in user info.
          var user = result.user;
          setLoggedInUser(user)
          console.log(user)
          history.replace(from);
          // ...
        }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });


    }
    var provider = new firebase.auth.GoogleAuthProvider();
    document.title="Login || MS"

    return (
        <div className="row  login">
            <div className="col-md-12 w-75 m-auto login-main d-flex col-lg-12 col-sm-12">
           <div className="login-entry">
             <div className="login-circle">
               <div className="login-avartar"> 
                 <img  src="/img/avar.png"  />
               </div> 
                 </div> 
               <h4 className="login-si-text">User Sign In</h4>
            <Bounce><div className="signBtn"  onClick={handleSignIn}> <img src="/img/google.png"   /> </div></Bounce>  

           </div>

</div>
        </div>
    );
};

export default Login;