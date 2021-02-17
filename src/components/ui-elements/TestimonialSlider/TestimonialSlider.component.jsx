import React,{ useState } from 'react'
import Swiper from 'react-id-swiper';
import { Container, Row, Col } from 'react-bootstrap';

import { Styles } from "./TestimonialSlider.styles"

const TestimonialSlider = () => {
    const [testimonial, setTestimonial] = useState(
        {
            "secTitle": "Lets See What Our Valuable Students Think About Us. Their Testimonials.",
            "backgroundImage": "vd-bg.jpg",
            "dataList": [
                {
                    "id": "1",
                    "testimonialTitle": "It is great to be a part of this community.",
                    "testimonialDesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitation maior. Placeat repellat, et totam optio. Sequi qui laborum ratione cumque tempo totam voluptatum.",
                    "authorImg": "testimonial-1.jpg",
                    "authorName": "David Show",
                    "authorTitle": "Developer"
                },
                {
                    "id": "2",
                    "testimonialTitle": "It is great to be a part of this community.",
                    "testimonialDesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitation maior. Placeat repellat, et totam optio. Sequi qui laborum ratione cumque tempo totam voluptatum.",
                    "authorImg": "testimonial-2.jpg",
                    "authorName": "Tom Parker",
                    "authorTitle": "Programmer"
                }
            ]
        }
    )

    const params = {
        slidesPerView: 2,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        spaceBetween: 30,
        watchSlidesVisibility: true,
        pagination: {
            el: '.slider-dot.text-center',
            clickable: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            }
        }
    };

    return (
        <Styles> 
            <section className="testimonial-area" style={{ backgroundImage: `{testimonial.backgroundImage}` }}>
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="sec-title text-center">
                                <h4>{testimonial.secTitle}</h4>
                            </div>
                        </Col>
                        <Col md="12" className="testimonial-slider">
                            <Swiper {...params}>
                            {
                                testimonial.dataList.map(data => (
                                    <div className="slider-item" key={data.id}>
                                        <div className="desc">
                                            <h5>{data.testimonialTitle}</h5>
                                            <p>{data.testimonialDesc}</p>
                                        </div>
                                        <div className="writer">
                                            <img src={`/assets/images/${data.authorImg}`} className="slider-image" alt={data.authorImg} />
                                            <h6>{data.authorName}</h6>
                                            <p>{data.authorTitle}</p>
                                        </div>
                                    </div>
                                ))
                            }
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    )
}

export default TestimonialSlider