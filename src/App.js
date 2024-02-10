import './App.css';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet'
import { ParallaxProvider } from 'react-scroll-parallax';
import 'animate.css';
import 'wowjs/css/libs/animate.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import Policy from './Pages/Policy';
import NotFoundPage from './Pages/NotFound';
import { useTranslation } from 'react-i18next';



function App() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const WOW = require('wowjs');
    const wow = new WOW.WOW({
      boxClass: 'wow', // Class name to apply to the element when it becomes visible
      animateClass: 'animated', // Class name to apply to the animated elements
      offset: 0, // Distance from the element to trigger the animation
      mobile: true, // Whether to enable animation on mobile devices
      live: false // Whether to update animations on DOM changes (e.g., AJAX)
    });
    wow.init();

    if (i18n.language === 'ar') {
      import('bootstrap/dist/css/bootstrap.rtl.min.css');
    } else {
      import('bootstrap/dist/css/bootstrap.min.css');


    }
  }, []);




  return (
    <ParallaxProvider>
      <Router>
        <div className='App' lang={i18n.language} dir={i18n.language === "ar" ? "rtl" : "ltr"}>
          <Helmet>
            <title>{t('App.title')}</title>
          </Helmet>
          <Header />
          <Routes>
            <Route path="/policy" exact element={<Policy />} />
            <Route path="/" exact element={<Landing />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ParallaxProvider>

  );
}

export default App;
