import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';

import './MakeAdmin.css';
import Sidebar from '../Appbar/Sidebar';
import AddIcon from '@material-ui/icons/Add';
import swal from 'sweetalert';
import { useForm } from "react-hook-form";
// import AdminPanelSettingsIcon from '@material-ui/icons/AdminPanelSettings';

const MakeAdmin = () => {
  let [loggedInUser,setLoggedInUser]=useContext(userContext)

const { register, handleSubmit, formState: { errors } } = useForm();
const onSubmit = data => {
let Email={
  email:data.email
}

  swal({
            title: "Are You Sure To Make Admin?",
           icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willSubmit) => {
            if (willSubmit) {
             fetch("https://obscure-woodland-45973.herokuapp.com/addadmin",{
              method:'POST',
              headers:{"content-type":"application/json"},
              body:JSON.stringify(Email)
               
          })
    .then(response =>response.json())
    .then(result=>  {
        if(result){
            swal("Huh! Make Admin Successfully", {
                icon: "success",
              });
        }
       
    })
             
            } 
          });
    }

    document.title="Make admin || MS"

    return (
        <div  className="    row     makeAdmin">
           <div className="section-bar">
  <div className="title-sec">
    <span >MAKE ADMIN</span>
</div>
<div className="loggedIn">
<img  title={loggedInUser.displayName} className="lo-img"  src={loggedInUser.photoURL} alt=""/>
</div>
</div>
            <div className="  col-lg-2 col-md-2">
<Sidebar></Sidebar>
            </div>
<div className="admin-section col-lg-10 col-md-10">
  
  <div className="row w-75 m-auto">
      <div className="admin-form shadow-md">
      <form onSubmit={handleSubmit(onSubmit)}>
          
          <input  required   {...register("email")}   id="exampleFormControlInput1"  className="input2  shadow-md"    type="email"   /><br/>
   <button onClick={handleSubmit} type="submit"   class="admBtn    shadow-md"> <AddIcon  />  Make admin</button>
          </form>
  
      </div>
  </div>
{/*  */}

{/*  */}

        </div>
        </div>
    );
};

export default MakeAdmin;