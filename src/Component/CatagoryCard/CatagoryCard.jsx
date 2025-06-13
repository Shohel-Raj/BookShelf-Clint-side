import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router';




const CatagoryCard = ({ data }) => {
    const { imgUrl, name } = data;
    const navigation = useNavigate();


    const viewCatagory = () => {

        navigation('/allbook')
    }

    return (
        <motion.div
            whileHover='hover'
            data-aos="zoom-out-left"
            data-aos-duration="1000"
            className='h-60 overflow-hidden rounded relative shadow-md cursor-pointer'
            onClick={viewCatagory}
        >
            {/* Image */}
            <motion.img
                variants={{
                    hover: { scale: 1.1 }, // scale on hover
                    initial: { scale: 1 },
                    
                }}
                transition={{ duration: 1 }}
                className='w-full h-full object-cover' src={imgUrl} alt={name} />

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">

                <motion.h1
                    variants={{
                        hover: { scale: 1.5, y: -10, x: 70 }, // scale on hover
                        initial: { y: 70, x: 0 },
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}

                    className='text-xl font-semibold text-white'>{name}</motion.h1>
                <motion.p
                    variants={{
                        hover: { scale: 1.5, x: 70 }, // scale on hover
                        initial: { scale: 0, x: 0 },
                    }}
                    className='text-sm text-gray-200 '>View All →</motion.p>

            </div>
        </motion.div>
    );
};

export default CatagoryCard;