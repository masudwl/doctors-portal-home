import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Doctos from '../Doctors/Doctos';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeroService from '../HeroService/HeroService';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div >
            <Header></Header>
            <Services></Services>
            <HeroService></HeroService>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Doctos></Doctos>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;