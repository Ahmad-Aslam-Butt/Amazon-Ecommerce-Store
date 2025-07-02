import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';

const CustomCarousel = ({ title, link, products, start, end }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3,
    },
  };

  return (
    
      <div className="px-4 py-3">
        <div className="flex items-center pb-3">
          <p className="text-[26px] font-semibold">{title}</p>
          
            <Link className="text-sm text-[#4077ae] hover:text-[#284a67] ml-5"
            >
            {link}
            </Link>
        </div>

        <Carousel
          responsive={responsive}
          infinite
          arrows
          draggable
          swipeable
          keyBoardControl
          containerClass="carousel-container"
          itemClass="px-2"
        >
          {products.slice(start, end).map((product) => (
            <div key={product.id} className="bg-white p-2 rounded shadow text-center">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  className="w-full h-36 object-contain cursor-pointer hover:scale-105 transition-transform duration-200"
                  alt={product.name || `Product ${product.id}`}
                />
                <p className="pt-2 text-sm">{product.name}</p>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    
  );
};

export default CustomCarousel;
