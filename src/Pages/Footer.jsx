import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className=' mt-[30px]'>
        <div onClick={() => window.scrollTo({ top: 0 })} className='text-sm text-white px-2 py-2 bg-[#37475a] hover:bg-[#485769] text-center justify-center align-middle'>
            
        <p >
            Back to top
        </p>
    
        </div>
        <div className='flex bg-[#232f3e] text-white  pl-[200px] pr-[50px] py-[50px]'>
        <div className='px-[40px] '>
            <p className='text-lg font-semibold pb-1 '>Get to Know Us</p>
            <ul className='text-sm font-thin'>
                <li>
            <a className='' href="#">Careers</a>
            </li>
            <li>
            <a href="#">Blog</a>
            </li>
            <li>
            <a href="#">About Amazon</a>
            </li>
            <li>
            <a href="#">Invenstor Relation</a>
            </li>
            <li>
            <a href="#">Amazon Device</a>
            </li>
            <li>
            <a href="#">Amazon Science</a>
            </li>
            </ul>
        </div>
        <div className='px-[40px] '>
            <p className='text-lg font-semibold pb-1 '>Make Money with Us</p>
            <ul className='text-sm'>
            <li><a href="#">Sell products on Amazon</a></li>
            <li><a href="#">Sell on Amazon Business</a></li>
            <li><a href="#">Sell apps on Amazon</a></li>
            <li><a href="#">Become an Affiliate</a></li>
            <li><a href="#">Advertise Your Products</a></li>
            <li><a href="#">Self-Publish with Us</a></li>
            <li><a href="#">Host an Amazon Hub</a></li>
            <li><a href="#">See More Make Money with Us</a></li>
            </ul>
        </div>
        <div className='px-[40px] '>
            <p className='text-lg font-semibold pb-1 '>Amazon Payment Products</p>
            <ul className='text-sm'>
            <li><a href="#">Amazon Business Card</a></li>
            <li><a href="#">Shop with Points</a></li>
            <li><a href="#">Reload Your Balance</a></li>
            <li><a href="#">Amazon Currency Converter</a></li>
            </ul>
        </div>
        <div className='px-[40px] '>
            <p className='text-lg font-semibold pb-1 '>Let Us Help You</p>
            <ul className='text-sm'>
            <li><a href="#">Amazon and COVID-19</a></li>
            <li><a href="#">Your Account</a></li>
            <li><a href="#">Your Orders</a></li>
            <li><a href="#">Shipping Rates & Policies</a></li>
            <li><a href="#">Returns & Replacements</a></li>
            <li><a href="#">Manage Your Content and Devices</a></li>
            <li><a href="#">SHelp</a></li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Footer