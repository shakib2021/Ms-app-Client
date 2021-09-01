import React from 'react';
import './MyOrder.css';
import { useContext, useEffect, useState } from 'react';
import swal from 'sweetalert';

const MyorderCard = (props) => {
  let { Name, Mobile, Email, status, _id, Address, ServiceTitle, Price, Description, img } = props.order;
  //  let [checkStatus,setCheckStatus]=useState()
 let handleDelete = (id) => {

    if (id == _id) {


    }
    swal({
      title: "Are you sure?",
      text: "Once deleted, Your Order is Cancelled permanently!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })


      .then((willDelete) => {
        if (willDelete) {


          fetch(`https://obscure-woodland-45973.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE"

          })
          swal("Poof! Your Order has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your Order is safe!");
        }
      });





  }


  return (
    <>
      <div div className="MyOrderCard mb-5">
        <div className="de-img-sec">
          <p className="status"> {status}</p>
          <img src={img} alt="product" />
        </div>
        <div className="title-sec">
          <span className="de-title">{ServiceTitle}</span>
        </div>
        <div className="price-sec">
          <span className="de-price">{Price}$</span>
        </div>
        <div className="details-sec">
          {/* <!-- Button trigger modal --> */}
          <div className="btnforDet">
            <button onClick={() => props.handleDetails(_id)} type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Order Details
            </button>



            <button onClick={() => handleDelete(_id)} type="button" id="cancel" className="btn btn-danger" >
              Cancel Order
            </button>


          </div>



        </div>
      </div>
    </>

  );
};

export default MyorderCard;