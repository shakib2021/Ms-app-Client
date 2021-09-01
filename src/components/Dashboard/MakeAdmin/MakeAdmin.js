import React, { useState } from 'react';


import './MakeAdmin.css';
import Sidebar from '../Appbar/Sidebar';
import AddIcon from '@material-ui/icons/Add';
import swal from 'sweetalert';
import { useForm } from "react-hook-form";
// import AdminPanelSettingsIcon from '@material-ui/icons/AdminPanelSettings';

const MakeAdmin = () => {

  let [makeR, setRe] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    let Email = {
      email: data.email
    }

    swal({
      title: "Are You Sure To Make Admin?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willSubmit) => {
        if (willSubmit) {
          setRe(true)

          fetch("https://obscure-woodland-45973.herokuapp.com/addadmin", {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(Email)

          })
            .then(response => response.json())
            .then(result => {
              if (result) {
                setRe(false)
                swal("Huh! Make Admin Successfully", {
                  icon: "success",
                });
              }

            })

        }
      });
  }

  document.title = "Make admin || MS"

  return (
    <div className=" row makeAdmin">

      <Sidebar></Sidebar>
     <h2 className="text-center text-danger mt-3">Make Admin</h2>

      <div className="row mt-0">
        <div className="col-xl-5  col-lg-8 offset-lg-3 col-md-12 m-auto">
          <div className="admin-form shadow-md">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input required   {...register("email")} id="exampleFormControlInput1" className="input2 w-95 shadow-md" type="email" /><br />
              <button onClick={handleSubmit} type="submit" class="admBtn    shadow-md"> <AddIcon />  {makeR ? "Plz Wait..." : "Make admin"}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;