import React, { useState, useEffect } from "react";
import sliderInfo from "./sliderInfo";
import "./slider.css";
import gsap from "gsap"

const Home = ({slides}) => {

    useEffect(() => {

        document.title = "Portfolio | Dev Roshitha"

    }, [])

    useEffect(() => {

        gsap.from(".sliderWrapper", {
            y: 200,
            opacity: 1,
            duration: 2,
            ease: "bounce"
        })
    }, [])


    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (<>
    {/* <div className="row"> */}
        <div className="col-12 col-md-12 col-sm-12 col-xs-12 sliderWrapper">
            <section className='slider'>
                    {sliderInfo.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>

                                <div className="slideItemWrapper">
                                    <div className="left-arrow">
                                        <i className="fa-solid fa-angle-left arrow-left" onClick={prevSlide}></i>
                                    </div>

                                    {index === current && (
                                        <div className="slider-caption">
                                            <h2>{slide.sHeading}</h2>
                                            <p>{slide.sParagraph}</p>
                                        </div>
                                    )}

                                    {index === current && (
                                        <img src={slide.sImgSrc} alt='roshitha' className='image' />
                                    )}

                                    <div className="right-arrow">
                                        <i className="fa-solid fa-angle-right arrow-right" onClick={nextSlide}></i>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </section>
        </div>
    {/* </div> */}
    </>);
}

export default Home;