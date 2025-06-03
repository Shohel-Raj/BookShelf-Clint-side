import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {

    const links = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'}>Home</NavLink> </li>
        <li><NavLink to='/allbook' className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'}>Bookshelf</NavLink> </li>
        <li><NavLink to='/mybook' className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'}>My Books</NavLink> </li>
        <li><NavLink to='/addbook' className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'}>Add Book</NavLink> </li>
        <li><NavLink to='/profile' className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'}>Profile</NavLink> </li>

    </>

   const { user, signOutUser } = use(AuthContext)
  
  
  
      const handleLogout = () => {
          signOutUser().then(() => {
              // Sign-out successful.
              toast.warn('LogOut, Login for Better Experiance')
  
          }).catch((error) => {
              // An error happened.
              const errorCode = error.code
              toast.error('Something wrng', errorCode)
          });
      }
  

    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">

                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        <button className="btn btn-square md:hidden btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                            {
                                links
                            }
                            {
                                user ? (<button onClick={handleLogout} className="btn  bg-[#34eb74] text-white hover:bg-[#97f7b9] hover:text-black dark:bg-white">Logout</button>) : (<Link to='/loginSignInPage' className="btn  bg-[#34eb74] text-white hover:bg-[#97f7b9] hover:text-black ">Login</Link>)
                            }
                        </ul>
                    </div>
                    {
                        user ? (<button onClick={handleLogout} className="btn hidden  bg-[#34eb74] text-white hover:bg-[#97f7b9] hover:text-black md:flex">Logout</button>) : (<Link to='/loginSignInPage' className="btn hidden  bg-[#34eb74] text-white hover:bg-[#97f7b9] hover:text-black md:flex">Login</Link>)
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;