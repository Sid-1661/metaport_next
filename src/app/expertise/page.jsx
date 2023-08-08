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
  const [isMouseOver2, setIsMouseOver2] = useState(false);
  const [isMouseOver3, setIsMouseOver3] = useState(false);
  const [isMouseOver4, setIsMouseOver4] = useState(false);
  const [isMouseOver5, setIsMouseOver5] = useState(false);
  const [isMouseOver6, setIsMouseOver6] = useState(false);
  const [isMouseOver7, setIsMouseOver7] = useState(false);


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

  const handleMouseEnter2 = () => {
    setIsMouseOver2(true);
  };

  const handleMouseLeave2 = () => {
    setIsMouseOver2(false);
  };

  const handleMouseEnter3 = () => {
    setIsMouseOver3(true);
  };

  const handleMouseLeave3 = () => {
    setIsMouseOver3(false);
  };

  const handleMouseEnter4 = () => {
    setIsMouseOver4(true);
  };

  const handleMouseLeave4 = () => {
    setIsMouseOver4(false);
  };

  const handleMouseEnter5 = () => {
    setIsMouseOver5(true);
  };

  const handleMouseLeave5 = () => {
    setIsMouseOver5(false);
  };

  const handleMouseEnter6 = () => {
    setIsMouseOver6(true);
  };

  const handleMouseLeave6 = () => {
    setIsMouseOver6(false);
  };

  const handleMouseEnter7 = () => {
    setIsMouseOver7(true);
  };

  const handleMouseLeave7 = () => {
    setIsMouseOver7(false);
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

      <Row className={Styles.Service}>
        <Col md={6} className={Styles.BlockBack}>
          <div onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
            {!isMouseOver2 ? (
              <>
                <h4>{t("Blockchain & Web3 Development")}</h4>
                <Image src="/images/block 1.svg" width={218} height={218} className={Styles.Block1} alt='Block1' />
              </>
            ) : (
              <>
                <h4>{t("Blockchain & Web3 Development")}</h4>
                <p>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}</p>
                <Link href={'/contact'} className='c-button fillBtn'>{t("Inquire Now")}</Link>
              </>
            )}
          </div>
        </Col>
        <Col md={6} className={Styles.AiBack}>
          <div onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
            {!isMouseOver3 ? (
              <>
                <h4>{t("AI & ML App ")}</h4>
                <h4>{t("Development")}</h4>
                <Image src="/images/innovation 1.svg" width={218} height={218} className={Styles.Innovation1} alt='Innovation1' />
              </>
            ) : (
              <>
                <h4>{t("AI & ML App ")}</h4>
                <h4>{t("Development")}</h4>
                <p>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}</p>
                <Link href={'/contact'} className='c-button fillBtn Green'>{t("Inquire Now")}</Link>
              </>
            )}
          </div>
        </Col>
      </Row>

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

      <Row className={Styles.Service1}>
        <Col md={6} className={Styles.Web}>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {!isMouseOver ? (
              <>
                <h4>{t("Web Development")}</h4>
                <Image src="/images/coding.svg" width={218} height={218} className={Styles.Block1} alt='Block1' />
              </>
            ) : (
              <>
                <h4>{t("Web Development")}</h4>
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
                <h4>{t("App Development")}</h4>
                <Image src="/images/app-development.svg" width={218} height={218} className={Styles.Innovation1} alt='Innovation1' />
              </>
            ) : (
              <>
                <h4>{t("App Development")}</h4>
                <p>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}</p>
                <Link href={'/contact'} className='c-button fillBtn'>{t("Inquire Now")}</Link>
              </>
            )}
          </div>
        </Col>
      </Row>

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

      <Row className={Styles.Service}>
        <Col md={6} className={Styles.BlockBack1}>
          <div onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
            {!isMouseOver4 ? (
              <>
                <h4>{t("AR & VR Develop")}</h4>
                <Image src="/images/arandvr.svg" width={218} height={218} className={Styles.Block1} alt='Block1' />
              </>
            ) : (
              <>
                <h4>{t("AR & VR Develop")}</h4>
                <p>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}</p>
                <Link href={'/contact'} className='c-button fillBtn'>{t("Inquire Now")}</Link>
              </>
            )}
          </div>
        </Col>
        <Col md={6} className={Styles.AiBack}>
          <div onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
            {!isMouseOver5 ? (
              <>
                <h4>{t("IoT Solutions")}</h4>
                <Image src="/images/iot.svg" width={218} height={218} className={Styles.Innovation1} alt='Innovation1' />
              </>
            ) : (
              <>
                <h4>{t("IoT Solutions")}</h4>
                <p>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}</p>
                <Link href={'/contact'} className='c-button fillBtn Black'>{t("Inquire Now")}</Link>
              </>
            )}
          </div>
        </Col>
      </Row>

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

      <Row className={Styles.Service}>
        <Col md={6} className={Styles.Design}>
          <div onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
            {!isMouseOver6 ? (
              <>
                <h4>{t("UI/UX Design")}</h4>
                <Image src="/images/design.svg" width={218} height={218} className={Styles.Block1} alt='Block1' />
              </>
            ) : (
              <>
                <h4>{t("UI/UX Design")}</h4>
                <p>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}</p>
                <Link href={'/contact'} className='c-button fillBtn'>{t("Inquire Now")}</Link>
              </>
            )}
          </div>
        </Col>
        <Col md={6} className={Styles.Assurance}>
          <div onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
            {!isMouseOver7 ? (
              <>
                <h4>{t("Quality Assurance (QA)")}</h4>
                <Image src="/images/assurance.svg" width={218} height={218} className={Styles.Innovation1} alt='Innovation1' />
              </>
            ) : (
              <>
                <h4>{t("Quality Assurance (QA)")}</h4>
                <p>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}</p>
                <Link href={'/contact'} className='c-button fillBtn'>{t("Inquire Now")}</Link>
              </>
            )}
          </div>
        </Col>
      </Row>

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