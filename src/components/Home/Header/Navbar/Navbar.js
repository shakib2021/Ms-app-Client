import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../../App';
import './Navbar.css';
const Navbar = () => {
  let [loggedInUser,setLoggedInUser]=useContext(userContext)
  let handleLogOut=()=>{
  setLoggedInUser({})
  }
    return (
        <div>
            <nav class="navbar  navbar-expand-lg navbar-light  ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MS</a>
    <button class="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#ourServices">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Discount</a>
        </li>
        <li class="nav-item">
      <Link style={{textDecoration:'none'}} to="/myDashboard"> <a class="nav-link" href="#">  Dashboard</a></Link>   
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item">
   {loggedInUser.email?  <Link style={{textDecoration:'none'}} onClick={handleLogOut} to="/login"> <a class="nav-link" href="#">LogOut</a></Link>   : <Link style={{textDecoration:'none'}} to="/login"> <a class="nav-link" href="#">Login</a></Link>   }  
        </li>
        {loggedInUser.email&&<>
           <img className="logPhoto" src={loggedInUser.photoURL} alt="fu#k"/>
        </> }
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;