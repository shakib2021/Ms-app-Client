
import React, { useRef, useState , useEffect} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./HeaderInfo.css";


// import Swiper core and required modules
import SwiperCore, {
  Autoplay,  Pagination,Navigation
} from 'swiper/core';
import { Button } from "@material-ui/core";


// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);


const HeaderInfo = () => {
  let [servicesData,setServicesData]=useState([])
  console.log(servicesData)
  useEffect(() =>{
    fetch('https://obscure-woodland-45973.herokuapp.com/showservices')
    .then(res=>res.json())
    .then(data=>{
      setServicesData(data)
    })


  },[])
    return (
        <div className="row headerinfo mt-5">
  <Swiper spaceBetween={0} centeredSlides={true} autoplay={{
  "delay": 2500,
  "disableOnInteraction": false
}} pagination={{
  "clickable": true
}} navigation={true} className="mySwiper">

  {servicesData.map(data=><>
    {servicesData.length==0 ? <p className="text-center">hgffytdftdrtd</p>
  
  :<SwiperSlide className="Slider">
  <div className="row w-75 m-auto slideM">
  <div className="col-lg-6 slide-text">
   <h3 className="slideTitle">{data.serviceTitle}</h3>
      <h3 className="slidePrice">{data.price}$</h3>
<Link className="link-id" to={`/booking/${data._id}`}>   
      <Button variant="contained" color="primary">
   Buy Now
</Button>
</Link>  

  </div>
  <div className="col-lg-6">
    <img className="slide-img" src={data.img}    alt=""/>
  </div>
  </div>
</SwiperSlide>}

  
  
  
  
  
  
  
  
  
  </>)}
    </Swiper>
            
        </div>
    );
};

export default HeaderInfo;