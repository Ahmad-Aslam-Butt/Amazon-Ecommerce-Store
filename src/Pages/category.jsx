import { Link, useParams } from 'react-router-dom';
import data from '../data';
import CartQuantity from '../Component/CartQuantity';
import AddToCart from '../Component/addToCart';
import { useState } from 'react';

function CategoryPage() {
  const { categoryName } = useParams();

  const [addedToCartIds, setAddedToCartIds] = useState([]);

  // Mapping route param to actual product arrays
  const categoryMap = {
    electronics: data.electronicProducts,
    fashion: data.fashionProducts,
    'home-kitchen': [...data.HomeProducts, ...data.kitchenProducts],
    beauty: data.SingleProduct,
  };

  const products = categoryMap[categoryName] || [];

  const handleAddToCart = (productId) => {
    setAddedToCartIds((prev) => [...prev, productId]);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 capitalize">{categoryName} Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.length ? (
          products.map((product) => (
            <div key={product.id} className="border p-4 rounded shadow-sm">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} className="w-[200px] h-[200px] object-cover mx-auto mb-2" />
                <p className="text-sm text-gray-700">{product.description}</p>
                <p className="text-2xl font-semibold text-gray-900">{product.price}</p>
              </Link>

              {!addedToCartIds.includes(product.id) ? (
                <AddToCart
                  product={product}
                  qty={Number(1)}
                  onClick={() => handleAddToCart(product.id)}
                />
              ) : (
                <CartQuantity itemId={product.id} />
              )}
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
