"use client"; // This is a client component 👈🏽
import React from 'react' 
import { Col, Container, Row } from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';

import Header from '../components/Header'
import Footer from '../components/Footer';
import Styles from './Contact.module.css'

import MapImage from '../images/bg-03.png'
import SendIcon from '../images/bg-04.png'
import Building from '../images/001.png'
import Call from '../images/call.png'
import Sms from '../images/sms.png'
import Location from '../images/i-04.png'
import Address from '../images/i-05.png'
import ScrollToTop from '../components/ScrollToTop';
import { useTranslation } from "react-i18next";

function Contact() {
    const { t } = useTranslation();
    async function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        try {
            const response = await fetch('/api/contact', {
                method: 'post',
                body: new URLSearchParams(data),
            });
            if (!response.ok) {
                throw new Error(`Invalid response: ${response.status}`);
            }
            alert('Thanks for contacting us, we will get back to you soon!');
        } catch (err) {
            console.error(err);
            alert("We can't submit the form, try again later?");
        }
    }
    return (
        <>

            <Header type="Contact" />

            <div className={Styles.FormWrap}>
                <Container>
                    <Row>
                        <Col md={4}>
                            <h3>{t("Send Us a Message")}</h3>

                            <div className="text-end" style={{ paddingRight: 15 }}>
                                <Image src={SendIcon} alt='Metaport' />
                            </div>
                        </Col>

                        <Col md={8}>
                            <form onSubmit={handleSubmit}>
                                <Row className='mb-3'>
                                    <Col md={6} className='form-group'>
                                        <label htmlFor="name">{t("Your Name")}</label>
                                        <input type="text" name='name' className='form-control' placeholder='ie; John Doe' />
                                    </Col>
                                    <Col md={6} className='form-group'>
                                        <label htmlFor="phone">{t("Your Phone")}</label>
                                        <input type="text" name='phone' className='form-control' placeholder='XXXX' />
                                    </Col>
                                </Row>
                                <Row className='mb-3'>
                                    <Col md={12} className='form-group'>
                                        <label htmlFor="email">{t("Your Email")}</label>
                                        <input type="email" name='email' className='form-control' placeholder='ie; johndoe@email.com' />
                                    </Col>
                                </Row>
                                <Row className='mb-3'>
                                    <Col md={12} className='form-group'>
                                        <label htmlFor="message">{t("Your Message")}</label>
                                        <textarea name="message" className='form-control' placeholder='Write you message'></textarea>
                                    </Col>
                                </Row>

                                <button type='submit' className='c-button fillBtn w-100'>{t("Send")}</button>
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
                            <p>{t("Headquaters")}</p>
                        </Col>
                        <Col md={4}>
                            <div className={Styles.addressInfo}>
                                <Image src={Location} alt='UAE Dubai' width={84} height={84} className={Styles.Icon} />

                                <p>{t("Office 903, Grovenor Business Tower, Barsha Height (Tecom), Dubai")}</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Styles.addressInfo}>
                                <Image src={Address} alt='UAE Dubai' width={84} height={84} className={Styles.Icon} />

                                <p><Image src={Call} alt='UAE Dubai' /> +971 55 1345683</p>
                                <p><Image src={Sms} alt='UAE Dubai' /> info@metaport.com</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className={`${Styles.mapWrap}`}>
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