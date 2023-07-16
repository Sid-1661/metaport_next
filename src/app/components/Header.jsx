import React, { useEffect, useRef } from 'react';
import { Container } from 'reactstrap'
import Call from '../images/call.svg'
import Telegram from '../images/telegram.svg'
import Whatsapp from '../images/whatsapp.svg'
import Global from '../images/global.svg'
import Logo from '../images/logo.svg'

import Link from 'next/link';
import Image from 'next/image';
import TextSlider from './TextSlider';
import AnimateButton from './AnimateButton';

function Header({type}) {
    
    const headerRef = useRef(); 

    useEffect(() => { 
        const handleScroll = () => {
            const header = headerRef.current;
            
            if (window.pageYOffset > 0) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        };
    
        if (typeof window !== 'undefined') {
            
            window.addEventListener('scroll', handleScroll);
    
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    const texts = [
        { content: 'INNOVATION', color: '#FF007A' },
        { content: 'INSPIRATION', color: '#8F00FF' },
        { content: 'IMPACT', color: '#01FF89' },
    ];

    return (
        <>
        <header className='HeaderWrap' ref={headerRef}>
            <Container>    
                <div className="dFlex">
                    <div className='LogoWrap'>
                        <Link href={"/"}>
                            <Image src={Logo} alt="Metaport" style={{width: 209, height: 'auto'}} priority={true} /> 
                        </Link>                        
                    </div>
                    <div className="menu">
                        <ul>
                            <li><Link href={'/'}> Our Expertise</Link></li>
                            <li><Link href={'/'}>Our Products</Link></li>
                            <li><Link href={'/'}>Insights</Link></li>
                            <li><Link href={'/'}>Our Company</Link></li>
                        </ul>
                    </div>                    
                    <div className="headerRight">
                        <ul>
                            <li><Link href={'/'}><Image src={Call} alt="Telegram" /></Link></li>
                            <li><Link href={'/'}><Image src={Telegram} alt="Telegram" /></Link></li>
                            <li><Link href={'/'}><Image src={Whatsapp} alt="Whatsapp"/></Link></li>
                            <li><Link href={'/'}><Image src={Global} alt="Global" /></Link></li>
                            <li className='button'><Link href={'/contact'} className='btn btn-outline-light'>Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </header>
        {type === 'Home' ? 
            <div className='HomePageHero'> 
                <video width="640" height="360" playsInline autoPlay loop muted>
                    <source src="images/banner.mp4" type="video/mp4" />
                    <source src="images/banner.ogg" type="video/ogg" />
                </video>
                
                <div className="HeroContent">
                    <Container>
                        <h1>Engineering<br/> the modern age with</h1>

                        <TextSlider texts={texts} interval={2500}  /> 

                        <p>Unleashing the boundless potential for global industries, pursuing excellence with brilliant minds and building powerful tools.</p>
                        
                        <div className="dFlex">
                            
                            {/* <Link href={'/'} className='c-button'> Why Choose Us</Link>    */}

                            <AnimateButton /> 
                            
                            <Link href={'/'} className='c-button whiteBtn' style={{marginLeft: 25}}>Contact Team</Link>
                        </div>
                    </Container>
                </div>
            </div> 
            : 
            <div className='HomePageHero singlePage'> 
                <img src="images/bg-02.png" alt="" />
                
                <div className="HeroContent text-center">
                    <Container>
                        <h1>Get in touch</h1> 
                        <p>At metaport, we provide static websites to our clients as well as we make fully functional web app portals using modern technologies.</p>
                    </Container>
                </div>
            </div>
        }
        </>
    )
}

export default Header