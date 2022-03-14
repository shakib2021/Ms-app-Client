import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../img/loader.gif';
import './ShowServices.css';

const ShowServices = () => {
  let [servicesData, setServicesData] = useState([])
  console.log(servicesData)
  useEffect(() => {
    fetch('https://obscure-woodland-45973.herokuapp.com/showservices')
      .then(res => res.json())
      .then(data => {
        setServicesData(data)
      })


  }, [])
  return (<>
    {servicesData.length === 0 && <>

      <img src={Loader} alt="Loader" />

    </>}
    <div className=' '>

  
    <div className="mx-6 grid  gap-6 md:grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 ">

      {servicesData.map(info => <div className="">
      <Link className="link-id" to={`/booking/${info._id}`}>
				<div class="shadow overflow-hidden  card">
					<img class="card-img  " src={info.img} alt="" />
					<div class="p-2 relative">
						<p class="text-lg mt-6 font-semibold text-lg st mb-8 ">{info.serviceTitle}</p>
						<p  className='text-xl text-red-700'>{info.price}$ •   Cloth</p>
				
      </div>
					</div>
          </Link>
      </div>
        
      )}
    </div>
    </div>
  </>
  );
};

export default ShowServices;