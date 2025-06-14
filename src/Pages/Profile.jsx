import React from 'react';
import { use } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import AddedGraphView from '../Component/AddedGraph/AddedGraphView';


const Profile = () => {
    const { user, loading, } = use(AuthContext);
    const [dataa, setData] = useState([]);
    const [fantacy, setFantacy] = useState([]);
    const [history, setHistory] = useState([]);
    const [poetry, setPoetry] = useState([]);







    useEffect(() => {


         document.title = `${import.meta.env.VITE_site_name} | Profile`

        const token = user?.accessToken;

        // axios.get(`${import.meta.env.VITE_ApiCall}/books`).then(res => {

        //     setDisplay(res.data);
        // }).catch(error => {
        //     toast.error(error.massage);
        // })

        axios.get(`${import.meta.env.VITE_ApiCall}/filtered?catagories=${encodeURIComponent('Fantasy')}&emailParams=${encodeURIComponent(user.email)}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {

            setFantacy(res.data);
        }).catch(error => {
            toast.error(error.massage);
        })

        axios.get(`${import.meta.env.VITE_ApiCall}/filtered?catagories=${encodeURIComponent('Fiction')}&emailParams=${encodeURIComponent(user.email)}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {

            setData(res.data);
        }).catch(error => {
            toast.error(error.massage);
        })

        axios.get(`${import.meta.env.VITE_ApiCall}/filtered?catagories=${encodeURIComponent('History')}&emailParams=${encodeURIComponent(user.email)}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {

            setHistory(res.data);
        }).catch(error => {
            toast.error(error.massage);
        })

        axios.get(`${import.meta.env.VITE_ApiCall}/filtered?catagories=${encodeURIComponent('Poetry')}&emailParams=${encodeURIComponent(user.email)}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {

            setPoetry(res.data);
        }).catch(error => {
            toast.error(error.massage);
        })




    }, [user])


    if (loading) {

        return <Loader></Loader>
    }
    return (
        <>
            <div className='w-11/12 md:w-10/12 mx-auto py-6 '>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>

                    {/* ------------left side ----------------- */}

                    <div className=" py-10 rounded-2xl text-center shadow-2xl">

                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-24 h-24 rounded-full ring-2 ring-offset-2">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <div className='mt-6 space-y-3'>
                            <h1 className='text-xl font-bold'>Email: {user.email} </h1>
                            <p className='text-xl font-bold'>Name: {user.displayName}</p>
                        </div>
                    </div>

                    {/* ------------right side ----------------- */}

                    <div className="profileDetails lg:col-span-3 py-10 rounded-2xl shadow-2xl px-5 md:px-10">
                        {/* ------------------ summary of added book by catagory ---------------- */}
                        <div>
                            <h1 className='font-bold uppercase mb-6 text-2xl'>summary of added book :</h1>
                            <hr className='border-t-1 border-dashed mb-3.5' />
                            <div className='grid grid-cols-1 md:grid-cols-5 gap-3'>
                                <div className='flex flex-row md:flex-col justify-between border-b-2 md:border-b-0'>
                                    <div className='uppercase font-bold italic'>category</div>
                                    <div className='uppercase font-bold italic'>added Book </div>
                                </div>

                                <div className='flex flex-row md:flex-col justify-between'>
                                    <div className='uppercase font-bold italic'>Fantacy</div>
                                    <div><p className='text-xl'>{fantacy.length}</p></div>
                                </div>

                                <div className='flex flex-row md:flex-col justify-between'>
                                    <div className='uppercase font-bold italic'>Fiction</div>
                                    <div><p className='text-xl'>{dataa?.length}</p></div>
                                </div>

                                <div className='flex flex-row md:flex-col justify-between'>
                                    <div className='uppercase font-bold italic'>history</div>
                                    <div><p className='text-xl'>{history.length}</p></div>
                                </div>

                                <div className='flex flex-row md:flex-col justify-between'>
                                    <div className='uppercase font-bold italic'>poetry</div>
                                    <div><p className='text-xl'>{poetry.length}</p></div>
                                </div>

                            </div>
                        </div>



                        {/* Graphical view of added book */}

                        <div className='mt-10'>
                            <h1 className='font-bold uppercase mb-6 text-2xl'>Graphical view of added book :</h1>
                            <hr className='border-t-1 border-dashed mb-3.5' />


                            {/* {
                                displays?.map(display=><AddedGraphView key={display._id} display={display}></AddedGraphView>)
                            } */}
                            <AddedGraphView fantacy={fantacy} poetry={poetry}history={history} dataa={dataa} ></AddedGraphView>

                        </div>



                    </div>
                </div>

            </div>
        </>
    );
};

export default Profile;