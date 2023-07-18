import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Image from 'next/image';

import email from '../images/i-01.png'
import call from '../images/i-02.png'
import notification from '../images/i-03.png'
import Logo from '../images/logo.svg'

function Footer() {
    return (
        <>
            <div className="InfoWrap">
                <Container>
                    <Row>
                        <Col md={12}>
                            <h2>Build, Innovate, Unleash with Metaport</h2>

                            <a href="#" className='c-button fillBtn'>Contact Team</a>
                        </Col>
                    </Row>
                </Container>
            </div>

            <footer className='footerWrap'>
                <Container>
                    <Row>
                        <Col md={3}>
                            <div className="widget">
                                
                                <Image src={Logo} alt="Metaport" className='fLogo' style={{width: 209, height: 'auto'}} priority={true} /> 

                                <p>Unleashing the boundless potential for global industries, pursuing excellence with brilliant minds and building powerful tools.</p>

                                <ul className='socialMedia'>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-discord"></i></a></li>
                                </ul>
                            </div>
                        </Col>

                        <Col md={3}>
                            <div className="widget" style={{paddingLeft: 60}}>
                                <h3>Services</h3>

                                <ul>
                                    <li><a href="#">Blockchain + Web3</a></li>
                                    <li><a href="#">AR & VR</a></li>
                                    <li><a href="#">App Development</a></li>
                                    <li><a href="#">Web Development</a></li>
                                    <li><a href="#">UI/UX Design</a></li>
                                </ul>
                            </div>
                        </Col>
                        
                        <Col md={3}>
                            <div className="widget"  style={{paddingLeft: 40}}>
                                <h3>Join us</h3>

                                <ul>
                                    <li><a href="#">Career</a></li>
                                    <li><a href="#">Partners</a></li> 
                                </ul>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="widget">
                                <h3>Business Inquiry</h3>

                                <div className="inquiry">
                                    {/* <img src={email} alt="" /> */}
                                    <Image src={email} alt="Email" />

                                    <div>
                                        <h5>Email</h5>
                                        <p>business@metaport.com</p>
                                    </div>                                
                                </div>
                                <div className="inquiry">                                    
                                    <Image src={call} alt="Call"/>

                                    <div>
                                        <h5>Phone</h5>
                                        <p>+96 6544 54778</p>
                                    </div> 

                                </div>
                                <div className="inquiry">                                    
                                    <Image src={notification} alt="Notification"/>
                                    <div>
                                        <h5>Location</h5>
                                        <p>Sheikh Mohammed Bin Rashed Boulevard Downtown Dubai, PO Box 123234 Dubai, UAE</p>
                                    </div>                                
                                </div>
                            </div>
                        </Col>

                    </Row>

                    <Row>
                        <hr />
                        <Col md={6}>
                            <p className='copyright'>&copy;2023 <a href="#">metaport</a> Information Technology LLC.</p>
                        </Col>
                        <Col md={6} className='text-end'>
                            <ul className='footerMenu'>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>                        
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
        
    )
}

export default Footer;