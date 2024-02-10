import React from 'react'
import './Home.css'
import HomeImage from '../../assets/heroimg.png'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';


const Home = () => {
  const { t} = useTranslation();

  return (
    <div id='home' className='home d-flex align-items-center align-items-lg-end pb-5 '>
      <div className='home-bg'></div>
      <Container>
        <Row className='home-content w-100 mx-0'>
          <Col className='col-12 col-lg-6  text-center p-0'>
            <h1 className='wow animate__fadeInUp'>{t('landing.main')}</h1>
            <h2 className='mb-5 wow animate__fadeInUp'>{t('landing.second')}</h2>
            <p className='mb-0 wow animate__fadeInUp'>{t('landing.text')}</p>
          </Col>
          <Col className='col-12 col-lg-6 col-lg-6 d-none d-lg-block text-center'>
            <Image src={HomeImage} className='img-fluid wow animate__fadeInUp' data-wow-duration="1.2s" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home