import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import Sidebar from './Appbar/Sidebar';
import './Dashboard.css';
const Dashboard = () => {

  let [userOrders, setUserOrders] = useState([])
  let [loggedInUser, setLoggedInUser] = useContext(userContext)
  let orderData = userOrders.filter(order => order.Email === loggedInUser.email)
  console.log(orderData)
  useEffect(() => {
    fetch("https://obscure-woodland-45973.herokuapp.com/showOrder")
      .then(response => response.json())
      .then(data => {
        setUserOrders(data)
        console.log(data)
      })
  }, [])
  document.title = "Dashboard || MS"

  return (<div className="row container overflow-hidden dashboard">
    <Sidebar></Sidebar>

    <div className="col-lg-12 m-auto dash">
      <Link className="order-li" to="myorder">
        <div className="container px-4 mt-5">
          <div className="row gx-5">
            <div className="col">
              <div className="p-3 totalOrder">
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