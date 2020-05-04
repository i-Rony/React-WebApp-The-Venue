import React from 'react';
import Slider from 'react-slick';

import one from '../resources/images/one.jpg';
import two from '../resources/images/two.jpg';
import three from '../resources/images/three.jpg';
import four from '../resources/images/four.jpg';

const Carousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    }

    return (
        <div 
            className="carrousel_wrapper"
            style={{
                height: `${window.innerHeight}px`,
                overflow: 'hidden'
            }}    
        >
            <Slider {...settings}>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${one})`,
                            height: `${window.innerHeight}px`
                        }}
                    ></div>
                </div>

                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${two})`,
                            height: `${window.innerHeight}px`
                        }}
                    ></div>
                </div>

                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${three})`,
                            height: `${window.innerHeight}px`
                        }}
                    ></div>
                </div>

                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${four})`,
                            height: `${window.innerHeight}px`
                        }}
                    ></div>
                </div>

            </Slider>

        </div>
    );
};

export default Carousel;