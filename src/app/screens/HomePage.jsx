import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap'
import WOW from 'wowjs'; 
import Header from '../components/Header'
import Footer from '../components/Footer'

function HomePage() {

    const [isInView, setIsInView] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset || document.documentElement.scrollTop;

        if(position > 2000) { 
            setIsInView(true); 
        }else{ 
            setIsInView(false);
        }  
    };

    React.useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
    }, []);
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <>
        <Header type="Home"/>
        
        <div className="OurExpertise">
            <Container >
                <Row>
                    <Col md={12} className='text-center'>
                        <h2 className='Title wow fadeInUp' data-wow-delay="0.2s"><span>Our Expertise</span> x-factor across Industries worldwide</h2>

                        <h5 className='wow fadeInUp' data-wow-delay="0.5s">Embrace Our Expert Solutions</h5>                        
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <ul>
                            <li className='wow zoomIn' data-wow-delay="0.6s">FINANCE</li>
                            <li className='wow zoomIn' data-wow-delay="0.7s">B2B</li>
                            <li className='wow zoomIn' data-wow-delay="0.8s">Online TRADING</li>
                            <li className='wow zoomIn' data-wow-delay="0.9s">SOCIAL NETWORK</li>
                            <li className='wow zoomIn' data-wow-delay="1.0s">enterprises</li>
                            <li className='wow zoomIn' data-wow-delay="1.1s">ED-TECH</li>
                            <li className='wow zoomIn' data-wow-delay="1.2s">E-COMMERCE</li>
                            <li className='wow zoomIn' data-wow-delay="1.3s">Health-tech </li>
                            <li className='wow zoomIn' data-wow-delay="1.4s">Tourism</li>
                            <li className='wow zoomIn' data-wow-delay="1.5s">Gaming</li>
                        </ul>
                    </Col>                     
                </Row>                
            </Container>
        </div>

        <div className="ProgressWrap ">
            <Container>
                <Row>
                    <Col md={12} className='text-center'>
                        <img src="images/001.png" alt="" className='wow zoomIn' data-wow-duration="1.0s" />

                        <div className="ProgressTitle">                            
                            <img src="images/002.png" alt="" /> <br />

                            <a href="#" className='c-button fillBtn Green'>Get Started</a>
                        </div>

                        <div className="ProgressContent">
                            <ul>
                                <li className='one wow zoomInUp' data-wow-delay="0.4s">
                                    <span>Accelerate Global Reach</span>
                                </li>
                                <li className='two wow zoomInRight' data-wow-delay="0.5s">
                                    <span className=''>Empowering AI at Your Fingertips</span>
                                </li>
                                <li className='three wow zoomInLeft' data-wow-delay="0.5s">
                                    <span>Embrace the Feature of Decentralisation</span>
                                </li>
                                <li className='four wow zoomInRight' data-wow-delay="0.7s">
                                    <span>Bridging Innovation to Implementation</span>
                                </li>
                                <li className='five wow zoomInLeft' data-wow-delay="0.7s">
                                    <span>Amplifying Your Digital Presence</span>
                                </li>
                            </ul> 
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="ServiceWrap">
            <Container>
                <Row>
                    <Col md={12} style={{position: "relative"}}>                        
                        <div className="ServiceDropWrap">
                            <div className="gradientBubble big">
                                <h4>Blockchain <br />+ <br /> Web3</h4>
                            </div>
                            <div className="gradientBubble small">
                                <h4>AR & VR</h4>
                            </div>
                            <div className="gradientBubble bigger">
                                <h4>Web <br />Development</h4>
                            </div>
                            <div className="gradientBubble small">
                                <h4>SaaS</h4>
                            </div>
                            <div className="gradientBubble big">
                                <h4>App <br />Development</h4>
                            </div>                       
                            <div className="gradientBubble">
                                <h4>AI & ML</h4>
                            </div>                       
                            <div className="gradientBubble">
                                <h4>Metaverse</h4>
                            </div>
                            <div className="gradientBubble small">
                                <h4>IoT</h4>
                            </div>
                            <div className="gradientBubble small">
                                <h4>Dev Ops</h4>
                            </div>
                            <div className="gradientBubble small">
                                <h4>Fintech</h4>
                            </div>
                            <div className="gradientBubble big">
                                <h4>E-commerce</h4>
                            </div>                       
                            <div className="gradientBubble">
                                <h4>UI/UX <br /> Design</h4>
                            </div>     
                        </div>                   
                    </Col>
                </Row>
            </Container>
        </div>         

        <div className="DevelopmentProcess animated">
            <Container>
                <Row>
                    <Col md={12} className='text-center'>
                        <h2 className='Title text-white wow fadeIn'><span>Development </span> process</h2>                        
                    </Col>
                </Row>
                <Row className='home-payments__globe-line'>
                    <Col md={12} className='text-center'>                    
                        <div className="wpb_wrapper">                           

                            <img className='earth' src="images/globe-poster.png" alt="" />

                            <div className="ProcessTitle">
                                <h3>Power up Business <br /> Growth</h3>
                            </div>   

                            {isInView && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="748.6" height="883" viewBox="0 0 748.6 883">
                                    <path className="half-circle-left" d="M375 54a75 75 50 1 0 .5 736" stroke="#fff" strokeWidth="14" pathLength="1" fill="none"></path>
                                    <path className="half-circle-right" d="M373 54a75 75 50 1 1 .5 736" stroke="#fff" strokeWidth="14" pathLength="1" fill="none"></path>
                                    <path className="top-line" d="M375 0, L375 61" stroke="#fff" strokeWidth="14" pathLength="1" fill="none"></path>
                                    <path className="bottom-line" d="M375 783, L375 883" stroke="#fff" strokeWidth="14" pathLength="1" fill="none"></path>
                                </svg>
                            )}                              
                        </div>

                        <div className="ProcessWrap">
                            <div className="BlockContent">
                                <div className="ProccessContent left"></div>    
                                <div className="ProccessContent right">
                                    
                                    <h3 className='wow fadeInRight' data-wow-duration="0.5s">Product Analyst & Design</h3>

                                    <p className='wow fadeInRight' data-wow-duration="0.5s">Our team of experts diligently analyzes your product, assembling a detailed roadmap that encompasses every specification and detail of your vision.</p>
                                     
                                </div>       
                            </div>                     

                            <div className="BlockContent">
                                <div className="ProccessContent left">
                                    <h3 className='wow fadeInLeft' data-wow-duration="0.5s">Development</h3>

                                    <p className='wow fadeInLeft' data-wow-duration="0.5s">We work hand in hand with your business department to architect and develop software solutions collaboratively delivering product updates through agile iterations.</p>
                                </div>
                                <div className="ProccessContent right"></div>
                            </div>

                            <div className="BlockContent">
                                <div className="ProccessContent left"></div>    
                                <div className="ProccessContent right">
                                    <h3 className='wow fadeInRight' data-wow-duration="0.5s">Testing & Bug Fixing</h3>

                                    <p className='wow fadeInRight' data-wow-duration="0.5s">We strongly believe in the importance of thorough testing to ensure a top-notch product, and thus we employ both automated and manual testing methods aiming to quickly identify and fix any bugs that may affect the quality.</p>
                                </div>       
                            </div>                     

                            <div className="BlockContent">
                                <div className="ProccessContent left">
                                    <h3 className='wow fadeInLeft' data-wow-duration="0.5s">Product Launch</h3>

                                    <p className='wow fadeInLeft' data-wow-duration="0.5s">We deploy and distribute your applications, ensuring seamless accessibility for end-users and accelerating global reach.</p>
                                </div>
                                <div className="ProccessContent right"></div>
                            </div>

                            <div className="BlockContent">
                                <div className="ProccessContent left"></div>    
                                <div className="ProccessContent right">
                                    <h3 className='wow fadeInRight' data-wow-duration="0.5s">Support & Promotion</h3>

                                    <p className='wow fadeInRight' data-wow-duration="0.5s">Our dedicated team provides exceptional technical support for all software solutions, enabling all the products to shine brightly through strategic promotion that reaches the target audience with precision and impact.</p>
                                </div>       
                            </div>        

                            <a href="#" className='c-button fillBtn wow fadeInUp' data-wow-duration="0.5s">Contact Team</a>                      
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="WhatsNewWrap">
            <Container >
                <Row>
                    <Col md={12} className='text-center mb-4'>
                        <h2 className='Title wow fadeInUp'>WHAT'S NEW</h2>                     
                    </Col>
                </Row>

                <Row>
                    <Col md={4} className='mb-4'>
                        <div className="BlogWrap wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.5s">
                            <img src="images/003.png" alt="" />

                            <h3>New product name</h3>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                            <a href="#" className='c-button fillBtn Black'>Read More</a>
                        </div>
                    </Col>
                    <Col md={4} className='mb-4'>
                        <div className="BlogWrap wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.6s" style={{backgroundColor: "#FD5DA5"}}>
                            <img src="images/003.png" alt="" />

                            <h3>New product name</h3>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                            <a href="#" className='c-button fillBtn Black'>Read More</a>
                        </div>
                    </Col>
                    <Col md={4} className='mb-4'>
                        <div className="BlogWrap wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.7s" style={{backgroundColor: "#6DCAFC"}}>
                            <img src="images/003.png" alt="" />

                            <h3>New product name</h3>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                            <a href="#" className='c-button fillBtn Black'>Read More</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

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

        <Footer /> 
        </>
    )
}

export default HomePage