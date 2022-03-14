import React from 'react';
import swal from 'sweetalert';
import './MyOrder.css';

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

      <div class="rounded  shadow-lg MyOrderCard">
        <img class="de-img-sec" src={img} alt="Mountain" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl  st">{ServiceTitle}</div>
          <p class="text-gray-700 text-base">
            <p className="text-red-700 text-xl">{Price}$</p>

          </p>
        </div>
        <div class="px-6 pt-4 pb-2 mb-5">
        <span class="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{status}</span>
          <button onClick={() => props.handleDetails(_id)} type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Order Details
          </button>
          <button onClick={() => handleDelete(_id)} type="button" id="cancel" className="btn btn-danger" >
            Cancel Order
          </button>
        
        </div>
      </div>
    </>

  );
};

export default MyorderCard;