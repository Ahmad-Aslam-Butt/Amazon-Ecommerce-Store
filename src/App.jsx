import React from 'react';
import Header from './Component/header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Component/header/navbar/navbar';
import Amazon from './Pages/Amazon';
import TodaysDeals from './Pages/Todays-Deals';
import Sell from './Pages/Sell';
import GiftCard from './Pages/GiftCard';
import PrimeVideo from './Pages/PrimeVideo';
import Registry from './Pages/Registry';
import Login from './Pages/login';
import Cart from './Pages/cart';
import ProductDetail from './Component/productDetail';
import Footer from './Pages/Footer';
import CategoryPage from './Pages/category';
function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='gap-3'>
          <Header />
          <Navbar />
          <Routes>
            <Route path='/' element={<Amazon />} />
            <Route path='Todays-Deals' element={<TodaysDeals />} />
            <Route path='Registry' element={<Registry />} />
            <Route path='Prime-Video' element={<PrimeVideo />} />
            <Route path='Gift-Card' element={<GiftCard />} />
            <Route path='Sell' element={<Sell />} />
            <Route path='Login' element={<Login />} />
            <Route path='Cart' element={<Cart />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
             </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
