// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation ,EffectCreative} from 'swiper/modules';
import Slider1 from './Slider1';
import Slider2 from './Slider2';
import Slider3 from './Slider3';

const Slider = () => {
  return (
    <>
      <div className='mt-3 w-11/12 rounded-3xl md:w-10/12 mx-auto' >
        <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative,Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          // modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper rounded-3xl"
        >
          <SwiperSlide>
            <Slider1></Slider1>
          </SwiperSlide>
          <SwiperSlide>
            <Slider2></Slider2>
          </SwiperSlide>
          <SwiperSlide>
          <Slider3></Slider3>
          </SwiperSlide>

        </Swiper>
      </div>
    </>
  );
};

export default Slider;