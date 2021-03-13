import React from 'react';
import FooterInto from './FooterInto';
import '../Footer/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'

const footerInfo =[{
    title: ' ' 
    
},
{
    title: 'Services' 
    
},
{
    title: 'Oral Health' 
    
}]

const Footer = () => {
    return (
        <div className="footer_area">
            <div className="container">
                <div className="row">
                    {
                        footerInfo.map(footerInfo=> <FooterInto footerInto={footerInfo}></FooterInto>)
                    }
                    <div className="col-md-3">
                        <h4>Our Address</h4>
                        <p>Motijheel, Dhaka, Bangladesh</p>
                        <div className="social-icons">
                           <span><FontAwesomeIcon icon={faFacebookF} /></span> 
                           <span><FontAwesomeIcon icon={faGooglePlusG} /></span> 
                           <span><FontAwesomeIcon icon={faTwitter} /></span> 
                        </div>
                        <p>Call Now</p>
                        <button className="btn btn-primary">+8801811486120</button>
                    </div>
                </div>
                <p className="text-center mt-5">Copyrights {(new Date()).getFullYear()} All rights Reserved by M H Masud</p>
            </div>
        </div>
    );
};

export default Footer;