import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Fade from 'react-reveal/Fade';
import { useForm } from "react-hook-form";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import './Bookings.css'
import { userContext } from '../../../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton from "react-loading-skeleton";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
// import { useHistory } from 'react-router';
import { Link, useHistory } from "react-router-dom";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import ReactImageMagnify from 'react-image-magnify';


const Bookings = () => {
  let history = useHistory();

  let [loggedInUser, setLoggedInUser] = useContext(userContext)
  let { id } = useParams();
  let [Toasty, setToasty] = useState(null)
  let [order, setOrder] = useState(false)
  let [count, setCount] = useState(1)
  let [minusCount, setMinusCount] = useState(true)

  const [checkCard, setCheckCard] = useState([])

  const Card = checkCard.find(checkCard => checkCard._id == id)
  let { serviceTitle, price, img, description, _id, category } = Card || {}



  useEffect(() => {
    fetch('https://obscure-woodland-45973.herokuapp.com/showservices')
      .then(res => res.json())
      .then(data => {
        setCheckCard(data)
      })


  }, [])

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    setOrder(true)
    let addOrderData = {
      Name: data.name,
      Email: data.email,
      Mobile: data.mobile,
      Address: data.address,
      ServiceTitle: serviceTitle,
      Price: price,
      Description: description,
      img: img,
      status: "pending",
      time: new Date().toDateString()


    }

    console.log(addOrderData)


    fetch("https://obscure-woodland-45973.herokuapp.com/addorder", {
      method: 'POST',
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addOrderData)
    })
      .then(res => res.json())
      .then(value => {
        setToasty(value);
        if (value) {
setOrder(false)
          toast.success('Great! Ordered Successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(function () {

            history.push("/myorder")

          }, 3000);


        }
        else {
          toast("Order failed !")
        }
        console.log(value)
      })
  };

  // product count handle


  let handlePlus = () => {
    setCount(count + 1)
    if (count == 1) {
      setMinusCount(false)
    }
  }

  let handleMinus = () => {
    setCount(count - 1)
    if (count == 2) {
      setMinusCount(true)
    }
  }
  document.title = "Bookings|| MS"

  return (
    <div className="row  container productDetail">
      <div className="row  detail ">
        {checkCard.length == 0 ? <div class="text-center mt-5 mb-5">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div> : <>
          <div className="back">

            <div className="backText">
              <Link to="/" className="backto">
                <ArrowBackIosIcon /> BACK TO HOME
              </Link>
            </div>

            <div className="loveicon">
              <span className="icon1" title="add to favorite"><FavoriteBorderIcon /></span>
            </div>

          </div>
          <div className=" img-sec col-md-6 col-lg-5 col-sm-12">


            <div className="img-flu">
              <ReactImageMagnify {...{
                smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  isFluidWidth: true,
                  src: img
                },
                largeImage: {
                  src: img,
                  width: 1200,
                  height: 1400
                }
              }} />
            </div>




          </div>
          <div className=" info-sec col-md-7 col-lg-7 col-sm-12">
            <p className="detail-title">{serviceTitle}</p>
            <div className="description-star">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarHalfIcon />
              <StarOutlineIcon />
            </div>
            <p className="description-text">{description}</p>
            <span className="category">
              Category
              <ArrowRightAltIcon />
            </span>{" "}
            <span className="category-name">{category}</span>
            <p className="description-price">
              <sup>$</sup>
              {price}
            </p>
            <div className="quantity-sec">

              <span className="quantity">Quantity <ArrowRightAltIcon /> </span>
              <span className="count"> {count} </span>
              <span onClick={handlePlus} className="count-plus"> <AddIcon /> </span>
              <span style={{ display: minusCount ? "none" : "block" }} onClick={handleMinus} className="count-minus"><RemoveIcon /> </span>
            </div>
            <div className=" mt-5 order-form ">
              <form onSubmit={handleSubmit(onSubmit)}>

                <div class="mb-3 mt-3 w-75">
                  {/* <h2 className="shipment">Shipment Details</h2> */}

                  <label for="exampleFormControlInput1" class="form-label  ">Name</label>
                  <input type="text" required class="form-control"  {...register("name")} defaultValue={loggedInUser.displayName} id="exampleFormControlInput1" />
                </div>
                <div class="mb-3 w-75">
                  <label for="exampleFormControlInput1" class="form-label">Email</label>
                  <input readOnly type="email" required class="form-control" {...register("email")} defaultValue={loggedInUser.email} id="exampleFormControlInput1" />
                </div>
                <div class="mb-3 w-75">
                  <label for="exampleFormControlInput1" class="form-label">Mobile<i class="fa fa-mobile" aria-hidden="true"></i></label>
                  <input type="number" required class="form-control" {...register("mobile")} defaultValue={loggedInUser.email} id="exampleFormControlInput1" />
                </div>
                <div class="mb-3 w-75">
                  <label for="exampleFormControlInput1" class="form-label">Address</label>
                  <input type="text" required class="form-control" {...register("address")} id="exampleFormControlInput1" />
                </div>
                <input className="mb-5  submit-bt"   value={order?"Please Wait...":"Confirm Order"}type="submit" />

                {
                  Toasty ? <audio autoPlay >
                    <source src="/img/iPhone Notification Sound (1) (online-audio-converter.com).mp3" type="audio/ogg" />
                    <source src="/img/iPhone Notification Sound (1) (online-audio-converter.com).mp3" type="audio/mpeg" />

                  </audio> : ""
                }

              </form>


            </div>

          </div>
        </>}

      </div>
      <ToastContainer />
    </div>

  );
};

export default Bookings;