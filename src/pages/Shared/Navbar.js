import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar bg-[#ede1e1] lg:md:px-[130px] px-[20px] shadow-xl 
        border-b-[1px] border-b-[#ddd]">
            <div class="navbar-start">
                <a href="/" class="text-3xl hover:cursor-pointer">TRIBU<span className='text-[40px] text-[#b700b7e6] font-light'>TE</span></a>
            </div>
            <div class="navbar-end">
                <div className="lg:hidden block">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 shadow-md bg-base-200 rounded-md w-52 lg:md:ml-0 
                    ml-[-150px]">
                        <li><a>Home</a></li>
                        <li className="mt-3"><a>Service</a></li>
                        <li className="mt-3"><a>Booking</a></li>
                        <li className="mt-3"><a>About Us</a></li>
                        <li className="mt-3"><a>Contact</a></li>
                    </ul>
                </div>
                </div>

                <div className="hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><a>Home</a></li>
                    <li><a>Service</a></li>
                    <li><a>Booking</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Contact</a></li>
                </ul>
                </div>
                
            </div>
        </nav>
    );
};

export default Navbar;