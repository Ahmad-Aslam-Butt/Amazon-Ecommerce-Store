// src/components/ProductDetail.jsx
import { useParams, useNavigate } from 'react-router-dom';
import data from '../data.js';
import QuantityDropdown from './quantity';
import { useState } from 'react';
import AddToCart from './addToCart.jsx';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/counter/cartSlice.js';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Combine all product arrays into one
  const allProducts = [
    ...data.electronicProducts,
    ...data.fashionProducts,
    ...data.HomeProducts,
    ...data.kitchenProducts,
    ...data.SingleProduct,
  ];

  const product = allProducts.find(item => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (product) {
 
      navigate('/cart');
    }
  };

  const handleBuyNow = () => {
    if (product) {
      dispatch(
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: quantity,
        })
      );
      navigate('/cart');
    }
  };

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="flex p-6 mx-auto bg-white rounded shadow">
      <img
        src={product.image}
        // src={`/${product.image.replace('src/', '')}`}
        alt={product.name}
        className="w-[450px] h-[450px] mx-5 my-5 object-cover"
      />
      <div>
        <h2 className="text-3xl font-bold mt-5">{product.name}</h2>
        <p className="text-gray-700 mt-5 text-2xl">{product.price}</p>
        <p className="text-gray-700 mt-5 whitespace-pre-line">{product.description}</p>

        <div className="mt-5">
          <QuantityDropdown quantity={quantity} setQuantity={setQuantity} />
        </div>

        <div className="flex gap-8 mt-12">
          <AddToCart
            product={product}
            qty={quantity}
            onClick={handleAddToCart}
          />
          <button
            onClick={handleBuyNow}
            className="w-32 h-10 bg-[#ffa41c] rounded-full"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
