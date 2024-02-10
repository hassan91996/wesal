import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import './footer.css'
import Logo from '../../assets/logo-01 2 (1).png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t} = useTranslation();

    return (
        <footer className='Footer mt-4'>
            <Container className=''>
                <div className='footer-top-border'></div>
                <Row className='py-4 justify-content-between px-3 py-5'>
                    <Col className='col-12 col-lg-4 text-center text-lg-start'>
                        <h5 className='mb-3'>{t('footer.legal')}</h5>
                        <ul><li className='justify-content-center justify-content-lg-start'><Link to="/policy" target="_blank">{t('footer.privacy')}</Link></li></ul>
                    </Col>
                    <Col className='col-12 col-lg-6 text-lg-end text-center'>
                        <Image src={Logo} className='img-fluid footer-logo mb-5' />
                        <p>{t('footer.text')}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer