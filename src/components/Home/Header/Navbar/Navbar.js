import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../../App';
import './Navbar.css';
const Navbar = () => {
  let [loggedInUser, setLoggedInUser] = useContext(userContext)
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
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#ourServices">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Discount</a>
              </li>
              <li className="nav-item">
                <Link style={{ textDecoration: 'none' }} to="/myDashboard"> <a className="nav-link" href="/dashboard">  Dashboard</a></Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contact</a>
              </li>
              <li className="nav-item">
                {loggedInUser.email ? <Link style={{ textDecoration: 'none' }} onClick={handleLogOut} to="/login"> <a className="nav-link" href="#">LogOut</a></Link> : <Link style={{ textDecoration: 'none' }} to="/login"> <a className="nav-link" href="#">Login</a></Link>}
              </li>
              {loggedInUser.email && <>
                <img className="logPhoto" src={loggedInUser.photoURL} alt="fu#k" />
              </>}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;