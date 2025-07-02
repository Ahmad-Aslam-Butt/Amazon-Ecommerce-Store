import React from 'react';
import StoreData from '../Component/StoreData';
const Cart = () => {
  return (
    <div className="bg-[#eaeded] py-[16px] px-[16px]">
      <div className="bg-white">
        <div className='px-5 py-5'>
          <p className="text-3xl">Shopping Cart</p>
          <p className="text-sm text-[#4077ae] hover:text-[#284a67]">Deselect items</p>
          <p className="text-[#666b69] mr-3 text-right">Price</p>
        </div>  
        <div className="h-0.5 mx-2 bg-[#dddddd]"></div>
        <div>
          <StoreData />
        </div>
      </div>
    </div>
  )
};

export default Cart;
