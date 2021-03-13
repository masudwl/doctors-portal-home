import React from 'react';
import '../Blog/blog.css';
const BlogDetails = ({bInfo}) => {
    return (
        <div className="col-md-4 blog-box">
            <img src={bInfo.img} alt=""/>
            <h5>{bInfo.name}</h5>
            <p>{bInfo.date}</p>
            <h4>{bInfo.title}</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quas itaque illum cupiditate fuga alias, eum accusamus animi eos vero!</p>
        </div>
    );
};

export default BlogDetails;