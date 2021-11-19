import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './PhotoSlider.module.css';

export default function PhotoSlider() {
  const images = [
    { src: 'https://n1s1.elle.ru/35/b8/55/35b8559602ac5d8c6bc92edc1b3e0258/400x266_1_8b9c2d37da8264afdde48005d01561a8@940x626_0xc35dbb80_1647494901513177195.jpeg' },
    { src: 'https://hotels.sletat.ru/i/f/104248_4.jpg' },
    { src: 'https://avatars.mds.yandex.net/get-zen_doc/4453741/pub_60b9e1bf61893124cb2ff993_60b9e794931ee526e130c8f7/scale_1200' },
  ];

  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    focusOnSelect: true,
    autoplaySpeed: 2000,
    // тут нужно будет прописать код этих точек в css
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {images.map((img) => (
          <div>
            <img src={img.src} alt='hotel' />
          </div>
        ))}
      </Slider>
    </div>
  );
}
