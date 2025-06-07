import React, { use, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import EmptyMyBook from '../Component/EmptyMyBook';

const MyBook = () => {
      const { user, loading, } = use(AuthContext);
        const [dataa, setData] = useState([]);
        const navigate = useNavigate();

        useEffect(() => {
        
        
                document.title = `${import.meta.env.VITE_site_name} | My Book`
        
                // fetch(`https://localhost/plant?emailParams=${user.email}`).then(res => res.json()).then(data => {
                    // setData(data);
                // })
            }, [user])

    
    
        if (loading) {
    
            return <Loader></Loader>
        }
    
        const handleDelet = (id) => {
            console.log(id);
            
    
        }
    
        const handleViewDetaills = (id) => {
    
            navigate(`/bookdetails/${id}`)
        }
        const handleUpdate =(id)=>{
            navigate(`/updatebook/${id}`)
        }
    
    
    return (
        <div className="w-11/12 min-h-[calc(100vh-150px)] md:w-10/12 mx-auto">

                <div>
                    {
                        dataa.length ? <div>
                            <div className='my-4'>
                                <h1 className='font-bold text-2xl'>Your Plant Parade</h1>
                                <p className='md:w-2/5 italic mt-3'>All the leafy legends you’ve adopted gather here—check in to water, feed, and cheer on every new sprout in your personal jungle!</p>
                            </div>
                            <table className="table overflow-x-auto">
                                {/* head */}
                                <thead>
                                    <tr>

                                        <th>Sl</th>
                                        <th>Name</th>
                                        <th className='hidden md:flex'>Watering Frequency/Care Level </th>
                                        <th>Health Status</th>
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
                                                                    src={singledata.image}
                                                                    alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{singledata.plantName}</div>
                                                            <div className="text-sm opacity-50">{singledata.category}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='hidden md:flex'>
                                                    {singledata.wateringFrequency}
                                                    <br />
                                                    <span className="badge badge-ghost badge-sm">{singledata.careLevel}</span>
                                                </td>
                                                <td>{singledata.healthStatus}</td>
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