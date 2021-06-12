// Core
import React from "react";
import Image from "next/image";
import clsx from "clsx";
// Styles
import styles from './slide.module.sass'

// Interfaces
interface Props {
    img: {
        src: string,
        width: number,
        height: number
    },
    mainText: string,
    subText: string,
    index: number
}

export const Slide: React.FC<Props> = ({img, mainText, subText, index}) => {

    return (
        <div className={styles.slide}>
            <div className={styles.content}>
                <div
                    className={clsx(styles['image-wrapper'], styles['slide-' + index + '-img'])}>
                    {/*<img src={img.src} alt=""/>*/}
                    <Image
                        loading={'eager'}
                        className={styles.img}
                        src={img.src}
                        width={img.width} height={img.height}/>
                </div>
                <div className={clsx('p-rel', styles.text)}>
                    <p className='t-xs bold mb-12'>{mainText}</p>
                    <p className='op-6 large'>{subText}</p>
                </div>
            </div>
        </div>
    )
}

