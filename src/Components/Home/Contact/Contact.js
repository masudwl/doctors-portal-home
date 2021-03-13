import React from 'react';
import '../Contact/contact.css';

const Contact = () => {
    return (
      <div className="contact-area">
            <div className="container contact-main">
            <div className="row">
                <h5>Contact Us</h5>
                <h3>Always Connect With Us</h3>
            </div>
            <div className="row">
                <div className="col-md-6 m-auto">
                <form>
                    <input type="text" className="form-control mb-3" placeholder="Email Address" required/>
                    <input type="text" className="form-control mb-3" placeholder="Subject" required/>
                    <textarea name="" className="form-control mb-3" id="" cols="30" rows="10" placeholder="Youur Massage" required></textarea>
                    <input type="submit" className="form-control btn btn-primary" value="Submit"/>
                </form>
                </div>
            </div>
        </div>
      </div>
    );
};

export default Contact;