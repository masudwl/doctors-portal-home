import React from 'react';

import Imran from '../../../images/imran.png'
import Popy from '../../../images/popy.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import BlogDetails from './BlogDetails';

import '../Blog/blog.css';


const blogInfo = [
{
    name: 'Dr. Imran', 
    date: '12 March 2021', 
    title: '2 Times of Brush in a day can Keep you healthy', 
    img: Imran
}, 
{
    name: 'Dr. Popy ', 
    date: '12 March 2021', 
    title: 'The Tooth Cancer is taking a Challange', 
    img: Popy
}]

const Blog = () => {
    return (
        <div className="blog_area">
            <div className="container">
                <div className="row">
                    <div className="blog-header">
                        <h5>Our Blog</h5>
                        <h2>From Our Blog News</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="blog-tab">
                        <span><FontAwesomeIcon className="info-icon" icon={faQuoteLeft}></FontAwesomeIcon></span>
                            <h5>Rashed Kabir</h5>
                            <p>12 March 2021</p>
                            <h4>Check at least a doctor in year for your Teath</h4>
                            <span><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span>
                        </div>
                    </div>
                    {
                        blogInfo.map(bInfo => <BlogDetails bInfo={bInfo}></BlogDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;