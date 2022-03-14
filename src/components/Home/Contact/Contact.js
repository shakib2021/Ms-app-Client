import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import React from 'react';
// import GoogleIcon from '@material-ui/icons/Google';
import './Contact.css';

const Contact = () => {
    return (
        <div className="row contact mt-12 mb-12">
            <div className=" row contact-section">
<div className="col-lg-3 col-md-4">
<h3 className="contact-logo-name mb-8">Ms</h3>
<p className="contact-company-name"> @ 2021 Technologies PVT Ltd.</p>
<div className="contact-icon">
<p className="icony"><FacebookIcon className="brand-icon"  /></p>
<p className="icony"> <TwitterIcon className="brand-icon"/></p>
<p className="icony"><YouTubeIcon className="brand-icon"/></p>

</div>
</div>
<div className="col-lg-2 col-md-4">
<h4 className="company mb-8">Company</h4>
<p className="sub-ti">About us</p>
<p className="sub-ti">Career</p>
<p className="sub-ti">Privacy Policy</p>
<p className="sub-ti">Terms and Condition</p>
</div>
<div className="col-lg-2 col-md-4">
<h4 className="company mb-8">Community</h4>
<p className="sub-ti">Message</p>
<p className="sub-ti">NewsLetter</p>
<p className="sub-ti">Forum</p>
<p className="sub-ti">Support</p>
</div>
<div className="col-lg-2 col-md-4">
<h4 className="company mb-8">Resources</h4>
<p className="sub-ti">User Guide</p>
<p className="sub-ti">Blog</p>
<p className="sub-ti">Brand</p>
<p className="sub-ti">Press</p>
</div>
<div className="col-lg-2 col-md-4">
  <img  className="app-logo"  src="/img/goo.png" alt=""/>
  
</div>
            </div>
        </div>
    );
};

export default Contact;