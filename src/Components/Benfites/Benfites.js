import React from 'react'
import './Benfites.css'
import { Col, Container, Image, Row } from 'react-bootstrap'
import benfite1 from '../../assets/benifit1.png'
import { Parallax } from 'react-scroll-parallax';
import { useTranslation } from 'react-i18next';


const Benfites = () => {
    const { t } = useTranslation();
    return (
        <div id='compatative' className='benfites-con my-4 mb-5 pb-5'>
            <Parallax easing='easeInOut' speed="10" translateY={10}>
                <div className='shape one'></div>
            </Parallax>
            <Parallax easing='easeInOut' speed="10" translateY={10}>
                <div className='shape two'></div>
            </Parallax>
            <Container className='position-relative'>
                <Row>
                    <Col className='col-12 col-lg-6'>
                        <Image src={benfite1} className='img-fluid' alt='benifit' />
                    </Col>
                    <Col className='col-12 col-lg-6'>
                        <h4 className='mt-5 mt-lg-0'>{t('benfites.title')}</h4>
                        <ul className='text-start mt-5'>
                            <li>{t('benfites.l1')}</li>
                            <li>{t('benfites.l2')}</li>
                            <li>{t('benfites.l3')}</li>
                        </ul>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Benfites