"use client";
import React from 'react' 
import { Col, Container, Row } from 'reactstrap'; 
import Image from 'next/image';
import Link from 'next/link';

import Header from '../components/Header'
import Footer from '../components/Footer';
import Styles from './About.module.css'

import { useTranslation } from "react-i18next";

function About() {
    const { t } = useTranslation();
    return (
        <>
            <Header type="About" />

            <div className={Styles.FormWrap}>
                <Container>
                    <Row>
                        <Col md={4} className='mb-4'>
                            <h3>{t("Our Values")}</h3>

                            <p>{t("In a word where the ordinary becomes obsolete, we dare to be extraordinary. We dare to embrace the pulse of modern age with our game-changing ideas where innovation knows no boundaries.")}</p>

                            <Link href={'/contact'} className='c-button fillBtn'>{t("Contact Team")}</Link>
                        </Col>

                        <Col md={4}>
                            <div className={Styles.valuesWrap}>
                                <div className={Styles.IconImage}>
                                    <Image src="/images/i-06.png" width={56} height={86} alt="Icon" />
                                </div>
                                <h2>{t("Radical")} <br />{t("Integrity")}</h2>
                            </div>

                            <div className={Styles.valuesWrap}>
                                <div className={Styles.IconImage}>
                                    <Image src="/images/i-06.png" width={56} height={86} alt="Icon" />
                                </div>
                                <h2>{t("Fearless")} <br />{t("Transparency")}</h2>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className={Styles.valuesWrap}>
                                <div className={Styles.IconImage}>
                                    <Image src="/images/i-06.png" width={56} height={86} alt="Icon" />
                                </div>
                                <h2>{t("Dynamic")} <br />{t("Innovation")}</h2>
                            </div>

                            <div className={Styles.valuesWrap}>
                                <div className={Styles.IconImage}>
                                    <Image src="/images/i-06.png" width={56} height={86} alt="Icon" />
                                </div>
                                <h2>{t("Bold")} <br />{("Perfection")}</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className={Styles.AboutContent}>
                <Container>
                    <Row className={Styles.FlexRow}>
                        <Col md={6}>
                            <h2>{t("Who are we")}</h2>

                            <p>{t("We are a team of relentless dreamers, trailblazers, and visionary thinkers. Innovation is not just a buzzword for us - it is ingrained in our DNA. We combine cutting-edge technology with refined craftsmanship to deliver solutions that transcend expectations. We believe that the best ideas emerge when diverse minds come together in a harmonious symphony of creativity.")}</p>
                        </Col>
                        <Col md={6}>
                            <h2>{t("What we do")}</h2>

                            <p>{t("Our areas of expertise span a wide range of domains, including software development, digital strategy, user experience design, and emerging technologies. Our team of brilliant minds combines cutting-edge technologies with visionary thinking to weave magic into every line of code and every pixel of design. We don't just work for our clients; we work with them.")}</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className={`${Styles.CEOText}`}>
                <Container>
                    <Row className={Styles.FlexRow}>
                        <Col md={4}>
                            <Image src="/images/ceo.png" width={369} height={512} className={Styles.CeoImage} alt='M A B Siddique' />
                        </Col>

                        <Col md={8}>
                            <Image src="/images/i-07.png" width={63} height={44} className={Styles.Blockquote} alt='M A B Siddique' />
                            <h3>{t("We never falter; we rise stronger from every challenge. Our focus is solely on the pursuit of success and we make it happen.")}</h3>

                            <h5>M A B Siddique</h5>
                            <p>{t("CEO & Founder")}</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer type="About" />

        </>
    )
}

export default About