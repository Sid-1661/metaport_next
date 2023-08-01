import { useEffect, useRef, useState } from 'react';
import { Container } from 'reactstrap'

import Link from 'next/link';
import TextSlider from './TextSlider';
import AnimateButton from './AnimateButton';
import styles from './css/HeroContent.module.css'
import Icon from '@mdi/react';
import { mdiArrowDownBox } from '@mdi/js';
import { useTranslation } from "react-i18next";

function HeroContent({ interval = 3000 }) {
    const { t } = useTranslation();

    const texts = [
        { content: 'INNOVATION', color: '#FF007A' },
        { content: 'INSPIRATION', color: '#8F00FF' },
        { content: 'IMPACT', color: '#01FF89' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const colors = ['red', 'blue', 'green'];

    const timeoutRef = useRef(null);

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };


    useEffect(() => {
        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, [currentIndex]);

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setCurrentColorIndex(prevIndex => (prevIndex + 1) % colors.length);
        }, interval);

        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, [currentIndex, texts, interval]);

    const buttonColorClass = `button-color-${currentColorIndex}`;

    return (
        <div className="HeroContent">


            <Container>
                <h1>{t("Engineering")}<br /> {t("the modern age with")}</h1>

                {/* <TextSlider texts={texts} interval={2500}  />  */}
                <div className={[styles.slideshow]}>
                    {texts.map((text, index) => (
                        <h2
                            key={index}
                            className={`${styles.slide} ${index === currentIndex ? styles.active : ''
                                }`}
                            style={{ color: text.color }}
                            dangerouslySetInnerHTML={{ __html: text.content }}
                        />
                    ))}
                </div>

                <p>{t("Unleashing the boundless potential for global industries, pursuing excellence with brilliant minds and building powerful tools.")}</p>

                <div className="dFlex">

                    {/* <AnimateButton />  */}
                    <Link href={'/about'} className={`c-button ${buttonColorClass}`}> {t("About Us")}</Link>

                    <Link href={'/contact'} className='c-button whiteBtn' style={{ marginLeft: 25 }}>{t("Contact Team")}</Link>
                </div>

            </Container>
            <br />
           
                <Icon className={[styles.scrollDown]} onClick={scrollToBottom} path={mdiArrowDownBox} size={3} > Go To Bottom</Icon>
        </div>
    )
}

export default HeroContent