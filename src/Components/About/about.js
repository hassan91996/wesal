import React from 'react'
import './about.css'
import AboutImg from '../../assets/about.png'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Parallax } from 'react-scroll-parallax';
import { useTranslation } from 'react-i18next';


const About = () => {
    const { t } = useTranslation();
    return (
        <div id='about' className='about-con py-4'>
            <Parallax easing='easeInOut' speed="10" translateY={10}>
                <div className='shape one'></div>
            </Parallax>
            <Parallax easing='easeInOut' speed="10" translateY={10}>
                <div className='shape two'></div>
            </Parallax>
            <Parallax easing='easeInOut' speed="10" translateY={5}>
                <div className='shape three'></div>
            </Parallax>
            <Parallax easing='easeInOut' speed="10" translateX={[10, 2]}>
                <div className='shape four'></div>
            </Parallax>
            <Row>
                <Col className='col-12 col-lg-6 p-4 pt-lg-5'>
                    <Container className='pt-lg-5 position-relative'>
                        <div className='px-4 pt-lg-5 text-start'>
                            <h4 className='px-3 mb-0 pt-5 text-center text-md-start wow animate__fadeInUp'>{t('about.title')}</h4>
                            <div className='d-flex justify-content-center flex-column flex-md-row  justify-content-md-start align-items-center align-items-md-start mb-4 mb-md-5'>
                                <h1 className='wow animate__fadeInUp'>{t('about.our')}</h1>
                                <h5 className='mx-3 pt-2 pt-md-4 wow animate__fadeInUp'>{t('about.mission')}</h5>
                            </div>
                            <p className='text-center text-md-start px-3 mt-4 wow animate__fadeInUp'>{t('about.about-text')}</p>
                        </div>
                    </Container>
                </Col>
                <Col className='col-12 col-lg-6 d-none d-lg-block'>
                    <Image src={AboutImg} alt='about' className='img-fluid' />
                </Col>
            </Row>

        </div>
    )
}

export default About