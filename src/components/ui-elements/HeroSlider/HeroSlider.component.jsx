import React,{ useState } from 'react';
import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
// css
import 'swiper/css/swiper.min.css';

import { Styles } from "./HeroSlider.styles";
import Slider1 from "../../../assets/slider-1.jpg"
import Slider2 from "../../../assets/slider-2.jpg"

const HeroSlider = () => {
    const [slideImage, setSlideImage] = useState([
        {
            "id": "1",
            "backgroundImage": Slider1,
            "uniqClass": "slider-box slider-box1",
            "title": "Welcome To Edulyn.",
            "desc": "Best University In This Region Join With Us Today",
            "btnOneLink": "course-grid",
            "btnTwoLink": "contact"
        },
        {
            "id": "2",
            "backgroundImage": Slider2,
            "uniqClass": "slider-box slider-box2 text-right",
            "title": "Welcome To Edulyn.",
            "desc": "Best University In This Region Join With Us Today",
            "btnOneLink": "course-grid",
            "btnTwoLink": "contact"
        }
    ])

    const params = {
        slidesPerView: 1,
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        watchSlidesVisibility: true,
        effect: 'fade',
        navigation: {
            nextEl: '.slider-button-next',
            prevEl: '.slider-button-prev'
        },
        renderPrevButton: () => <div className="swiper-btn slider-button-prev"><i class="fas fa-chevron-left"></i></div>,
        renderNextButton: () => <div className="swiper-btn slider-button-next"><i class="fas fa-chevron-right"></i></div>
    }

    return (
        <Styles>
            <section className="hero-slider-area">
                <Swiper {...params}>
                {
                    slideImage.map((image) => (
                        <div className="slider-item" key={image.id}>
                            <div className="image-container">
                                <img src={image.backgroundImage} alt={image.backgroundImage}/>
                            </div>
                            <div className="slider-table">
                                <div className="slider-tablecell">
                                    <Container>
                                        <Row>
                                            <Col md="12">
                                                <div className={image.uniqClass}>
                                                    <div className="slider-title">
                                                        <p>{image.title}</p>
                                                    </div>
                                                    <div className="slider-desc">
                                                        <h1>{image.desc}</h1>
                                                    </div>
                                                    <div className="slider-btn">
                                                        <Link className="slider-btn1" to={`/${image.btnOneLink}`}>Our Courses</Link>
                                                        <Link className="slider-btn2" to={`/${image.btnTwoLink}`}>Contact Us</Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </Swiper>
            </section>
        </Styles>
    )
}

export default HeroSlider;