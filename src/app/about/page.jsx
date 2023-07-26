"use client";
import React from 'react' 
import { Col, Container, Row } from 'reactstrap'; 
import Image from 'next/image';
import Link from 'next/link';

import Header from '../components/Header'
import Footer from '../components/Footer';
import Styles from './About.module.css'

import CEOImage from '@/app/images/004.png'
import ValIcon from '@/app/images/i-06.png'
import Blockquote from '@/app/images/i-07.png'

function About() {
    return (
        <>
            <Header type="About"/> 

            <div className={Styles.FormWrap}>
                <Container>
                    <Row>
                        <Col md={4} className='mb-4'>
                            <h3>Our Values</h3>

                            <p>In a word where the ordinary becomes obsolete, we dare to be extraordinary. We dare to embrace the pulse of modern age with our game-changing ideas where innovation knows no boundaries.</p>
                            
                            <Link href={'/contact'} className='c-button fillBtn'>Contact Team</Link>
                        </Col>

                        <Col md={4}>
                            <div className={Styles.valuesWrap}>
                                <div className={Styles.IconImage}>
                                    <Image src={ValIcon} alt="Icon"/>
                                </div>
                                <h2>Radical <br />Integrity</h2>                                
                            </div>

                            <div className={Styles.valuesWrap}>
                                <div className={Styles.IconImage}>
                                    <Image src={ValIcon} alt="Icon"/>
                                </div>
                                <h2>Fearless <br />Transparency</h2>                                
                            </div>                       
                        </Col>                         

                        <Col md={4}>
                            <div className={Styles.valuesWrap}>
                                <div className={Styles.IconImage}>
                                    <Image src={ValIcon} alt="Icon"/>
                                </div>
                                <h2>Dynamic <br />Innovation</h2>                                
                            </div>

                            <div className={Styles.valuesWrap}>
                                <div className={Styles.IconImage}>
                                    <Image src={ValIcon} alt="Icon"/>
                                </div>
                                <h2>Bold <br />Perfection</h2>                                
                            </div>                       
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className={Styles.AboutContent}>
                <Container>
                    <Row className={Styles.FlexRow}>
                        <Col md={6}>
                           <h2>Who are we</h2>

                           <p>We are a team of relentless dreamers, trailblazers, and visionary thinkers. Innovation is not just a buzzword for us - it is ingrained in our DNA. We combine cutting-edge technology with refined craftsmanship to deliver solutions that transcend expectations. We believe that the best ideas emerge when diverse minds come together in a harmonious symphony of creativity.</p>
                        </Col>
                        <Col md={6}>
                           <h2>Who are we</h2>

                           <p>We are a team of relentless dreamers, trailblazers, and visionary thinkers. Innovation is not just a buzzword for us - it is ingrained in our DNA. We combine cutting-edge technology with refined craftsmanship to deliver solutions that transcend expectations. We believe that the best ideas emerge when diverse minds come together in a harmonious symphony of creativity.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            
            <div  className={`${Styles.CEOText}`}>
                <Container> 
                    <Row className={Styles.FlexRow}>
                        <Col md={4}> 
                            <Image src={CEOImage} className={Styles.CeoImage} alt='M A B Siddique' />
                        </Col>

                        <Col md={8}>
                            <Image src={Blockquote} className={Styles.Blockquote} alt='M A B Siddique' />
                            <h3>We never falter; we rise stronger from every challenge. Our focus is solely on the pursuit of success and we make it happen.</h3>

                            <h5>M A B Siddique</h5>
                            <p>CEO & Founder</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />

        </>
    )
}

export default About