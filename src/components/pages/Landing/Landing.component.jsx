import React from 'react'

import "./Landing.styles.jsx"
import Header from "../../ui-elements/Header/Header.component"
import HeroSlider from "../../ui-elements/HeroSlider/HeroSlider.component"
import IconBox from "../../ui-elements/IconBox/IconBox.component"
import AboutUs from "../../ui-elements/AboutUs/AboutUs.component"
import CourseFilter from "../../ui-elements/CourseFilter/CourseFilter.component"
import TestimonialSlider from '../../ui-elements/TestimonialSlider/TestimonialSlider.component.jsx'
import FaqEvent from "../../ui-elements/FaqEvent/FaqEvent.component"
import TeamSlider from "../../ui-elements/TeamSlider/TeamSlider.component"
import HomeBlog from "../../ui-elements/HomeBlog/HomeBlog.component"
import NewsletterForm from "../../ui-elements/NewsletterForm/NewsletterForm.component"
import Footer from "../../ui-elements/Footer/Footer.component"

const Landing = () => {
    return (
        <div>
            <Header/>

            <HeroSlider/>

            <IconBox/>

            <AboutUs/>

            <CourseFilter/>

            <TestimonialSlider/>

            <FaqEvent/>

            <TeamSlider/>

            <HomeBlog/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <NewsletterForm/>

            <Footer/>
        </div>
    )
}

export default Landing