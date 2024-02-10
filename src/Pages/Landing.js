import React from 'react'
import Home from '../Components/Home/Home'
import About from '../Components/About/about'
import Services from '../Components/Services/Services'
import Whyus from '../Components/Whyus/Whyus'
import Contact from '../Components/Contact/contact'
import Features from '../Components/Features/Features'
import Benfites from '../Components/Benfites/Benfites'

const Landing = () => {
    return (
        <div>
            <Home />
            <About />
            <Features/>
            <Services />
            <Whyus />
            <Benfites />
            <Contact />
        </div>
    )
}

export default Landing