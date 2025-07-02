import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const HomeImage = () => {
    return (
        <div className='z-0'> 
            <Carousel infiniteLoop showThumbs={false}>
                <div>
                    <img src="/image/toy.jpg" alt="toy" />
                </div>
                <div>
                    <img src="/image/FAshion.jpg" alt="fashion" />
                </div>
                <div>
                    <img src="/image/gaming.jpg" alt="gaming" />
                </div>
                <div>
                    <img src="/image/Kitchen.jpg" alt="kitchen" />
                </div>
            </Carousel>
        </div>
    )
}

export default HomeImage