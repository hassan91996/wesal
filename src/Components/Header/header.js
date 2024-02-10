import { Form, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo.svg'
import LogoDark from '../../assets/logo-dark.svg'
import './header.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useParallaxController } from 'react-scroll-parallax';




function Header() {
    const parallaxController = useParallaxController();
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const [navclass, setnavclass] = useState('');
    const [scrollToDiv, setscrollToDiv] = useState(false);
    const [targetEl, settargetEl] = useState('');
    const navTo = (e, ele) => {
        if (e) {
            e.preventDefault();
        }
        if (location.pathname !== '/') {
            navigate('/')
            setscrollToDiv(true)
            setnavclass('')
            settargetEl(ele)
        }
        else {
            var targetElement = document.getElementById(ele);
            var offset = targetElement.offsetTop - 100;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
            let navlinks = document.querySelectorAll('.navbar-nav .nav-link')
            navlinks.forEach(ele => {
                ele.classList.remove('active')
            })
            let nav = document.querySelector(`.navbar-nav [href="/#${ele}"]`);
            nav.classList.add('active')
            if (scrollToDiv) {
                setTimeout(() => {
                    var targetElement = document.getElementById(ele);
                    var offset = targetElement.offsetTop - 100;
                    window.scrollTo({
                        top: offset,
                        behavior: 'smooth'
                    });
                    setscrollToDiv(false)
                    settargetEl('')
                }, 300);
            }

        }
    }
    useEffect(() => {
        if (scrollToDiv) {
            navTo(null, targetEl)
        }
        parallaxController.update();
        // eslint-disable-next-line 
    }, [navigate])
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            if (scrollPosition > 0) {
                setnavclass('white-bg')
            } else {
                setnavclass('')
            }
        };
        if (location.pathname !== "/") {
            setnavclass('white-bg')
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const changeLang = (e) => {
        localStorage.setItem('Lang', e.target.value)
        window.location.reload();
    }
    return (
        <Navbar collapseOnSelect expand="lg" className={`fixed-top ${navclass}`}>
            <Container className='justify-content-between'>
                <div className='d-flex align-items-center justify-content-between d-lg-none  w-100'>
                    <div className='d-flex align-items-center'>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Form.Select className='d-flex d-lg-none' onChange={(e) => changeLang(e)} value={i18n.language}>
                            <option value="ar">العربية</option>
                            <option value="en">English</option>
                        </Form.Select>
                    </div>
                    <Navbar.Brand className='m-0' as={Link} to="#home" onClick={(e) => navTo(e, 'home')}>
                        <Image src={LogoDark} />
                    </Navbar.Brand>
                </div>
                <Navbar.Collapse className='justify-content-lg-start me-lg-5' id="responsive-navbar-nav">
                    <Nav className="">
                        <Nav.Link onClick={(e) => navTo(e, 'home')} as={Link} to="#home">{t('header.nav.home')}</Nav.Link>
                        <Nav.Link onClick={(e) => navTo(e, 'about')} as={Link} to="#about">{t('header.nav.about')}</Nav.Link>
                        <Nav.Link onClick={(e) => navTo(e, 'features')} as={Link} to="#features">{t('header.nav.features')}</Nav.Link>
                        <Nav.Link onClick={(e) => navTo(e, 'services')} as={Link} to="#services">{t('header.nav.services')}</Nav.Link>
                        <Nav.Link onClick={(e) => navTo(e, 'whyus')} as={Link} to="#whyus">{t('header.nav.benefits')}</Nav.Link>
                        <Nav.Link onClick={(e) => navTo(e, 'compatative')} as={Link} to="#compatative">{t('header.nav.compatitive')}</Nav.Link>
                        <Nav.Link onClick={(e) => navTo(e, 'contact')} as={Link} to="#contact">{t('header.nav.contact')}</Nav.Link>
                        <Form.Select className='d-none d-lg-flex' onChange={(e) => changeLang(e)} value={i18n.language}>
                            <option value="ar">العربية</option>
                            <option value="en">English</option>
                        </Form.Select>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand className='light-logo m-0' style={{ display: navclass === "white-bg" ? 'none' : 'inline-block' }} as={Link} to="#home" onClick={(e) => navTo(e, 'home')}>
                    <Image src={Logo} />
                </Navbar.Brand>
                <Navbar.Brand className='dark-logo m-0' style={{ display: navclass !== "white-bg" ? 'none' : 'inline-block' }} as={Link} to="#home" onClick={(e) => navTo(e, 'home')}>
                    <Image src={LogoDark} />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}
export default Header;