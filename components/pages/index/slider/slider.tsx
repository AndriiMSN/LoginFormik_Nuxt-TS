// Core
import {useEffect, memo, FC} from 'react';
import {SwiperSlider} from "./swiper";
import clsx from "clsx";
// Styles
import styles from './slider.module.sass';

export const Slider: FC = memo(() => {
    const slides = [
        {
            img: {
                src: '/images/slider/slide1.png',
                width: 584,
                height: 410
            },
            mainText: 'Mass likes and subscriptions -the most profitable way attracting subscribers and сustomers.',
            subText: 'Start getting massive engagement from real people on Dribble with the best in class grows automation tools'
        },
        {
            img: {
                src: '/images/slider/slide2.png',
                width: 350,
                height: 350
            },
            mainText: 'Mass likes and subscriptions -the most profitable way attracting subscribers and сustomers.',
            subText: 'Start getting massive engagement from real people on Dribble with the best in class grows automation tools'
        },
    ]
    return (
        <div className={clsx(styles.slider, 'login-slider')}>
            <SwiperSlider slides={slides}/>
        </div>
    );
})
