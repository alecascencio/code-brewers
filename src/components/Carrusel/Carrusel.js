import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carrusel.css';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ]);
  };

  return (
    <section className='carrusel'>
      <>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper'
        >
          <SwiperSlide>
            <img
              src='/img/pixel-1.jpg'
              loading='lazy'
              alt='pixel-1'
              className='workers'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='/img/pixel-3.jpg'
              loading='lazy'
              alt='pixel-3'
              className='workers'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='/img/pixel-4.jpg'
              loading='lazy'
              alt='pixel-4'
              className='workers'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='/img/pixel-5.jpg'
              loading='lazy'
              alt='pixel-5'
              className='workers'
            />
          </SwiperSlide>
        </Swiper>
      </>
    </section>
  );
}
