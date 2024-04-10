import React from 'react'
import './slider.css'
import {Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {SliderProducts} from '../../data/products'

const Slider = () => {
  return (
    <div className="s-container">
         <Swiper className="myswiper"
        slidesPerView={2}
        navigation={true}
        pagination={{ clickable: true }}
        loopFillGroupWithBlank={true}
      spaceBetween={40}
      slidesPerGroup={1}
      loop={true}
      modules={[Navigation]}
    >
        {SliderProducts.map((slide,i)=>(
            <SwiperSlide>
                <div className="left-s">
                    <div className="name">
                        <span>
                            {slide.name}
                        </span>
                        <span>{slide.detail}</span>

                    </div>
                    <span>{slide.price}$</span>
                    <div>Shop Now</div>
                </div>
                <img src={slide.img} className="img-p" alt="" />
                </SwiperSlide>
        ))}

    </Swiper>
    </div>
  )
}

export default Slider