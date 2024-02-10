import React from 'react'
import './Features.css'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Feature1 from '../../assets/f1.svg'
import Feature2 from '../../assets/f2.svg'
import Feature3 from '../../assets/f3.svg'
import Feature4 from '../../assets/f4.svg'
import { Parallax } from 'react-scroll-parallax';
import { useTranslation } from 'react-i18next';

const Features = () => {
    const { t } = useTranslation();
    return (
        <div id='features' className='features-con my-2  py-5'>
            <Parallax easing='easeInOut' speed="10" translateY={10}>
                <div className='shape one'></div>
            </Parallax>
            <Parallax easing='easeInOut' speed="10" translateY={10}>
                <div className='shape two'></div>
            </Parallax>
            <Parallax easing='easeInOut' speed="10" translateY={10}>
                <div className='shape three'></div>
            </Parallax>
            <Container>
                <div className='mb-4'>
                    <h3 className='wow animate__fadeInUp'>{t('features.title')}</h3>
                    <h4 className='wow animate__fadeInUp'>{t('features.subTitle')}</h4>
                </div>
                <Row className='row-cols-1 row-cols-md-2 row-cols-lg-4'>
                    <Col className='p-3'>
                        <div className='feature p-3 h-100 wow animate__fadeInUp'>
                            <Image src={Feature1} alt='feature' className='img-fluid' />
                            <h5 className='my-3'>{t('features.ser1t')}</h5>
                            <p className='mb-0'>{t('features.ser1d')}</p>
                        </div>
                    </Col>
                    <Col className='p-3'>
                        <div className='feature p-3 h-100 wow animate__fadeInUp'>
                            <Image src={Feature2} alt='feature' className='img-fluid' />
                            <h5 className='my-3'>{t('features.ser2t')}</h5>
                            <p className='mb-0'>{t('features.ser2d')}</p>
                        </div>
                    </Col>
                    <Col className='p-3'>
                        <div className='feature p-3 h-100 wow animate__fadeInUp'>
                            <Image src={Feature3} alt='feature' className='img-fluid' />
                            <h5 className='my-3'>{t('features.ser3t')}</h5>
                            <p className='mb-0'>{t('features.ser3d')}</p>
                        </div>
                    </Col>
                    <Col className='p-3'>
                        <div className='feature p-3 h-100 wow animate__fadeInUp'>
                            <Image src={Feature4} alt='feature' className='img-fluid' />
                            <h5 className='my-3'>{t('features.ser4t')}</h5>
                            <p className='mb-0'>{t('features.ser4d')}</p>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Features