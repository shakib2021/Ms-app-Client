import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import AddIcon from '@material-ui/icons/Add';

import { userContext } from '../../../App';
import Sidebar from '../Appbar/Sidebar';
const ClientReviews = () => {
  let [loggedInUser, setLoggedInUser] = useContext(userContext)
  const { register, handleSubmit, formState: { errors } } = useForm();
  let [makeR, setRe] = useState(false)
  const onSubmit = data => {
    setRe(true)
    let reviewData = {

      email: loggedInUser.email,
      avartar: loggedInUser.photoURL,
      name: loggedInUser.displayName,
      description: data.description,
      Redate: new Date().toDateString()
    }
    fetch("https://obscure-woodland-45973.herokuapp.com/addreview", {
      method: 'POST',
      headers: { "content-type": "application/json" },
      body: JSON.stringify(reviewData)

    })
      .then(response => response.json())
      .then(result => {
        if (result) {
          setRe(false)
          swal("Huh! Thanks For Your Valuable Review", {
            icon: "success",
          });
        }
      })

  }

  document.title = "Client Review || MS"

  return (

    <div className="row   ClientReview">
      <Sidebar></Sidebar>
      <h2 className="text-center text-danger mt-3">Your Review</h2>
      <div className="row">
        <div className="col-xl-5  col-lg-8 offset-lg-3 col-md-12 mt-5 service-form m-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 w-95 ">
              <label for="exampleFormControlTextarea1" className="form-label mt-2">Message</label>
              <textarea required className="form-control"  {...register("description")} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="admBtn mb-5 "> < AddIcon />  {makeR ? "plz Wait..." : "Make Review"}</button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default ClientReviews;