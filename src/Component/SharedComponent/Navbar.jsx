import React, { use, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import { toast } from 'react-toastify';
import { FaArrowRightToBracket, FaRightFromBracket } from 'react-icons/fa6';
import img from '/book.png'

const Navbar = () => {
    const { user, signOutUser } = use(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigate =useNavigate();


    const handleBTN=()=>{
        navigate('/')
    }

    const handleLogout = () => {
        signOutUser()
            .then(() => {
                toast.warn('LogOut, Login for Better Experience');
            })
            .catch((error) => {
                toast.error('Something went wrong', error.code);
            });
    };

    const links = (
        <>
            <li>
                <NavLink to="/" className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/allbook" className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'} onClick={() => setIsMenuOpen(false)}>Bookshelf</NavLink>
            </li>
           {
            user && <>
             <li>
                <NavLink to="/mybook" className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'} onClick={() => setIsMenuOpen(false)}>My Books</NavLink>
            </li>
            <li>
                <NavLink to="/addbook" className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'} onClick={() => setIsMenuOpen(false)}> Add Book</NavLink>
            </li>
            <li>
                <NavLink to="/profile" className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'} onClick={() => setIsMenuOpen(false)}>Profile </NavLink>
            </li>
            </>
           }
            <li>
                <NavLink to="/About" className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'} onClick={() => setIsMenuOpen(false)}>About </NavLink>
            </li>
            <li>
                <NavLink to="/Contact" className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'} onClick={() => setIsMenuOpen(false)}>Contact Us </NavLink>
            </li>
        </>
    );

    return (
        <>
            <div className="navbar px-0 w-11/12 md:w-10/12 mx-auto">
                <div className="navbar-start">
                    <div onClick={handleBTN} className="btn btn-ghost px-0 text-xl font-bold fontLogo items-center justify-center"><img className='w-[30px]' src={img} /><h1 className='pt-2'>{import.meta.env.VITE_site_name}</h1></div>

                </div>

                {/* Desktop menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>

                {/* Mobile hamburger button */}
                <div className="navbar-end md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="btn btn-square btn-ghost"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-5 w-5 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* Desktop login/logout */}
                <div className="hidden md:flex navbar-end gap-2">
                    {user ? (
                        <button
                            onClick={handleLogout}
                            className="btn bg-[#34eb74] text-white hover:bg-[#97f7b9] hover:text-black"
                        >
                            Logout  <FaRightFromBracket />

                        </button>
                    ) : (
                        <Link
                            to="/loginSignInPage"
                            className="btn bg-[#34eb74] text-white hover:bg-[#97f7b9] hover:text-black"
                        >
                            Login <FaArrowRightToBracket />
                        </Link>
                    )}
                </div>

                {/* Fullscreen mobile menu */}
                {isMenuOpen && (
                    <div className="fixed inset-0 z-50 bg-base-100 md:hidden">
                        <div className="p-4 flex justify-between items-center border-b shadow-sm">
                            <span className="text-xl font-bold flex justify-center items-center"><img className='w-[35px] mr-1' src={img} />{import.meta.env.VITE_site_name}</span>
                            <button
                                className="btn btn-sm btn-ghost text-2xl"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                ✕
                            </button>
                        </div>

                        <ul className="menu  p-4 space-y-2">{links}</ul>

                        <div className="p-4">
                            {user ? (
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        setIsMenuOpen(false);
                                    }}
                                    className="btn w-full bg-[#34eb74] text-white hover:bg-[#97f7b9] hover:text-black"
                                >
                                    Logout
                                </button>
                            ) : (
                                <Link
                                    to="/loginSignInPage"
                                    className="btn w-full bg-[#34eb74] text-white hover:bg-[#97f7b9] hover:text-black"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>

    );
};

export default Navbar;
