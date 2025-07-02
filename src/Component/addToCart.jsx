import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/counter/cartSlice';

const AddToCart = ({ product, qty, onClick }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: qty,
      })
      
    );
    if (onClick) onClick(); // optional callback to update UI in parent
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-32 h-10 bg-[#ffd814] rounded-full"
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
