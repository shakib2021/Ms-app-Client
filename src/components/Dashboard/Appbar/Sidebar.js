import React, { useContext, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { userContext } from '../../../App';
const Sidebar = () => {
  let [loggedInUser, setLoggedInUser] = useContext(userContext)

  let [isAdmin, setIsAdmin] = useState([])
  useEffect(() => {
    fetch("https://obscure-woodland-45973.herokuapp.com/findAdmin")
      .then(res => res.json())
      .then(data => {
        setIsAdmin(data)


      })
  }, [])
  let adminVai = isAdmin.find(data => data.email == loggedInUser.email)

  let handleLogOut = () => {
    setLoggedInUser({})
  }
  return (
    <div>
      <nav className="navbar  navbar-expand-lg navbar-light  ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">MS</a>
          <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              {adminVai ? <>
                <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to="/"> <a className="nav-link" href="/">Home</a></Link>

                </li>
                <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to="/myorder"> <a className="nav-link" href="/dashboard"> MyOrder</a></Link>

                </li>
                <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to="/review"> <a className="nav-link" href="/review"> Review</a></Link>

                </li>
                <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to="/addservice"> <a className="nav-link" href="/addservice">AddService</a></Link>
                </li>
                <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to="/makeAdmin"> <a className="nav-link" href="/makeAdmin"> MakeAdmin</a></Link>

                </li>
                <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to="/manageOrders"> <a className="nav-link" href="/manageOrders">AllOrder</a></Link>

                </li>
                <li classNameNme="nav-item">
                  {loggedInUser.email ? <Link style={{ textDecoration: 'none' }} onClick={handleLogOut} to="/login"> <a className="nav-link" href="/login">LogOut</a></Link> : <Link style={{ textDecoration: 'none' }} to="/login"> <a className="nav-link" href="#">Login</a></Link>}
                </li>
                {loggedInUser.email && <>
                  <img className="logPhoto" src={loggedInUser.photoURL} alt="fu#k" />
                </>}


              </> : <>
                <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to="/"> <a className="nav-link" href="/">Home</a></Link>

                </li>
                <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to="/myorder"> <a className="nav-link" href="/dashboard"> MyOrder</a></Link>

                </li>
                <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to="/review"> <a className="nav-link" href="/review"> Review</a></Link>

                </li>


                <li classNameNme="nav-item">
                  {loggedInUser.email ? <Link style={{ textDecoration: 'none' }} onClick={handleLogOut} to="/login"> <a className="nav-link" href="/login">LogOut</a></Link> : <Link style={{ textDecoration: 'none' }} to="/login"> <a className="nav-link" href="#">Login</a></Link>}
                </li>
                {loggedInUser.email && <>
                  <img className="logPhoto" src={loggedInUser.photoURL} alt="fu#k" />
                </>}


              </>



              }

            </ul>
          </div>
        </div>
      </nav>
    </div>

  );
};

export default Sidebar;