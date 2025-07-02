// src/components/CartQuantity.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity } from "../Redux/counter/cartSlice"
const CartQuantity = ({ itemId }) => {
  const dispatch = useDispatch();
  const quantity = useSelector(state => {
    const item = state.cart.items.find(i => i.id === itemId);
    return item ? item.quantity : 1;
  });

  const handleIncrease = () => {
    if (quantity < 100) {
      dispatch(updateQuantity({ id: itemId, quantity: quantity + 1 }));
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id: itemId, quantity: quantity - 1 }));
    }
  };

  return (
    <div className="inline-flex items-center space-x-4 bg-gray-100 px-2 py-1 rounded-lg border border-yellow-300">
      <button onClick={handleDecrease}>-</button>
      <span className="text-sm font-semibold text-gray-800">{quantity}</span>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default CartQuantity;
