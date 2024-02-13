import React, { useRef } from 'react'
import { Col, Container, InputGroup, Row, Form } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
import './contact.css'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Parallax } from 'react-scroll-parallax';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [show, setShow] = useState(false);
  const [showerr, setShowerr] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5xeypxj', 'template_06hzcm8', form.current, '9M0l-rM6JULbWEqxk')
      .then((e) => {
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 5000);
      }, (error) => {
        setShowerr(true);
        setTimeout(() => {
          setShowerr(false);
        }, 5000);
      });
  };

  return (
    <div id='contact' className='contact-con'>
      <Parallax easing='easeInOut' speed="10" translateY={10}>
        <div className='shape one'></div>
      </Parallax>
      <Parallax easing='easeInOut' speed="10" translateY={10}>
        <div className='shape two'></div>
      </Parallax>
      <Container className='position-relative'>
        <Row>
          <Col className='col-12 col-lg-8 text-start wow animate__fadeInLeft' data-wow-delay=".4s">
            <h1 className='mb-4'>{t('contact.title')}</h1>
            <h3 className='mb-5 pb-5'>{t('contact.head')}</h3>
            <p className='my-4 mt-5 pt-5'>
              <svg className='me-3' xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                <g clipPath="url(#clip0_75_266)">
                  <path d="M0 0V15.36H24V0H0ZM11.9991 9.48532L2.15665 1.13876H21.8433L11.9991 9.48487V9.48532ZM8.07813 7.67753L1.17945 13.5266V1.8276L8.07813 7.67753ZM8.97285 8.4352L11.9991 11.0011L15.0257 8.4352L21.8494 14.2208H2.1506L8.97285 8.4352ZM15.9205 7.67753L22.8187 1.8276V13.5266L15.9205 7.67708V7.67753Z" fill="#009DFF" />
                </g>
                <defs>
                  <clipPath id="clip0_75_266">
                    <rect width="24" height="15.36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              info@wessal.app
            </p>
            <p className='my-4'><svg className='me-3' xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
              <g clipPath="url(#clip0_75_268)">
                <path fillRule="evenodd" clipRule="evenodd" d="M22.7875 15.74C22.19 15.4472 19.2917 14.026 18.7506 13.8347C18.2089 13.6316 17.8146 13.542 17.4196 14.1282C17.0253 14.7143 15.8861 16.0334 15.5476 16.4171C15.1983 16.8115 14.8604 16.8572 14.263 16.5638C13.6761 16.2704 11.7709 15.6623 9.51574 13.6548C7.76845 12.11 6.57287 10.1935 6.23432 9.60727C5.8964 9.02045 6.20047 8.7051 6.49387 8.41169C6.76409 8.14148 7.08007 7.72394 7.38413 7.38601C7.46376 7.28445 7.53084 7.19417 7.59855 7.10389C7.73397 6.88947 7.83553 6.68635 7.97032 6.40485C8.17345 6.0105 8.07189 5.67195 7.92581 5.37917C7.77911 5.08576 6.59481 2.19932 6.0989 1.02693C5.6149 -0.146705 5.11899 0.0557979 4.76915 0.0557979C4.41932 0.0557979 4.03626 0 3.64128 0C3.24631 0 2.60369 0.146705 2.06264 0.732269C1.52222 1.31909 0 2.73974 0 5.62618C0 6.30266 0.124135 6.97913 0.304067 7.62237C0.901544 9.68564 2.1874 11.3878 2.41248 11.6818C2.70526 12.0649 6.49387 18.1757 12.4925 20.533C18.5017 22.8671 18.5017 22.0891 19.5844 21.9875C20.6665 21.8966 23.0803 20.5781 23.5643 19.2026C24.0614 17.8384 24.0614 16.6654 23.9141 16.4178C23.7674 16.1808 23.3724 16.0341 22.7875 15.7413V15.74Z" fill="#009DFF" />
              </g>
              <defs>
                <clipPath id="clip0_75_268">
                  <rect width="24" height="22.1919" fill="white" />
                </clipPath>
              </defs>
            </svg> +966563328204</p>
            <p className='my-4'><svg className='me-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 24C10.36 24 8.81 23.685 7.35 23.055C5.89 22.425 4.615 21.565 3.525 20.475C2.435 19.385 1.575 18.11 0.945 16.65C0.315 15.19 0 13.64 0 12C0 10.34 0.315 8.785 0.945 7.335C1.575 5.885 2.435 4.615 3.525 3.525C4.615 2.435 5.89 1.575 7.35 0.945C8.81 0.315 10.36 0 12 0C13.66 0 15.215 0.315 16.665 0.945C18.115 1.575 19.385 2.435 20.475 3.525C21.565 4.615 22.425 5.885 23.055 7.335C23.685 8.785 24 10.34 24 12C24 13.64 23.685 15.19 23.055 16.65C22.425 18.11 21.565 19.385 20.475 20.475C19.385 21.565 18.115 22.425 16.665 23.055C15.215 23.685 13.66 24 12 24ZM12 21.54C12.52 20.82 12.97 20.07 13.35 19.29C13.73 18.51 14.04 17.68 14.28 16.8H9.72C9.96 17.68 10.27 18.51 10.65 19.29C11.03 20.07 11.48 20.82 12 21.54ZM8.88 21.06C8.52 20.4 8.205 19.715 7.935 19.005C7.665 18.295 7.44 17.56 7.26 16.8H3.72C4.3 17.8 5.025 18.67 5.895 19.41C6.765 20.15 7.76 20.7 8.88 21.06ZM15.12 21.06C16.24 20.7 17.235 20.15 18.105 19.41C18.975 18.67 19.7 17.8 20.28 16.8H16.74C16.56 17.56 16.335 18.295 16.065 19.005C15.795 19.715 15.48 20.4 15.12 21.06ZM2.7 14.4H6.78C6.72 14 6.675 13.605 6.645 13.215C6.615 12.825 6.6 12.42 6.6 12C6.6 11.58 6.615 11.175 6.645 10.785C6.675 10.395 6.72 10 6.78 9.6H2.7C2.6 10 2.525 10.395 2.475 10.785C2.425 11.175 2.4 11.58 2.4 12C2.4 12.42 2.425 12.825 2.475 13.215C2.525 13.605 2.6 14 2.7 14.4ZM9.18 14.4H14.82C14.88 14 14.925 13.605 14.955 13.215C14.985 12.825 15 12.42 15 12C15 11.58 14.985 11.175 14.955 10.785C14.925 10.395 14.88 10 14.82 9.6H9.18C9.12 10 9.075 10.395 9.045 10.785C9.015 11.175 9 11.58 9 12C9 12.42 9.015 12.825 9.045 13.215C9.075 13.605 9.12 14 9.18 14.4ZM17.22 14.4H21.3C21.4 14 21.475 13.605 21.525 13.215C21.575 12.825 21.6 12.42 21.6 12C21.6 11.58 21.575 11.175 21.525 10.785C21.475 10.395 21.4 10 21.3 9.6H17.22C17.28 10 17.325 10.395 17.355 10.785C17.385 11.175 17.4 11.58 17.4 12C17.4 12.42 17.385 12.825 17.355 13.215C17.325 13.605 17.28 14 17.22 14.4ZM16.74 7.2H20.28C19.7 6.2 18.975 5.33 18.105 4.59C17.235 3.85 16.24 3.3 15.12 2.94C15.48 3.6 15.795 4.285 16.065 4.995C16.335 5.705 16.56 6.44 16.74 7.2ZM9.72 7.2H14.28C14.04 6.32 13.73 5.49 13.35 4.71C12.97 3.93 12.52 3.18 12 2.46C11.48 3.18 11.03 3.93 10.65 4.71C10.27 5.49 9.96 6.32 9.72 7.2ZM3.72 7.2H7.26C7.44 6.44 7.665 5.705 7.935 4.995C8.205 4.285 8.52 3.6 8.88 2.94C7.76 3.3 6.765 3.85 5.895 4.59C5.025 5.33 4.3 6.2 3.72 7.2Z" fill="#009DFF" />
            </svg>www.wessal.app</p>
          </Col>
          <Col className='col-12  col-lg-4 contact-form wow animate__fadeInRight' data-wow-delay=".4s">
            <form ref={form} onSubmit={sendEmail}>
              <InputGroup className="mb-3">
                <InputGroup.Text><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3.85 15.1C4.7 14.45 5.65 13.9375 6.7 13.5625C7.75 13.1875 8.85 13 10 13C11.15 13 12.25 13.1875 13.3 13.5625C14.35 13.9375 15.3 14.45 16.15 15.1C16.7333 14.4167 17.1875 13.6417 17.5125 12.775C17.8375 11.9083 18 10.9833 18 10C18 7.78333 17.2208 5.89583 15.6625 4.3375C14.1042 2.77917 12.2167 2 10 2C7.78333 2 5.89583 2.77917 4.3375 4.3375C2.77917 5.89583 2 7.78333 2 10C2 10.9833 2.1625 11.9083 2.4875 12.775C2.8125 13.6417 3.26667 14.4167 3.85 15.1ZM10 11C9.01667 11 8.1875 10.6625 7.5125 9.9875C6.8375 9.3125 6.5 8.48333 6.5 7.5C6.5 6.51667 6.8375 5.6875 7.5125 5.0125C8.1875 4.3375 9.01667 4 10 4C10.9833 4 11.8125 4.3375 12.4875 5.0125C13.1625 5.6875 13.5 6.51667 13.5 7.5C13.5 8.48333 13.1625 9.3125 12.4875 9.9875C11.8125 10.6625 10.9833 11 10 11ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z" fill="#666A70" />
                </svg></InputGroup.Text>
                <Form.Control required
                  name="name" placeholder={t('contact.Name')}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                  <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM10 9L18 4V2L10 7L2 2V4L10 9Z" fill="#666A70" />
                </svg></InputGroup.Text>
                <Form.Control required
                  type="email" className='text-start' name="mail" placeholder={t('contact.Email')}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M16.95 18C14.8667 18 12.8083 17.5458 10.775 16.6375C8.74167 15.7292 6.89167 14.4417 5.225 12.775C3.55833 11.1083 2.27083 9.25833 1.3625 7.225C0.454167 5.19167 0 3.13333 0 1.05C0 0.75 0.1 0.5 0.3 0.3C0.5 0.1 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0791667 5.725 0.2375C5.90833 0.395833 6.01667 0.583333 6.05 0.8L6.7 4.3C6.73333 4.56667 6.725 4.79167 6.675 4.975C6.625 5.15833 6.53333 5.31667 6.4 5.45L3.975 7.9C4.30833 8.51667 4.70417 9.1125 5.1625 9.6875C5.62083 10.2625 6.125 10.8167 6.675 11.35C7.19167 11.8667 7.73333 12.3458 8.3 12.7875C8.86667 13.2292 9.46667 13.6333 10.1 14L12.45 11.65C12.6 11.5 12.7958 11.3875 13.0375 11.3125C13.2792 11.2375 13.5167 11.2167 13.75 11.25L17.2 11.95C17.4333 12.0167 17.625 12.1375 17.775 12.3125C17.925 12.4875 18 12.6833 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z" fill="#666A70" />
                </svg></InputGroup.Text>
                <Form.Control required
                  type="text" name="phone"  placeholder={t('contact.Mobile')} />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text><svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                  <path d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z" fill="#666A70" />
                </svg></InputGroup.Text>
                <Form.Control required name="address" placeholder={t('contact.Address')}
                />
              </InputGroup>
              <InputGroup className='text-area-group'>
                <InputGroup.Text><svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                  <path d="M0 9.96875V8H7V9.96875H0ZM0 6.03125V4.0625H11V6.03125H0ZM0 2.09375V0.125H11V2.09375H0ZM9 15.875V12.848L14.525 7.43398C14.675 7.28633 14.8417 7.17969 15.025 7.11406C15.2083 7.04844 15.3917 7.01562 15.575 7.01562C15.775 7.01562 15.9667 7.05254 16.15 7.12637C16.3333 7.2002 16.5 7.31094 16.65 7.45859L17.575 8.36914C17.7083 8.5168 17.8125 8.68086 17.8875 8.86133C17.9625 9.0418 18 9.22227 18 9.40273C18 9.5832 17.9667 9.76777 17.9 9.95645C17.8333 10.1451 17.725 10.3133 17.575 10.4609L12.075 15.875H9ZM10.5 14.3984H11.45L14.475 11.3961L14.025 10.9285L13.55 10.4855L10.5 13.4633V14.3984ZM14.025 10.9285L13.55 10.4855L14.475 11.3961L14.025 10.9285Z" fill="#666A70" />
                </svg></InputGroup.Text>
                <Form.Control required as="textarea" name="message"   placeholder={t('contact.Write')}/>
              </InputGroup>
              <button type="submit">{t('contact.Send')}</button>
            </form>
          </Col>
        </Row>
        <div className='d-flex align-items-center justify-content-between flex-column flex-lg-row my-5 pt-5 contact-bottom' >
          <h4 className='mb-0 wow animate__fadeInLeft' data-wow-delay=".4s">{t('contact.Stay Connected')}</h4>
          <Form className='mail-form mt-4 mt-lg-0 wow animate__fadeInRight' data-wow-delay=".4s">
            <input placeholder={t('contact.Enter')} />
            <button type='button'>{t('contact.Submit')}</button>
          </Form>
        </div>
      </Container>
      <Modal
        show={show}
        className='sccessModal'
        onHide={() => setShow(false)}
        centered
        keyboard={false}
      >

        <Modal.Body className='text-center'>
          <span className='mb-4 d-block'>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
            </svg>
          </span>
          <h1>{t('contact.Success')}</h1>
        </Modal.Body>
      </Modal>

      <Modal
        show={showerr}
        className='sccessModal'
        onHide={() => setShowerr(false)}
        centered
        keyboard={false}
      >

        <Modal.Body className='text-center'>
          <span className='mb-4 d-block err'>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
            </svg>
          </span>
          <h1>{t('contact.wrong')}</h1>
        </Modal.Body>

      </Modal>


    </div>
  )
}

export default Contact