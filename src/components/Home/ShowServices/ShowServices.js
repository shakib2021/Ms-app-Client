import React, { useEffect } from 'react';
import { useState } from 'react';
import ServicesCard from './ServicesCard';
import './ShowServices.css';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const ShowServices = () => {
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
  
        <div className="row ">
          <div className="row container">
          <h1 className="servicesTitle mt-5 mb-5 ">Products</h1>

          </div>
         

         {servicesData.length==0 &&  <div className="col-lg-12 col-md-12 mb-5">
         <SkeletonTheme    color="#fffff" highlightColor="#444">
           <div className="services-skelton">
           <div >
    <Skeleton  height={180}  count={1} />
  </div>
  <p className="title-skelton">
  <Skeleton width={250}  count={1} />

  </p>
  <p className="title-skelton2">
  <Skeleton width={190}  count={1} />

  </p>
  <h3 className="price-skelton">
    <Skeleton width={90}  count={1} />
  </h3>
           </div>
  
</SkeletonTheme>
{/*  */}
<SkeletonTheme    color="#fffff" highlightColor="#444">
           <div className="services-skelton">
           <div >
    <Skeleton  height={180}  count={1} />
  </div>
  <p className="title-skelton">
  <Skeleton width={250}  count={1} />

  </p>
  <p className="title-skelton2">
  <Skeleton width={190}  count={1} />

  </p>
  <h3 className="price-skelton">
    <Skeleton width={90}  count={1} />
  </h3>
           </div>
  
</SkeletonTheme>
{/*  */}
<SkeletonTheme    color="#fffff" highlightColor="#444">
           <div className="services-skelton">
           <div >
    <Skeleton  height={180}  count={1} />
  </div>
  <p className="title-skelton">
  <Skeleton width={250}  count={1} />

  </p>
  <p className="title-skelton2">
  <Skeleton width={190}  count={1} />

  </p>
  <h3 className="price-skelton">
    <Skeleton width={90}  count={1} />
  </h3>
           </div>
  
</SkeletonTheme>
{/*  */}
<SkeletonTheme    color="#fffff" highlightColor="#444">
           <div className="services-skelton">
           <div >
    <Skeleton  height={180}  count={1} />
  </div>
  <p className="title-skelton">
  <Skeleton width={250}  count={1} />

  </p>
  <p className="title-skelton2">
  <Skeleton width={190}  count={1} />

  </p>
  <h3 className="price-skelton">
    <Skeleton width={90}  count={1} />
  </h3>
           </div>
  
</SkeletonTheme>
{/*  */}
<SkeletonTheme    color="#fffff" highlightColor="#444">
           <div className="services-skelton">
           <div >
    <Skeleton  height={180}  count={1} />
  </div>
  <p className="title-skelton">
  <Skeleton width={250}  count={1} />

  </p>
  <p className="title-skelton2">
  <Skeleton width={190}  count={1} />

  </p>
  <h3 className="price-skelton">
    <Skeleton width={90}  count={1} />
  </h3>
           </div>
  
</SkeletonTheme>
{/*  */}
<SkeletonTheme    color="#fffff" highlightColor="#444">
           <div className="services-skelton">
           <div >
    <Skeleton  height={180}  count={1} />
  </div>
  <p className="title-skelton">
  <Skeleton width={250}  count={1} />

  </p>
  <p className="title-skelton2">
  <Skeleton width={190}  count={1} />

  </p>
  <h3 className="price-skelton">
    <Skeleton width={90}  count={1} />
  </h3>
           </div>
  
</SkeletonTheme>
{/*  */}
<SkeletonTheme    color="#fffff" highlightColor="#444">
           <div className="services-skelton">
           <div >
    <Skeleton  height={180}  count={1} />
  </div>
  <p className="title-skelton">
  <Skeleton width={250}  count={1} />

  </p>
  <p className="title-skelton2">
  <Skeleton width={190}  count={1} />

  </p>
  <h3 className="price-skelton">
    <Skeleton width={90}  count={1} />
  </h3>
           </div>
  
</SkeletonTheme>
{/*  */}
<SkeletonTheme    color="#fffff" highlightColor="#444">
           <div className="services-skelton">
           <div >
    <Skeleton  height={180}  count={1} />
  </div>
  <p className="title-skelton">
  <Skeleton width={250}  count={1} />

  </p>
  <p className="title-skelton2">
  <Skeleton width={190}  count={1} />

  </p>
  <h3 className="price-skelton">
    <Skeleton width={90}  count={1} />
  </h3>
           </div>
  
</SkeletonTheme>
{/*  */}
<SkeletonTheme    color="#fffff" highlightColor="#444">
           <div className="services-skelton">
           <div >
    <Skeleton  height={180}  count={1} />
  </div>
  <p className="title-skelton">
  <Skeleton width={250}  count={1} />

  </p>
  <p className="title-skelton2">
  <Skeleton width={190}  count={1} />

  </p>
  <h3 className="price-skelton">
    <Skeleton width={90}  count={1} />
  </h3>
           </div>
  
</SkeletonTheme>
{/*  */}
<SkeletonTheme    color="#fffff" highlightColor="#444">
           <div className="services-skelton">
           <div >
    <Skeleton  height={180}  count={1} />
  </div>
  <p className="title-skelton">
  <Skeleton width={250}  count={1} />

  </p>
  <p className="title-skelton2">
  <Skeleton width={190}  count={1} />

  </p>
  <h3 className="price-skelton">
    <Skeleton width={90}  count={1} />
  </h3>
           </div>
  
</SkeletonTheme>
{/*  */}
          </div>
       }
      
            <div id="ourServices" className="row  showServices">
        <div className="col-lg-12 col-md-12 mb-5">
  {servicesData.map(info => <ServicesCard cardInfo={info}></ServicesCard>  )}    
       </div>


            </div>


        </div>
    );
};

export default ShowServices;