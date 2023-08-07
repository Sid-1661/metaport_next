"use client"; // This is a client component 👈🏽
import React from 'react' 
import { Col, Container, Row } from 'reactstrap';
import Image from 'next/image';

import Header from '../components/Header'
import Footer from '../components/Footer';
import Styles from './Contact.module.css'

import { useTranslation } from "react-i18next";

function Contact() {
    const { t } = useTranslation();
    async function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: new URLSearchParams(data),
            });
            console.log(response)
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
                                <Image src="/images/send.png" width={347} height={243} alt='Metaport' />
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
                            <Image src="/images/building.png" width={190} height={241} alt='UAE Dubai' />
                            <h4>UAE - DUBAI</h4>
                            <p>{t("Headquaters")}</p>
                        </Col>
                        <Col md={4}>
                            <div className={Styles.addressInfo}>
                                <Image src="/images/i-04.png" alt='UAE Dubai' width={84} height={84} className={Styles.Icon} />

                                <p>{t("Unit 1, Level G, Emirates Towers Boulevard, Dubai, UAE")}</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Styles.addressInfo}>
                                <Image src="/images/i-05.png" alt='UAE Dubai' width={84} height={84} className={Styles.Icon} />

                                <p><Image src="/images/call.png" width={30} height={30} alt='UAE Dubai' /> +97 154 374 5479</p>
                                <p><Image src="/images/sms.png" width={30} height={30} alt='UAE Dubai' />  info@metaports.co</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className={`${Styles.mapWrap}`}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <Image src="/images/map.png" width={1448} height={586} alt='Map' />
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer type="Contact" />
        </>
    )
}

export default Contact