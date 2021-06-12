// Core
import {FC} from "react";
import SwiperCore, {Pagination, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Slide} from "./slide";

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

// Interfaces
interface Props {
    slides: Array<{
        img: {
            src: string,
            width: number,
            height: number
        },
        mainText: string,
        subText: string
    }>
}

export const SwiperSlider: FC<Props> = ({slides}) => {
    return (
        <Swiper
            autoplay={{delay: 3000, disableOnInteraction: false}}
            resizeObserver={true}
            speed={1000}
            loop={true}
            fadeEffect={{crossFade: true}}
            updateOnWindowResize={true}
            slidesPerView={1}
            pagination={{clickable: true}}
        >
            {slides.map((el, i) => (
                <SwiperSlide key={i}>
                    <Slide img={el.img} mainText={el.mainText} subText={el.subText} index={i}/>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
