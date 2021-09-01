import React from 'react';
import './ShowServices.css';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import InfoIcon from '@material-ui/icons/Info';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
const ServicesCard = (props) => {
let {serviceTitle,price,img,description,_id,category} =props.cardInfo;
    return (
        <Fade bottom>
            <>
            

    {/* end */}
            </>
<div className="card ">
    
    <div className="more">
    <div className="card-hori"><MoreHorizIcon/></div>
    <div className="card-hover">
        <div className="card-details"> <span className="details-text"><InfoIcon/> Product Details</span>  </div>
        <div className="card-details"> <span className="details-text"><FavoriteIcon/> Add to Whitelist</span> </div>  
        <div className="card-details"> <span className="details-text"><ReportProblemIcon/> Report This</span>  </div>
    </div>
    </div>
    <button className="category">{category}</button>

    
          <div className="card-img">
<img  src={img} alt="wait.." />
          <div className="title">
<Link className="link-id" to={`/booking/${_id}`}>   

             <span className="title-text" title={serviceTitle}  >{serviceTitle}</span><br></br>
             <span className="price">${price}</span>
          </Link>  

          </div>
    

    
          </div>
        </div>
        </Fade>
            
    );
};

export default ServicesCard;