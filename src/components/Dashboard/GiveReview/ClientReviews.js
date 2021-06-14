import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import AddIcon from '@material-ui/icons/Add';

import { userContext } from '../../../App';
import  Sidebar  from '../Appbar/Sidebar';
const ClientReviews = () => {
    let [loggedInUser,setLoggedInUser]=useContext(userContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
   
    const onSubmit = data => {
        
        let reviewData={
          email:loggedInUser.email,
          avartar:loggedInUser.photoURL,
          name:loggedInUser.displayName,
          description:data.description,
          Redate:new Date().toDateString()
        }
        fetch("https://obscure-woodland-45973.herokuapp.com/addreview",{
            method:'POST',
            headers:{"content-type":"application/json"},
            body:JSON.stringify(reviewData)
             
        })
            .then(response =>response.json())
            .then(result=>  {
                if(result){
                    swal("Huh! Thanks For Your Valuable Review", {
                        icon: "success",
                      });
                }
            })
                     
                    } 
            
    document.title="Client Review || MS"
            
    return (

        <div className="row   ClientReview">
        <div className="section-bar">
  <div className="title-sec">
    <span >GIVE US REVIEW</span>
</div>
<div className="loggedIn">
<img  title={loggedInUser.displayName} className="lo-img"  src={loggedInUser.photoURL} alt=""/>
</div>
</div>
            <div className="col-md-2 col-lg-2 col-sm-12 ">
           
<Sidebar></Sidebar>

            </div>
            <div className="col-md-10 col-sm-12 col-lg-10 mb-0">
           
                <div className="row w-75 mt-5 service-form m-auto">
                <form onSubmit={handleSubmit(onSubmit)}>

              <div class="mb-3 w-75">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea  required  class="form-control"  {...register("description")} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button     type="submit"   className="admBtn mb-5"> < AddIcon/>  Make Review</button>


  </form>

   </div>
     </div>
             </div>
    );
};

export default ClientReviews;