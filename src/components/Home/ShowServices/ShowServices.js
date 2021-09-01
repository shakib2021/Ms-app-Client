import React, { useEffect } from 'react';
import { useState } from 'react';
import ServicesCard from './ServicesCard';
import './ShowServices.css';
import Loader from '../../img/loader.gif'
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
    <div className="row">
      {servicesData.map(info => <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
        <ServicesCard cardInfo={info}></ServicesCard>
      </div>
      )}
    </div>
  </>
  );
};

export default ShowServices;