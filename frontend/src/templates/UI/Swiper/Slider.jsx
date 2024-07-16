import React from 'react';
import cl from './Slider.module.css'
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card/Card';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const Slider = () => {
    return (
        <div className={cl.container}>
            <Swiper
                effect={'coverflow'}
                centeredSlides={true}
                loop={true}
                slidesPerView={ 'auto' }
                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }
                }
                className={cl.swiper_container}
            >
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;