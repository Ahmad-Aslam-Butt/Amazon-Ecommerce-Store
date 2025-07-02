import React from 'react';
import { useParams, Link } from 'react-router-dom';

const FashionSection = ({ title, products, start, end, link }) => {
  const { id } = useParams();

  return (
    <div className='bg-white w-[23vw] px-5 pt-5 pb-4 min-h-[64vh] text-black'>
      <p className='text-[24px] font-semibold  mb-5 text-nowrap overflow-hidden'>{title}</p>
      <div className='grid grid-cols-2 gap-4'>
        {products.slice(start, end).map((product) => (
          <div key={product.id} className="text-center">
            <Link to={`/product/${product.id}`}>
              <img
                className='w-[130px] h-[108px] mx-auto rounded shadow cursor-pointer hover:scale-105 transition-transform duration-200' 
                // src={`/public/${product.image}`}
                src={product.image} 
                alt={product.name}
              />
              <p className='pt-2 text-xs'>{product.name}</p>
            </Link>
          </div>
        ))}

        {/* See All Deals - should use Link if internal route is available */}
        {link ? (
          <div className="col-span-2 text-center mt-2">
            <Link to={link} className='text-xs text-[#4077ae] hover:text-[#284a67]'>
              See all deals
            </Link>
          </div>
        ) : (
          <div className="col-span-2 text-center mt-2">
            <a href="#" className='text-xs text-[#4077ae] hover:text-[#284a67]'>
              See all deals
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default FashionSection;
