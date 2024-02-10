import React from 'react'
import './Policy.css'
import { Container, Image } from 'react-bootstrap'
import WhyLogo from '../../assets/logo-01 2.png'
import { Parallax } from 'react-scroll-parallax';
import { useTranslation } from 'react-i18next';
const Policy = () => {
    const { t } = useTranslation();
    return (
        <div className='Why-con mt-3'>
            <Parallax easing='easeInOut' speed="10" translateY={10}>
                <div className='shape one'></div>
            </Parallax>
            <Parallax easing='easeInOut' speed="10" translateY={10}>
                <div className='shape two'></div>
            </Parallax>
            <div className='why-bg'></div>
            <Container className='py-3 text-center why-data'>
                <Image src={WhyLogo} className='why-logo mb-5 img-fluid' alt='logo' />
                <h1 className='mb-3'>{t('privacr')}</h1>
                <h3 className='py-3 py-lg-4'>{t('policy')}</h3>
            </Container>
        </div>
    )
}

export default Policy