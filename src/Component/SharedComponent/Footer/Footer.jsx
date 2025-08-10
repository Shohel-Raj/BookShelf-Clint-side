import React, { use } from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaInstagram, FaPhoneSquareAlt } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router';
import img from '/book.png'
import { AuthContext } from '../../../Contexts/AuthContext';


const Footer = () => {
        const { user } = use(AuthContext);
    
    const links = (
            <>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/allbook" className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'}>Bookshelf</NavLink>
                </li>
               {
                user && <>
                 <li>
                    <NavLink to="/mybook" className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'}>My Books</NavLink>
                </li>
                <li>
                    <NavLink to="/addbook" className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'}> Add Book</NavLink>
                </li>
                <li>
                    <NavLink to="/profile" className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'}>Profile </NavLink>
                </li>
                </>
               }
                <li>
                    <NavLink to="/About" className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'}>About </NavLink>
                </li>
                <li>
                    <NavLink to="/Contact" className={({ isActive }) => isActive ? 'font-bold border-b-2 uppercase' : 'uppercase'} >Contact Us </NavLink>
                </li>
            </>
        );


    const navigate =useNavigate();


    const handleBTN=()=>{
        navigate('/')
    }


    return (
        <div >
            <footer className="px-4 py-8 w-11/12 md:w-10/12 mx-auto ">


                <div className='flex justify-between gap-3 md:flex-row flex-col'>

                    <div >
                        <div onClick={handleBTN} className=' btn btn-ghost p-0 mx-0'>
                            {/* <img className='w-10' src={img} /> */}
                            <div className=" uppercase font-extrabold italic p-0 flex justify-center text-center items-center"><img className='w-[35px] mr-1.5' src={img} /><h1 className='pt-2 text-2xl '>{import.meta.env.VITE_site_name}</h1></div>
                        </div>
                        <p className='small italic'>Nurturing Readers, One Book at a Time.</p>
                    </div>
                    
                    <div className='mr-0'>

                        <h1 className='font-bold text-2xl mb-2'>Useful Links</h1>

                        <ul className="flex flex-col space-y-1.5">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className='mr-0'>

                        <h1 className='font-bold text-2xl mb-2'>Contact Us</h1>

                        <ul className="flex flex-col space-y-1.5">
                            <li >
                                <a className='hover:text-[#82dda2] flex gap-2 text-center' ><FaPhoneSquareAlt size={20} className='hover:scale-125' /> <span>01963687341</span></a>
                            </li>
                            <li>
                                <a className='hover:text-[#82dda2] flex gap-2' ><MdEmail size={20} className='hover:scale-125' /> shohelraj8778@gmail.com </a>
                            </li>
                            <li>
                                <a className='hover:text-[#82dda2]  flex gap-2' ><FaLocationDot size={20} className='hover:scale-125' /> Cox's Bazar,Sadar Bangadesh</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className='font-bold text-2xl mb-2'>Social Contact</p>
                        <ul className="flex flex-wrap  space-x-4 sm:space-x-8">

                             <li>
                                <a className='hover:text-[#97f7b9] ' href="https://www.instagram.com/mohammed_shohel_raj/" target='_blank'><FaInstagram size={25} className='hover:scale-125' /></a>
                            </li>
                            <li>
                                <a className='hover:text-[#97f7b9] ' href="https://facebook.com/mohammedshohel.bd" target='_blank' ><FaFacebookSquare size={25} className='hover:scale-125' /> </a>
                            </li>
                            <li>
                                <a className='hover:text-[#97f7b9] ' href="https://linkedin.com/in/mohammedshohel87" target='_blank' ><FaLinkedin size={25} className='hover:scale-125' /></a>
                            </li>
                            <li>
                                <a className='hover:text-[#97f7b9] ' href="https://github.com/Shohel-Raj/" target='_blank' ><FaGithub size={25} className='hover:scale-125' /></a>
                            </li>
                        </ul>
                    </div>
                </div>


            </footer>
        </div>
    );
};

export default Footer;