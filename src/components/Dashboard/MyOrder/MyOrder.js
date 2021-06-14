import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import Sidebar from '../Appbar/Sidebar';
import MyorderCard from './MyorderCard';

const MyOrder = () => {
  
    let [userOrders,setUserOrders]=useState([])
    let [OrderDetails,setOrderDetails]=useState({})
  
    let [loggedInUser,setLoggedInUser]=useContext(userContext)
    let orderData=userOrders.filter(order=>order.Email==loggedInUser.email)

    useEffect(() =>{
      fetch("https://obscure-woodland-45973.herokuapp.com/showOrder")
      .then(response =>response.json())
      .then(data => {
          setUserOrders(data)
         
      })


    },[orderData])
    // //////////////////////////////////
    let handleDetails=(id)=>{
console.log(id)
      let singleOrder=orderData.find(single=>single._id==id)
     setOrderDetails(singleOrder)
    }
document.title="My Orders | Ms"
    return (
        <div className="row    Myorder">
     <div className="section-bar">
  <div className="title-sec">
    <span >MY ORDERS</span>
</div>
<div className="loggedIn">
<img  title={loggedInUser.displayName} className="lo-img"  src={loggedInUser.photoURL} alt=""/>
</div>
</div>
                <div className="col-md-2 col-lg-2 col-sm-12 ">
           <Sidebar></Sidebar>
              </div>
      
              <div className="col-lg-10 col-md-10 col-sm-10">
   {  orderData.length==0 &&  <div class="text-center mt-5 mb-5">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div> }    
     {
        orderData.map(order=><>
        <MyorderCard  handleDetails={handleDetails}   order={order}></MyorderCard>
    
       {/* <!-- Modal --> */}
       <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">ORDER DETAIL</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
    <p className="question"> Ordered by</p>  
    <p className="ans">{OrderDetails.Name}</p>    

<p className="question"> Ordered Mobile</p>  
    <p className="ans">{OrderDetails.Mobile}</p> 
  
    <p className="question"> Ordered Email</p>  
    <p className="ans">{OrderDetails.Email}</p> 
    
    <p className="question"> Ordered Address</p>  
    <p className="ans">{OrderDetails.Address}</p> 
    
    <p className="question"> Product Name</p>  
    <p className="ans-des">{OrderDetails.ServiceTitle}</p> 
 
    <p className="question"> Product Image </p>  
    <img className="ans-img" src={OrderDetails.img} alt="" />

    <p className="question"> Product Description</p>  
    <p className="ans-des">{OrderDetails.Description}</p> 

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>
        </>
        ) 
     }     
     
  

             </div>
        </div>
    );
};

export default MyOrder;