import React, { useContext, useState ,useEffect} from "react";

import { Link } from 'react-router-dom';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import RateReviewIcon from '@material-ui/icons/RateReview';
import AddIcon from '@material-ui/icons/Add';
// import AdminPanelSettingsIcon from '@material-ui/icons/AdminPanelSettings';
import { userContext } from '../../../App';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
const Sidebar = () => {
     let [loggedInUser,setLoggedInUser]=useContext(userContext)

     let [isAdmin,setIsAdmin]=useState([])
     useEffect(()=>{
             fetch("https://obscure-woodland-45973.herokuapp.com/findAdmin")
             .then(res=>res.json())
             .then(data=>{setIsAdmin(data)
       
          
          })
     },[])
     let adminVai =isAdmin.find(data=>data.email==loggedInUser.email)

    return (
     <div className="sidebar col-lg-2  col-md-2 ">
       {/* <div className="section-bar">
  <h3 className="    sec-Title">Dashboard</h3>

       </div> */}
       {adminVai?<>
          <div className="item">
 <Link className="link" title="home" to="/"><div className="item-1">< HomeIcon className="item-padd"/> <span className="item-hide">HOME</span> </div></Link>  
 <Link className="link" title="my order" to="/myorder"><div className="item-1">< BookmarkBorderIcon className="item-padd"/> <span className="item-hide">MY ORDER</span></div></Link>  
 <Link className="link" title="review" to="/review"><div className="item-1">< RateReviewIcon className="item-padd"/><span className="item-hide">REVIEW</span></div></Link>  
 <Link className="link" title="add service" to="/addservice"><div className="item-1"><  AddIcon className="item-padd"/><span className="item-hide">ADD SERVICE</span></div></Link>  
 <Link className="link" title="Make Admin" to="/makeAdmin"><div className="item-1">< AddIcon  className="item-padd"/><span className="item-hide">MAKE ADMIN</span></div></Link>  
 <Link className="link" title="/manageOrders" to="/manageOrders"><div className="item-1">< FormatListBulletedIcon className="item-padd"/><span className="item-hide">MANAGE ORDERS</span></div></Link>  
 <Link className="link" title="logout" to="/logout"><div className="item-1">< ExitToAppIcon className="item-padd"/><span className="item-hide">LOG OUT</span></div></Link>  
 
      
       
 
          </div>
       
       </>:<>
       
       <div className="item">
 <Link className="link" title="home" to="/"><div className="item-1">< HomeIcon className="item-padd"/> <span className="item-hide">HOME</span> </div></Link>  
 <Link className="link" title="my order" to="/myorder"><div className="item-1">< BookmarkBorderIcon className="item-padd"/> <span className="item-hide">MY ORDER</span></div></Link>  
 <Link className="link" title="review" to="/review"><div className="item-1">< RateReviewIcon className="item-padd"/><span className="item-hide">REVIEW</span></div></Link>  

 <Link className="link" title="logout" to="/logout"><div className="item-1">< ExitToAppIcon className="item-padd"/><span className="item-hide">LOG OUT</span></div></Link>  
 
      
       
 
          </div>
       
       
       </>}

     </div>

    );
};

export default Sidebar;