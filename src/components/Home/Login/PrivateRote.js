import React from 'react';
// import './Services.css';
import  { useContext } from 'react';

import {Route,Redirect} from "react-router-dom";
import { userContext } from '../../../App';

const PrivateRoute = ({ children, ...rest }) => {
  let [loggedInUser,setLoggedInUser] =useContext( userContext)

 
    return (
        <Route
        {...rest}
        render={({ location }) =>
          loggedInUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;