// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

// 👇 Load existing cart data from localStorage (if any)
const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// 👇 Initial state of cart: use localStorage data if available
const initialState = { 
  items: savedCartItems,  // 👈 cart items array (with quantity, id, etc.)
};

// 👇 Create the cart slice using Redux Toolkit
const cartSlice = createSlice({
  name: 'cart',
  initialState, // 👈 using the localStorage-based initial state
  reducers: {
    
    // 👇 Add item to cart. If it exists, increase quantity.
    addToCart: (state, action) => {
      const { id, quantity, ...rest } = action.payload;
      const existingItem = state.items.find(i => i.id === id);
      if (existingItem) {
        // 👇 if item already in cart, update quantity
        existingItem.quantity += quantity;
      } else {
        // 👇 if not in cart, push new item with quantity
        state.items.push({ id, ...rest, quantity });
      }
    },


    // 👇 Remove item from cart based on ID
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    // 👇 Update quantity of a specific item in cart
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

// 👇 Exporting actions for use in components
export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

// 👇 Exporting the reducer to configure in store
export default cartSlice.reducer;
