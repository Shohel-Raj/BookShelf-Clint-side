import React, { use, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import EmptyMyBook from '../Component/EmptyMyBook';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import Loader from '../Component/Loader/Loader';

const MyBook = () => {
    const { user, loading, } = use(AuthContext);
    const [dataa, setData] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {

        const token = user.accessToken;

        document.title = `${import.meta.env.VITE_site_name} | My Book`

        axios.get(`${import.meta.env.VITE_ApiCall}/books`, {
            params: {
                emailParams: user.email
            },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(res => {
            setData(res.data);
        }).catch(error => {
            toast.error(error.massage);
        })

        // fetch(`https://bookshelf-update-srver.vercel.app/plant?emailParams=${user.email}`).then(res => res.json()).then(data => {
        // setData(data);
        // })
    }, [user])



    if (loading) {

        return <Loader></Loader>
    }

    const handleDelet = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`${import.meta.env.VITE_ApiCall}/book/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json()).then((data => {
  

                        if (data.deletedCount) {
                            const remainigData = dataa.filter(d => d._id !== id);
                            setData(remainigData)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Plant has been deleted.",
                                icon: "success"
                            });
                        }
                    }))

            }
        });

    }

    const handleViewDetaills = (id) => {

        navigate(`/bookdetails/${id}`)
    }
    const handleUpdate = (id) => {
        navigate(`/updatebook/${id}`)
    }


    return (
        <div className="w-11/12 min-h-[calc(100vh-150px)] md:w-10/12 mx-auto">

            <div>
                {
                    dataa?.length ? <div>
                        <div className='space-y-3.5 text-center'>
                            <h1 className='font-bold text-2xl md:text-3xl uppercase italic mb-3'>Your Book Boulevard</h1>
                            <p className='md:w-3/4 mx-auto mb-3 small'>All the brilliant books you’ve discovered live here—check in to track, reflect, and celebrate every plot twist in your personal library adventure!</p>
                        </div>
                        <table className="table overflow-x-auto">
                            {/* head */}
                            <thead>
                                <tr>

                                    <th>Sl</th>
                                    <th>Name</th>
                                    <th className='hidden md:flex'>Reading Status</th>
                                    <th>Book Category</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody >
                                {/* row 1 */}
                                {
                                    dataa.map((singledata, index) =>
                                        <tr data-aos="fade-up"
                                            data-aos-duration="2000" key={singledata._id}>
                                            <th>
                                                <p>{index + 1}</p>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={singledata.cover_photo}
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">Title : {singledata.book_title}</div>
                                                        <div className="text-sm opacity-50">Author : {singledata.book_author}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='hidden md:flex'>
                                                {singledata.reading_status}

                                            </td>
                                            <td>{singledata.book_category}</td>
                                            <th >
                                                <button onClick={() => handleViewDetaills(singledata._id)} className="uppercase btn  mb-1 md:mb-0 btn-xs md:mr-1">Details</button>
                                                <button onClick={() => handleUpdate(singledata._id)} className="uppercase btn md:mr-1 mb-1 md:mb-0 btn-xs">Update</button>
                                                <button onClick={() => handleDelet(singledata._id)} className="uppercase btn btn-xs">Delete</button>
                                            </th>
                                        </tr>
                                    )
                                }



                            </tbody>

                        </table>
                    </div> : <div>
                        <EmptyMyBook></EmptyMyBook>

                    </div>
                }
            </div>


        </div>

    );
};

export default MyBook;