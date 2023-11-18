import { Link } from 'react-router-dom';
import logo from '../../assets/logos/Group 1329.png'
import { useState, useContext } from 'react';
import { FaCartPlus } from "react-icons/fa6";
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const [totalCart, setTotalCart] = useState();
    const { user } = useContext(AuthContext);
    console.log(user);

    fetch('http://localhost:3000/totalGallery2')
        .then(res => res.json())
        .then(data => setTotalCart(data.totalGallery))

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/cart'><FaCartPlus></FaCartPlus><sup>{totalCart}</sup></Link></li>
                        <li><Link to='/event'>Event</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl w-[200px]"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-end">
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/cart'><FaCartPlus className='text-2xl text-info'></FaCartPlus><sup className='text-red-500 font-bold text-[14px]'>{totalCart}</sup></Link></li>
                        <li><Link to='/event'>Event</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                {user ?
                    <span>{user.displayName}<Link to='/login'><button className="btn btn-info me-3 w-[100px]">Logout</button></Link></span> :
                    <Link to='/login'><button className="btn btn-info me-3 w-[100px]">Login</button></Link>
                }
                <Link><button className="btn btn-neutral w-[100px]">Admin</button></Link>
            </div>
        </div>
    );
};

export default Navbar;