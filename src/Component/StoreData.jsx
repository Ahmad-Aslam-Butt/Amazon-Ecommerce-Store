import React, { useEffect } from 'react';
import CartQuantity from './CartQuantity';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from "../Redux/counter/cartSlice";

const StoreData = () => {
  // 🛒 Get cart items from Redux store
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // 🧹 Function to remove item from cart
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  // 💾 Save cart items to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // 🧮 Calculate total amount of all items in the cart
  const totalAmount = cartItems.reduce((acc, item) => {
    const price = Number(item.price.split('$')[1]);
    return acc + price * item.quantity;
  }, 0);

  return (
    <div className="max-h-[400px] overflow-y-auto mt-6">
      
      {/* 🛒 Show message if cart is empty */}
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center py-10">Your cart is empty.</p>
      ) : (
        <>
          {/* 🔁 Loop through cart items */}
          {cartItems.map((item, index) => (
            <div key={index} className="flex border-b py-4 px-4 justify-between">
              
              {/* 🖼️ Left side: image + name + price + quantity */}
              <div className="flex">
                <img
                  className="w-[100px] h-[100px] object-cover"
                  src={item.image}
                  alt={item.name}
                />
                <div className="mx-4">
                  <p className="text-lg">{item.name}</p>
                  <p className="text-lg font-bold">{item.price}</p>
                  <CartQuantity itemId={item.id} quantity={item.quantity} />
                </div>
              </div>

              {/* 💰 Right side: item total price + remove button */}
              <div className='flex gap-8 items-center'>
                <div className="text-gray-700 font-semibold">
                  ${Number(item.price.split('$')[1]) * item.quantity}
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-600 hover:text-red-800 font-bold"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* 🧾 Total Amount Bar at the bottom */}
          <div className="mt-6 px-4 py-4 bg-gray-100 rounded-lg shadow flex justify-between items-center">
            <p className="text-lg font-semibold">Total:</p>
            <p className="text-xl font-bold text-green-600">${totalAmount.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default StoreData;
