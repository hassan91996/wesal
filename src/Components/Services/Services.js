import React from 'react'
import './Services.css'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Parallax } from 'react-scroll-parallax';
import Service1 from '../../assets/services-01.svg'
import Service2 from '../../assets/services-02.svg'
import Service3 from '../../assets/services-03.svg'
import Service4 from '../../assets/services-04.svg'
import Service5 from '../../assets/services-05.svg'
import Service6 from '../../assets/services-06.svg'
import Service7 from '../../assets/services-07.svg'
import Service8 from '../../assets/services-08.svg'
import Service9 from '../../assets/services-09.svg'
import Service10 from '../../assets/services-10.svg'
import service from '../../assets/service.png'
import { useTranslation } from 'react-i18next';
const Services = () => {
    const { t } = useTranslation();
    return (
        <div id='services' className='services-con my-4  pt-5'>
            <Parallax easing='easeInOut' speed="10" translateX={[10, 2]}>
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
                    <h3 className='wow animate__fadeInUp'>{t('services.title')}</h3>
                    <h4 className='wow animate__fadeInUp'>{t('services.subtitle')}</h4>
                </div>
                <div className='col-12  col-xl-10 mx-auto'>
                    <Row className='row-cols-1 row-cols-md-2 justify-content-between'>
                        <Col className='col-12 col-md-6 col-lg-5 p-3 text-center my-4'>
                            <div className='service d-flex  align-items-center w-100 wow animate__fadeInUp'>
                                <Image src={Service1} className='img-fluid me-3' alt='service' />
                                <div className='text-start w-100'>
                                    <h5 className='pb-3 mb-0'>{t('services.servicet1')}</h5>
                                    <p className='mb-0'>{t('services.serviced1')}</p>
                                </div>
                            </div>
                        </Col>
                        <Col className='col-12 col-md-6 col-lg-5 p-3 text-center my-4'>
                            <div className='service d-flex  align-items-center w-100 wow animate__fadeInUp'>
                                <Image src={Service2} className='img-fluid me-3' alt='service' />
                                <div className='text-start w-100'>
                                    <h5 className='pb-3 mb-0'>{t('services.servicet2')}</h5>
                                    <p className='mb-0'>{t('services.serviced2')}</p>
                                </div>
                            </div>
                        </Col>
                        <Col className='col-12 col-md-6 col-lg-5 p-3 text-center my-4'>
                            <div className='service d-flex  align-items-center w-100 wow animate__fadeInUp'>
                                <Image src={Service3} className='img-fluid me-3' alt='service' />
                                <div className='text-start w-100'>
                                    <h5 className='pb-3 mb-0'>{t('services.servicet3')}</h5>
                                    <p className='mb-0'>{t('services.serviced3')}</p>
                                </div>
                            </div>
                        </Col>
                        <Col className='col-12 col-md-6 col-lg-5 p-3 text-center my-4'>
                            <div className='service d-flex  align-items-center w-100 wow animate__fadeInUp'>
                                <Image src={Service4} className='img-fluid me-3' alt='service' />
                                <div className='text-start w-100'>
                                    <h5 className='pb-3 mb-0'>{t('services.servicet4')}</h5>
                                    <p className='mb-0'>{t('services.serviced4')}</p>
                                </div>
                            </div>
                        </Col>
                        <Col className='col-12 col-md-6 col-lg-5 p-3 text-center my-4'>
                            <div className='service d-flex  align-items-center w-100 wow animate__fadeInUp'>
                                <Image src={Service5} className='img-fluid me-3' alt='service' />
                                <div className='text-start w-100'>
                                    <h5 className='pb-3 mb-0'>{t('services.servicet5')}</h5>
                                    <p className='mb-0'>{t('services.serviced5')}</p>
                                </div>
                            </div>
                        </Col>
                        <Col className='col-12 col-md-6 col-lg-5 p-3 text-center my-4'>
                            <div className='service d-flex  align-items-center w-100 wow animate__fadeInUp'>
                                <Image src={Service6} className='img-fluid me-3' alt='service' />
                                <div className='text-start w-100'>
                                    <h5 className='pb-3 mb-0'>{t('services.servicet6')}</h5>
                                    <p className='mb-0'>{t('services.serviced6')}</p>
                                </div>
                            </div>
                        </Col>
                        <Col className='col-12 col-md-6 col-lg-5 p-3 text-center my-4'>
                            <div className='service d-flex  align-items-center w-100 wow animate__fadeInUp'>
                                <Image src={Service7} className='img-fluid me-3' alt='service' />
                                <div className='text-start w-100'>
                                    <h5 className='pb-3 mb-0'>{t('services.servicet7')}</h5>
                                    <p className='mb-0'>{t('services.serviced7')}</p>
                                </div>
                            </div>
                        </Col>
                        <Col className='col-12 col-md-6 col-lg-5 p-3 text-center my-4'>
                            <div className='service d-flex  align-items-center w-100 wow animate__fadeInUp'>
                                <Image src={Service8} className='img-fluid me-3' alt='service' />
                                <div className='text-start w-100'>
                                    <h5 className='pb-3 mb-0'>{t('services.servicet8')}</h5>
                                    <p className='mb-0'>{t('services.serviced8')}</p>
                                </div>
                            </div>
                        </Col>
                        <Col className='col-12 col-md-6 col-lg-5 p-3 text-center my-4'>
                            <div className='service d-flex  align-items-center w-100 wow animate__fadeInUp'>
                                <Image src={Service9} className='img-fluid me-3' alt='service' />
                                <div className='text-start w-100'>
                                    <h5 className='pb-3 mb-0'>{t('services.servicet9')}</h5>
                                    <p className='mb-0'>{t('services.serviced9')}</p>
                                </div>
                            </div>
                        </Col>
                        <Col className='col-12 col-md-6 col-lg-5 p-3 text-center my-4'>
                            <div className='service d-flex  align-items-center w-100 wow animate__fadeInUp'>
                                <Image src={Service10} className='img-fluid me-3' alt='service' />
                                <div className='text-start w-100'>
                                    <h5 className='pb-3 mb-0'>{t('services.servicet10')}</h5>
                                    <p className='mb-0'>{t('services.serviced10')}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='text-center my-4'>
                    <Image src={service} alt='services' className='img-fluid' />
                </div>
            </Container>
        </div>
    )
}

export default Services