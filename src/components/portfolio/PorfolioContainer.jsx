import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './portfolio.css';


const PorfolioContainer = () => {


    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 5,
        margin: 0,
        touchDrag: true,
        mouseDrag: true,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };


    return (

            <div id="container-portfolio" className="bg-portfolio">
                <h2>Portafolio</h2>
                <div className="row">
                    <div className="col-md-12 mb-4">
                        <OwlCarousel id="carousel-portfolio" className="owl-carousel owl-theme mb-4" {...options}>
                                <div className='item'>
                                    <img src="/assets/portfolio/portfolio1.jpg" alt="portfolio1" />
                                </div>
                                <div className='item'>
                                    <img src="/assets/portfolio/portfolio2.jpg" alt="portfolio2" />
                                </div>
                                <div className='item'>
                                    <img src="/assets/portfolio/portfolio3.jpg" alt="portfolio3" />
                                </div>
                                <div className='item'>
                                    <img src="/assets/portfolio/portfolio4.jpg" alt="portfolio4" />
                                </div>
                                <div className='item'>
                                    <img src="/assets/portfolio/portfolio5.jpg" alt="portfolio5" />
                                </div>

                        </OwlCarousel>
                    </div>
                </div>
            </div>
    );
};

export default PorfolioContainer;