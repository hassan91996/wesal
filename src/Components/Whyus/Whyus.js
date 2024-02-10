import React from 'react'
import './Whyus.css'
import { Col, Container, Image, Row } from 'react-bootstrap'
import symbole from '../../assets/Symbol-01 1.png'
import rtlsymbole from '../../assets/rtlSymbol-01 1.png'
import whyImg from '../../assets/tablet and ipad_mockup 1.png'
import whyImg2 from '../../assets/982 1.png'
import whyImg2rtl from '../../assets/rtl.png'
import whysecond from '../../assets/why-second.png'
import Why4 from '../../assets/Frame.png'
import { Parallax } from 'react-scroll-parallax';
import { useTranslation } from 'react-i18next';

const Whyus = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div id='whyus' className='why-con py-3 py-lg-5 my-4 my-lg-5'>
                <Parallax easing='easeInOut' speed="10" translateX={[10, 2]}>
                    <div className='shape one'></div>
                </Parallax>
                <Parallax easing='easeInOut' speed="10" translateY={10}>
                    <div className='shape two'></div>
                </Parallax>
                <Parallax easing='easeInOut' speed="10" translateY={10}>
                    <div className='shape three'></div>
                </Parallax>
                <Parallax easing='easeInOut' speed="10" translateY={10}>
                    <div className='shape four'></div>
                </Parallax>
                {i18n.language === "ar" &&
                    <div className='ar-why-bg d-none d-md-block'>
                        <Image src={rtlsymbole} alt="wessal" className='img-fluid' />
                    </div>}
                {i18n.language === "en" &&
                    <div className='why-bg d-none d-md-block'>
                        <Image src={symbole} className='img-fluid' alt="wessal" />
                    </div>}
                <Container className='position-relative'>
                    <div className='col-12 col-lg-6 text-start wow animate__fadeInUp'>
                        <h2 className='mb-4 wow animate__fadeInUp'>{t('why.title')}</h2>
                        <Image src={whyImg} className='img-fluid mb-5' alt='whyimg' />
                        <h4 className='pb-3 mb-0 pt-4 wow animate__fadeInUp'>{t('why.sub')}</h4>
                        <p className='wow animate__fadeInUp'>{t('why.des')}</p>
                    </div>

                </Container>
                <div className='why-second'>
                    {i18n.language === "en" &&
                        <div className='why-second-bg d-none d-lg-block'>
                            <Image src={whyImg2} className='img-fluid' />
                        </div>}
                    {i18n.language === "ar" &&
                        <div className='why-second-bg-ar d-none d-lg-block'>
                            <Image src={whyImg2rtl} className='img-fluid' />
                        </div>}
                    <Container className='why-second-data h-100 d-flex flex-column justify-content-between pt-5'>
                        <div className='d-flex justify-content-end py-5'>
                            <div className='col-12 col-lg-7  text-start pt-4'>
                                <h3 className='mb-4 wow animate__fadeInUp'>{t('why.second-tit')}</h3>
                                <p className='wow animate__fadeInUp'>{t('why.seconddes')}</p>
                            </div>
                        </div>
                        <div className='text-center w-100'>
                            <div className='d-flex justify-content-center flex-column flex-lg-row align-items-center'>
                                <Image src={whysecond} className='img-fluid mb-4 mb-lg-0 me-lg-4 ' />
                                <div className='text-lg-start text-center'>
                                    <h4 className='wow animate__fadeInUp'>{t('why.thirdtit')}</h4>
                                    <p className='wow animate__fadeInUp'>{t('why.thirddes')}</p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className='why-third my-5'>
                    <Container className='why-third-data d-flex flex-column justify-content-between'>
                        <div className='d-flex third-main align-items-center justify-content-between w-100'>
                            <h1 className='text-center ps-lg-5 ms-lg-5 col-lg-5'>{t('why.Smart')}</h1>
                            <h1 className='text-center col-lg-5'>{t('why.Management')}</h1>
                        </div>
                        <h5 className='text-center'>{t('why.four-des')}</h5>
                    </Container>
                </div>
                <div className='final-why my-5 py-5'>
                    <Container>
                        <Row>
                            <Col className='col-12 col-lg-6'>
                                <Image src={Why4} className='img-fluid' />
                            </Col>
                            <Col className='col-12 col-lg-6 d-flex align-items-center'>
                                <div className='text-center text-lg-start w-100'>
                                    <h5>{t('why.Security')}</h5>
                                    <p>{t('why.platform')}</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Whyus