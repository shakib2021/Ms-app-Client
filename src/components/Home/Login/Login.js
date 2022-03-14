import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { userContext } from '../../../App';
import firebaseConfig from './firebaseConfig';
import './Login.css';
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
         
          // ...
        });


    }
    let provider = new firebase.auth.GoogleAuthProvider();
    document.title="Login || MS"

    return (


<section class="bg-blueGray-50">
  <div class="w-full lg:w-4/12 px-4 mx-auto pt-6">
    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
      <div class="rounded-t mb-0 px-6 py-6">
        <div class="text-center mb-3">
          <h6 class="text-blueGray-500 text-sm font-bold">
            Sign in with
          </h6>
        </div>
        <div class="btn-wrapper text-center">
          <button class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
            <img alt="..." class="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/github.svg"/>Github</button>
          <button class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
            <img alt="..." class="w-5 mr-1" onClick={handleSignIn}  src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"/>Google </button>

        </div>
        <hr class="mt-6 border-b-1 border-blueGray-300"/>
      </div>
      <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <div class="text-blueGray-400 text-center mb-3 font-bold">
          <small>Or sign in with credentials</small>
        </div>
        <form>
          <div class="relative w-full mb-3">
            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password">Email</label><input type="email" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email"/>
          </div>
          <div class="relative w-full mb-3">
            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password">Password</label><input type="password" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Password"/>
          </div>
          <div>
            <label class="inline-flex items-center cursor-pointer"><input id="customCheckLogin" type="checkbox" class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"/><span class="ml-2 text-sm font-semibold text-blueGray-600">Remember me</span></label>
          </div>
          <div class="text-center mt-6">
            <button class="bg-red-700 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="button"> Sign In </button>
          </div>
        </form>
      </div>
    </div>
  </div>

</section>

    );
};

export default Login;