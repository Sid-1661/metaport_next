"use client";
import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap';
import Image from 'next/image';
import Link from 'next/link';

import Header from '../components/Header'
import Footer from '../components/Footer';
import Styles from './Expertise.module.css'

import { useTranslation } from "react-i18next";

function Expertise() {
  const { t } = useTranslation();
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isMouseOver1, setIsMouseOver1] = useState(false);


  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  const handleMouseEnter1 = () => {
    setIsMouseOver1(true);
  };

  const handleMouseLeave1 = () => {
    setIsMouseOver1(false);
  };
  return (
    <>
      <Header type="Expertise" />

      <div className={Styles.FormWrap}>
        <Container>
          <Row>
            <Col md={5}>
              <Image src="/images/1discuss.png" width={490} height={471} className={Styles.CeoImage} alt='M A B Siddique' />
            </Col>
            <Col md={7} className='mb-4'>
              <h3>{t("Team Extension")}</h3>

              <p>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}</p>

              <Link href={'/contact'} className='c-button fillBtn'>{t("Inquire Now")}</Link>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <div >
        <Container> */}
          <Row className={Styles.Service}>
            <Col md={6} className={Styles.BlockBack}>
              <h1>{t("Blockchain & Web3 Development")}</h1>
              <Image src="/images/block 1.svg" width={218} height={218} className={Styles.Block1} alt='Block1' />
            </Col>
            <Col md={6} className={Styles.AiBack}>
              <h1>{t("AI & ML App ")}</h1>
              <h1>{t("Development")}</h1>
              <Image src="/images/innovation 1.svg" width={218} height={218} className={Styles.Innovation1} alt='Innovation1' />
            </Col>
          </Row>
        {/* </Container>
      </div> */}

      <div className={Styles.Production}>
        <Container>
          <Row>
            <Col md={5}>
              <Image src="/images/product.png" width={388} height={388} className={Styles.CeoImage} alt='M A B Siddique' />
            </Col>
            <Col md={7} className='mb-4'>
              <h3>{t("Product Engineering")}</h3>

              <p>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}</p>

              <Link href={'/contact'} className='c-button fillBtn'>{t("Inquire Now")}</Link>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <div >
        <Container> */}
          <Row className={Styles.AppAndWeb}>
            <Col md={6} className={Styles.Web}>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {!isMouseOver ? (
                  <>
                    <h1>{t("Web Development")}</h1>
                    <Image src="/images/coding.svg" width={218} height={218} className={Styles.Block1} alt='Block1' />
                  </>
                ) : (
                  <>
                    <h1>{t("Web Development")}</h1>
                    <p>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}</p>
                    <Link href={'/contact'} className='c-button fillBtn'>{t("Inquire Now")}</Link>
                  </>
                )}

              </div>
            </Col>
            <Col md={6} className={Styles.App}>
              <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                {!isMouseOver1 ? (
                  <>
                    <h1>{t("App Development")}</h1>
                    <Image src="/images/app-development.svg" width={218} height={218} className={Styles.Innovation1} alt='Innovation1' />
                  </>
                ) : (
                  <>
                    <h1>{t("App Development")}</h1>
                    <p>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}</p>
                    <Link href={'/contact'} className='c-button fillBtn'>{t("Inquire Now")}</Link>
                  </>
                )}

              </div>
            </Col>
          </Row>
        {/* </Container>
      </div> */}

      <div className={Styles.Emerging}>
        <Container>
          <Row>
            <Col md={5}>
              <Image src="/images/brain.png" width={388} height={388} className={Styles.CeoImage} alt='M A B Siddique' />
            </Col>
            <Col md={7} className='mb-4'>
              <h3>{t("Emerging Tech")}</h3>

              <p>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}</p>

              <Link href={'/contact'} className='c-button fillBtn'>{t("Inquire Now")}</Link>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <div >
        <Container> */}
          <Row className={Styles.ArAndVr}>
            <Col md={6} className={Styles.Ar}>
              <h1>{t("AR & VR Develop")}</h1>
              <Image src="/images/arandvr.svg" width={218} height={218} className={Styles.Block1} alt='Block1' />
            </Col>
            <Col md={6} className={Styles.Iot}>
              <h1>{t("IoT Solutions")}</h1>
              <Image src="/images/iot.svg" width={218} height={218} className={Styles.Innovation1} alt='Innovation1' />
            </Col>
          </Row>
        {/* </Container>
      </div> */}

      <div className={Styles.Security}>
        <Container>
          <Row>
            <Col md={5}>
              <Image src="/images/security.png" width={388} height={388} className={Styles.CeoImage} alt='M A B Siddique' />
            </Col>
            <Col md={7} className='mb-4'>
              <h3>{t("Security & Dev Ops")}</h3>

              <p>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}</p>

              <Link href={'/contact'} className='c-button fillBtn'>{t("Inquire Now")}</Link>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <div >
        <Container> */}
          <Row className={Styles.Quality}>
            <Col md={6} className={Styles.Design}>
              <h1>{t("UI/UX Design")}</h1>
              <Image src="/images/design.svg" width={218} height={218} className={Styles.Block1} alt='Block1' />
            </Col>
            <Col md={6} className={Styles.Assurance}>
              <h1>{t("Quality Assurance (QA)")}</h1>
              <Image src="/images/assurance.svg" width={218} height={218} className={Styles.Innovation1} alt='Innovation1' />
            </Col>
          </Row>
        {/* </Container>
      </div> */}

      <div className={Styles.Emerging}>
        <Container>
          <Row>
            <Col md={5}>
              <Image src="/images/ecommerce.png" width={388} height={388} className={Styles.CeoImage} alt='M A B Siddique' />
            </Col>
            <Col md={7} className='mb-4'>
              <h3>{t("eCommerce")}</h3>

              <p>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}</p>

              <Link href={'/contact'} className='c-button fillBtn'>{t("Inquire Now")}</Link>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer type="Expertise" />

    </>
  )
}

export default Expertise