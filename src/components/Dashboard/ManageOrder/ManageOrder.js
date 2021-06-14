import { Button } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import swal from 'sweetalert';
import { userContext } from '../../../App';

import './ManageOrder.css'

const ManageOrder = () => {
let [loggedInUser,setLoggedInUser]=useContext(userContext)

    let [userOrders,setUserOrders]=useState([])
    let [orderNumber,setOrderNumber]=useState(1)
    

    useEffect(() =>{
        fetch("https://obscure-woodland-45973.herokuapp.com/showOrder")
        .then(response =>response.json())
        .then(data => {
            setUserOrders(data)
            console.log(data)
        })
  
  
      },[userOrders])
      //delete order method

      let  handleDelete=(id)=>{
  
        swal({
          title: "Are you sure?",
          text: "Once deleted, User Order is Cancelled permanently!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        
      
        .then((willDelete) => {
          if (willDelete) {
      

        fetch(`https://obscure-woodland-45973.herokuapp.com/deleteUserOrder/${id}`,{
          method:"DELETE"
             
        })
            swal("Poof! User Order has been deleted!", {
              icon: "success",
            });
          } else {
            swal("User Order is safe!");
          }
        });
    }
    //orders update method
    let handleUpdate=(id,e)=>{
let valu=e.target.value;
let updateData={
  id:id,
  status:valu
}
fetch("https://obscure-woodland-45973.herokuapp.com/update",{
    method:'PATCH',
    headers:{'content-type':'application/json'},
    body:JSON.stringify(updateData)

}

)

    }
    document.title="Manage Orders || MS"
    return (
        <div className="row   dashboard">

<div className="section-bar">
  <div className="title-sec">
    <span >MANAGE ORDERS</span>
</div>
<div className="loggedIn">
<img  title={loggedInUser.displayName} className="lo-img"  src={loggedInUser.photoURL} alt=""/>
</div>
</div>
          

        <div className="col-lg-12 col-md-12 col-sm-10 manage-order">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Order Title</th>
      <th scope="col">Action</th>
      <th scope="col">Status</th>
      <th scope="col">Order Date</th>
      <th scope="col">Change Status</th>
    </tr>
  </thead>
  <tbody>
    
    {userOrders.map(order =><>
      
    
    
        <tr   >
        <th  scope="row">{orderNumber++}</th>
      <td>{order.Name}</td>
      <td>{order.Email}</td>
      <td>{order.ServiceTitle}</td>
      <td><Button onClick={()=>handleDelete(order._id)} variant="contained" color="secondary">
  Delete
</Button></td>
      <td>{order.status}</td>
      <td>{order.time}</td>
      <td>
      <select onChange={(event)=>handleUpdate(order._id,event)}   class="form-select" aria-label="Default select example">
      <option selected>Select Status</option>
  <option value="Pending">Pending</option>
  <option value="Going on">Going On</option>
  <option value="Done">Done</option>
</select>
      </td>
    
    
    
    </tr>
    
    
    
    </>)}
   
   
    
  </tbody>
</table>
            </div>
            </div>
    );
};

export default ManageOrder;