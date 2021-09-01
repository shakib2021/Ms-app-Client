import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import Sidebar from '../Appbar/Sidebar';
import MyorderCard from './MyorderCard';

const MyOrder = () => {

  let [userOrders, setUserOrders] = useState([])
  let [OrderDetails, setOrderDetails] = useState({})

  let [loggedInUser, setLoggedInUser] = useContext(userContext)
  let orderData = userOrders.filter(order => order.Email == loggedInUser.email)

  useEffect(() => {
    fetch("https://obscure-woodland-45973.herokuapp.com/showOrder")
      .then(response => response.json())
      .then(data => {
        setUserOrders(data)

      })


  }, [orderData])
  // //////////////////////////////////
  let handleDetails = (id) => {
    console.log(id)
    let singleOrder = orderData.find(single => single._id == id)
    setOrderDetails(singleOrder)
  }
  document.title = "My Orders | Ms"
  return (
    <div className="row    Myorder mt-0 ">
     <Sidebar></Sidebar>
     <h2 className="text-center text-danger">My Order</h2>
  
        <div className="row">
 {orderData.length == 0 && <div className="text-center mt-5 mb-5 h-100">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>}

          { orderData.map(order => <>
              <div className=" col-lg-4 col-xl-3 col-md-6 col-sm-6 ">

                <MyorderCard handleDetails={handleDetails} order={order}></MyorderCard>
              </div>
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
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Ok</button>

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