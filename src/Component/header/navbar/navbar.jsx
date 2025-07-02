import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { Button, Drawer } from '@mui/material';
import data from '../../../data';
const Navbar = () => {
    // ✅ Drawer open/close state
    const [open, setOpen] = useState(false);

    // ✅ Toggle drawer function
    const toggleDrawer = (isOpen) => () => {
        setOpen(isOpen);
    };
    return (
        <div>
            {/* ✅ Navbar Links */}
            <ul className='flex items-center flex-row font-semibold text-sm bg-[#232f3e] text-white'>

                {/* ✅ Button that triggers Drawer */}
                <Button
                    onClick={toggleDrawer(true)}
                    sx={{ color: 'white' }}
                >
                    <div className="flex items-center gap-1 hover:border px-4 py-2">
                        <IoMdMenu className='size-5' />
                        <span>All</span>
                    </div>
                </Button>

                {/* ✅ Drawer itself */}
                <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                    <div className='w-[250px] p-4'>
                        <p className='font-semibold'>Navigation Menu</p>
                        {/* You can add any links or content inside the drawer */}
                        <Link to="/" className="block py-2  hover:text-blue-600">Home</Link>
                        <Link to="/Todays-Deals" className="block py-2  hover:text-blue-600">Today's Deals</Link>
                        <Link to="/Registry" className="block py-2  hover:text-blue-600">Registry</Link>
                        <Link to="/Prime-Video" className="block py-2  hover:text-blue-600">Prime Video</Link>
                        <Link to="/Gift-Card" className="block py-2  hover:text-blue-600">Gift Card</Link>
                        <Link to="/Customer-Service" className="block py-2  hover:text-blue-600">Customer Service</Link>
                        <Link to="/Sell" className="block py-2  hover:text-blue-600">Sell</Link>

                        {/* 🧭 Category Links */}

                        <hr className="my-4" />
                        <p className='text-lg font-semibold mb-2'>Category</p>

                        <Link to="/category/electronics" className="block py-2 hover:text-blue-600">Electronics</Link>
                        <Link to="/category/fashion" className="block py-2 hover:text-blue-600">Fashion</Link>
                        <Link to="/category/home-kitchen" className="block py-2 hover:text-blue-600">Home & Kitchen</Link>
                        <Link to="/category/beauty" className="block py-2 hover:text-blue-600">Beauty & Health</Link>
                        <hr className="my-4" />

                        {/* 🛠 Optional: Add general links below */}
                        <p className='text-lg font-semibold mb-2 '>Other Links</p>
                        <Link to="/Todays-Deals" className="block py-2  hover:text-blue-600">Today's Deals</Link>
                        <Link to="/Customer-Service" className="block py-2  hover:text-blue-600">Customer Service</Link>
                    </div>

                </Drawer>

                {/* ✅ Regular links outside the drawer */}
                <Link className='hover:border px-4 py-2' to='/Todays-Deals'>Today's Deals</Link>
                <Link className='hover:border px-4 py-2' to='/Registry'>Registry</Link>
                <Link className='hover:border px-4 py-2' to='/Prime-Video'>Prime Video</Link>
                <Link className='hover:border px-4 py-2' to='/Gift-Card'>Gift Card</Link>
                <Link className='hover:border px-4 py-2' to='/Customer-Service'>Customer Service</Link>
                <Link className='hover:border px-4 py-2' to='/Sell'>Sell</Link>
            </ul>
        </div>
    );
};

export default Navbar;
