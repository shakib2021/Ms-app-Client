import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import Sidebar from './Appbar/Sidebar';
import  './Dashboard.css'
const Dashboard = () => {

    let [userOrders,setUserOrders]=useState([])
    let [loggedInUser,setLoggedInUser]=useContext(userContext)
    let orderData=userOrders.filter(order=>order.Email==loggedInUser.email)
  console.log(orderData)
    useEffect(() =>{
      fetch("https://obscure-woodland-45973.herokuapp.com/showOrder")
      .then(response =>response.json())
      .then(data => {
          setUserOrders(data)
          console.log(data)
      })


    },[])
    document.title="Dashboard || MS"

    return ( <div className="row dashboard">

<div className="section-bar">
  <div className="title-sec">
    <span >DASHBOARD</span>
</div>
<div className="loggedIn">
<img  title={loggedInUser.displayName} className="lo-img"  src={loggedInUser.photoURL} alt=""/>
</div>
</div>
                <div className="col-md-2 col-lg-2 col-sm-12  ">
           <Sidebar></Sidebar>
              </div>
      
              <div className="col-lg-10 col-md-10 col-sm-10 dash">
                  <Link className="order-li"   to="myorder">
              <div class="container px-4 mt-5">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3 totalOrder">
     <p className="order-to">YOU HAVE <span className="order-length">{orderData.length} </span> ORDERS</p>    
         </div>
    </div>
   
  </div>
</div>
</Link>
            </div>
            </div>
    );
};

export default Dashboard;