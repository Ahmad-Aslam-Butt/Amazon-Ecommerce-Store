import React, { useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdArrowDropDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { Link } from 'react-router-dom';
import data from '../../data';

const Header = () => {
  const allProducts = [
    ...data.electronicProducts,
    ...data.fashionProducts,
    ...data.HomeProducts,
    ...data.kitchenProducts,
    ...data.SingleProduct,
  ];

  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === '') {
      setFiltered([]);
      setIsDropdownOpen(false);
    } else {
      const result = allProducts.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(result);
      setIsDropdownOpen(true);
      setActiveIndex(-1);
    }
  };

  const handleKeyDown = (e) => {
    if (!isDropdownOpen) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % filtered.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      const selectedItem = filtered[activeIndex];
      window.location.href = `/product/${selectedItem.id}`;
      setFiltered([]);
      setIsDropdownOpen(false);
      setQuery('');
    } else if (e.key === 'Escape') {
      setIsDropdownOpen(false);
    }
  };

  return (
    <div className="bg-[rgb(19,25,33)] text-white px-2 py-2 flex gap-3 font-sans">
      <div>
        <Link to="/">
          <img className='w-24 hover:border cursor-pointer' src="/image/amazon.png" alt="amazon" />
        </Link>
      </div>

      <div className="flex hover:border cursor-pointer">
        <CiLocationOn className='size-5 mt-4' />
        <div>
          <p className='font-semibold text-xs text-[#cdcdcd]'>Deliver to</p>
          <p className='font-bold text-xs -mt-1'>Pakistan</p>
        </div>
      </div>

      <div className='flex relative' onBlur={() => setIsDropdownOpen(false)} tabIndex={0}>
        <div className="flex justify-center px-3 py-2 bg-[#cdcdcd] rounded-tl-md rounded-bl-md text-[#999999] hover:text-black cursor-pointer">
          <div className='flex items-center gap-1 text-xs font-semibold'>
            <p>All</p>
            <MdArrowDropDown />
          </div>
        </div>

        <input
          className='p-1.5 w-[45vw] text-black outline-none'
          type="search"
          name="search"
          id="search"
          placeholder='Search Amazon'
          value={query}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
        />

        <div className="flex justify-center px-3 py-2 bg-[#f1b15cf6] rounded-tr-md rounded-br-md hover:bg-[#f3a847] cursor-pointer">
          <IoSearch className='size-7 text-black' />
        </div>

        {isDropdownOpen && filtered.length > 0 && (
          <div className="absolute bg-white text-black mt-12 max-h-60 overflow-y-auto w-[45vw] z-50 shadow-lg rounded">
            {filtered.map((item, index) => (
              <Link to={`/product/${item.id}`} key={item.id}>
                <div
                  className={`p-2 border-b border-gray-200 flex items-center gap-3 hover:bg-gray-100 ${
                    index === activeIndex ? 'bg-gray-200' : ''
                  }`}
                >
                  <img src={item.image} alt={item.name} className="w-10 h-10 object-cover" />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className='px-2 py-2 flex items-center gap-1'>
        <img className='w-6 h-4 mt-1' src="/image/download.png" alt="flag" />
        <p className='font-semibold text-base'>EN</p>
        <MdArrowDropDown className='mt-1.5 -ml-1.5' />
      </div>

      <Link to='Login'>
        <div className='flex hover:border cursor-pointer'>
          <div>
            <p className='font-normal text-xs'>Hello, sign in</p>
            <p className='font-bold text-sm -mt-1'>Account & Lists</p>
          </div>
          <MdArrowDropDown className='mt-4' />
        </div>
      </Link>

      <div className="hover:border cursor-pointer">
        <p className='font-normal text-xs'>Return</p>
        <p className='font-bold text-sm -mt-1'>& Orders</p>
      </div>

      <Link className='font-semibold text-sm' to='Cart'>
        <div className="ml-3 hover:border cursor-pointer flex items-center">
          <p className=''>0</p>
          <BsCart className='size-9 -ml-6 ' />
          <p>Cart</p>
        </div>
      </Link>
    </div>
  );
};

export default Header;
