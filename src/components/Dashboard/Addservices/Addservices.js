
import React, { useState } from 'react';

import Sidebar from '../Appbar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
import './Addservices.css'
import { useHistory } from 'react-router-dom';

const Addservices = () => {


  const { register, handleSubmit, formState: { errors } } = useForm();

  let [Toast, setToast] = useState(null)
  let [addPic, setAddPic] = useState(null)
  let [addItem, setAddItem] = useState(false)
  let handlePic = (event) => {

    const imageData = new FormData()
    imageData.set('key', '297c47d38fadb6e7e10ed36519c1a5e3')

    imageData.append('image', event.target.files[0])
    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setAddPic(response.data.data.display_url)

      })
      .catch(function (error) {

      });

  }


  const onSubmit = data => {
    setAddItem(true)
    let addServiceData = {
      serviceTitle: data.serviceTitle,
      price: data.price,
      category: data.category,
      img: addPic,
      description: data.description
    }
    fetch("https://obscure-woodland-45973.herokuapp.com/addService", {
      method: 'POST',
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addServiceData)
    })
      .then(res => res.json())
      .then(value => {
        setToast(value)

        if (value) {

          setAddItem(false)
          setAddPic(false)

          swal({
            title: "Good job!",
            text: "Item Added Successfully!",
            icon: "success",
            button: "Ok",
          });
        }
        else {
          toast("Order failed !")
        }

      })
  };

  document.title = "Add Products || MS"

  return (

    <div className="row   Addservices">
      <Sidebar></Sidebar>
      <div className=" col-xl-5  col-lg-8 offset-lg-3 col-md-12  mt-5 service-form m-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="mb-3 mt-3 w-75">
            <label for="exampleFormControlInput1" class="form-label ">Service Title</label>
            <input type="text" required class="form-control"  {...register("serviceTitle")} id="exampleFormControlInput1" placeholder="Service Title" />
          </div>
          <div class="mb-3 w-75">
            <label for="exampleFormControlInput1" class="form-label">Price</label>
            <input type="number" required class="form-control" {...register("price")} id="exampleFormControlInput1" placeholder="Price" />
          </div>
          <div class="mb-3 w-75">
            <label for="exampleFormControlInput1" class="form-label">Category</label>
            <input type="text" required class="form-control" {...register("category")} id="exampleFormControlInput1" placeholder="Electronics" />
          </div>
          <div class="mb-3 w-75">

            <label for="exampleFormControlInput1" class="form-label">Service Pic</label>
            <input type="file" required class="form-control" onChange={handlePic} id="exampleFormControlInput1" placeholder="" />
          </div>
          <div class="mb-3 w-75">
            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
            <textarea required class="form-control"  {...register("description")} id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          {
            addPic == null ? <input disabled className="mb-5    submit-btn2" type="submit" /> : <input value={addItem ? "please Wait..." : "Submit"} className="mb-5   submit-btn" type="submit" />
          }
          {
            Toast ? <audio autoPlay >
              <source src="/img/iPhone Notification Sound (1) (online-audio-converter.com).mp3" type="audio/ogg" />
              <source src="/img/iPhone Notification Sound (1) (online-audio-converter.com).mp3" type="audio/mpeg" />

            </audio> : ""
          }
        </form>
      </div>

      <ToastContainer />

    </div>
  );
};

export default Addservices;