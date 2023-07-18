"use client"; // This is a client component 👈🏽
import React from 'react' 
import { Col, Container, Row } from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';

import Header from '../components/Header'
import Footer from '../components/Footer';
import Styles from './Contact.module.css'

import MapImage from '@/app/images/bg-03.png'
import SendIcon from '@/app/images/bg-04.png'
import Building from '@/app/images/001.png'
import Call from '@/app/images/call.png'
import Sms from '@/app/images/sms.png'
import Location from '@/app/images/i-04.png'
import Address from '@/app/images/i-05.png'

function Contact() {
    return (
        <>
            <Header type="Single"/> 

            <div className={Styles.FormWrap}>
                <Container>
                    <Row>
                        <Col md={4}>
                            <h3>Send Us a Message</h3>

                            <div className="text-end" style={{paddingRight: 15}}>
                                <Image src={SendIcon} alt='Metaport' /> 
                            </div>
                        </Col>

                        <Col md={8}>
                            <form action="#">
                                <Row className='mb-3'>
                                    <Col md={6} className='form-group'>
                                        <label htmlFor="name">Your Name</label>
                                        <input type="text" name='name' className='form-control' placeholder='ie; John Doe' />
                                    </Col>
                                    <Col md={6} className='form-group'>
                                        <label htmlFor="phone">Your Phone</label>
                                        <input type="text" name='phone' className='form-control' placeholder='XXXX' />
                                    </Col>
                                </Row>
                                <Row className='mb-3'>
                                    <Col md={12} className='form-group'>
                                        <label htmlFor="email">Your Email</label>
                                        <input type="email" name='email' className='form-control' placeholder='ie; johndoe@email.com' />
                                    </Col>
                                </Row>
                                <Row className='mb-3'>
                                    <Col md={12} className='form-group'>
                                        <label htmlFor="message">Your Message</label>                                        
                                        <textarea name="message" className='form-control' placeholder='Write you message'></textarea>
                                    </Col>
                                </Row>  

                                <button type='submit' className='c-button fillBtn w-100'>Send</button>
                            </form>                         
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className={Styles.AddressWrap}>
                <Container>
                    <Row className={Styles.FlexRow}>
                        <Col md={4} className={`${Styles.InfoWidget} text-center InfoWidget`}>
                            <Image src={Building} alt='UAE Dubai' />
                            <h4>UAE - DUBAI</h4>
                            <p>Headquaters</p>
                        </Col>
                        <Col md={4}>
                            <div className={Styles.addressInfo}>
                                <Image src={Location} alt='UAE Dubai' width={84} height={84} className={Styles.Icon}/>

                                <p>Office 903, Grovenor Business Tower, Barsha Height (Tecom), Dubai</p>
                            </div>                            
                        </Col>
                        <Col md={4}>
                            <div className={Styles.addressInfo}>
                                <Image src={Address} alt='UAE Dubai' width={84} height={84} className={Styles.Icon}/>

                                <p><Image src={Call} alt='UAE Dubai' /> +971 55 1345683</p>
                                <p><Image src={Sms} alt='UAE Dubai' /> info@metaport.com</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            
            <div  className={`${Styles.mapWrap}`}>
                <Container> 
                    <Row>
                        <Col md={12}> 
                            <Image src={MapImage} alt='Map' />
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />

        </>
    )
}

export default Contact