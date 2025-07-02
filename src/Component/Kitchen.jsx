import React from 'react';
import { Link } from 'react-router-dom';

const Kitchen = ({ products, start, title, linkText }) => {
  return (
    <div>
      <div className='bg-white w-[23vw] px-5 pt-5 pb-4 text-black z-10'> 
        <p className='text-[22px] font-semibold pb-3 text-nowrap overflow-hidden'>{title}</p>

        {/* ✅ First product image and name wrapped in <Link> */}
        {products[start] && (
  <Link to={`/product/${products[start].id}`}>
    <img
      className='w-[375px] h-[128px] cursor-pointer hover:scale-105 transition-transform duration-200'
      src={products[start].image}
      alt={products[start].name}
    />
    <p className='pb-3'>{products[start].name}</p>
  </Link>
        )}

        {/* Other 3 sub products */}
        <div className='flex gap-2 pb-3'>
          {products.slice(1,4).map((product) => (
            <div key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img className='w-[140px] h-[90px] cursor-pointer hover:scale-105 transition-transform duration-200'
                //  src={`/public/${product.image}`} 
                src={product.image} 
                 alt={product.name} />
                <p className='text-[15px]'>{product.name.length > 12 ? product.name.slice(0, 12) + "..." : product.name}</p>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom link */}
        <div className='mt-1'>
          <Link className='text-xs text-[#4077ae] hover:text-[#284a67]' to="/kitchen">
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Kitchen;
