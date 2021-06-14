import React, { createContext, useState ,useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Addservices from "./components/Dashboard/Addservices/Addservices";
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";

import Home from "./components/Home/Home/Home";
import PrivateRote from './components/Home/Login/PrivateRote'
import Login from "./components/Home/Login/Login";
import Bookings from "./components/Dashboard/Bookings/Bookings";
import MyOrder from "./components/Dashboard/MyOrder/MyOrder";
import ClientReviews from "./components/Dashboard/GiveReview/ClientReviews";
import Dashboard from "./components/Dashboard/Dashboard";
import ManageOrder from "./components/Dashboard/ManageOrder/ManageOrder";

export let userContext=createContext()
function App() {
  let [loggedInUser,setLoggedInUser] =useState({})
  let [isAdmin,setIsAdmin]=useState([])
  useEffect(()=>{
          fetch("https://obscure-woodland-45973.herokuapp.com/findAdmin")
          .then(res=>res.json())
          .then(data=>setIsAdmin(data))
  },[])
  console.log(isAdmin)
  let adminVai =isAdmin.find(data=>data.email==loggedInUser.email)
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Switch>

        {adminVai  ? <>
                <Route exact path="/">
<Home></Home>
     </Route>
        <Route  path="/login">
<Login></Login>
        </Route>
                <PrivateRote path="/addservice">
<Addservices></Addservices>
        </PrivateRote>
        <PrivateRote path="/makeAdmin">
<MakeAdmin></MakeAdmin>
        </PrivateRote>
        <PrivateRote path="/review">
<ClientReviews></ClientReviews>
        </PrivateRote>
        <PrivateRote path="/manageOrders">
<ManageOrder></ManageOrder>
        </PrivateRote>
        <PrivateRote path="/myorder">
<MyOrder></MyOrder>
        </PrivateRote>
        <PrivateRote path="/myDashboard">
<Dashboard></Dashboard>
        </PrivateRote>
        <PrivateRote path="/booking/:id">
          <Bookings></Bookings>
        </PrivateRote>
        
        </>:<>
    
        <Route exact path="/">
<Home></Home>
     </Route>
        <Route  path="/login">
<Login></Login>
        </Route>
        <PrivateRote path="/review">
<ClientReviews></ClientReviews>
        </PrivateRote>

        <PrivateRote path="/myorder">
<MyOrder></MyOrder>
        </PrivateRote>
        <PrivateRote path="/myDashboard">
<Dashboard></Dashboard>
        </PrivateRote>
        <PrivateRote path="/booking/:id">
          <Bookings></Bookings>
        </PrivateRote>
        </>}
        
       
    
       
    
     
  
        
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
