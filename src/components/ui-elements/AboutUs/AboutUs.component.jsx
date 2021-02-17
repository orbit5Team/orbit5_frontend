import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom"

import { Styles } from "./AboutUs.styles"

export default function AboutUs() {
    return (
        <Styles>
            <section className="about-us">
                <Container>
                    <Row>
                        <Col md="6">
                            <div className="about-image">
                                <img src="" className="main-img" alt="About Us Image" />
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="about-content">
                                <h4 className="about-title">We Have Experienced Professionals & We Do Our Best To Achieve Your Goal. Your Happiness Is Our First Priority.</h4>
                                <p className="about-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis error ut provident vel repellendus nihil atque possimus aliquam, mollitia tempora neque voluptate debitis illum veniam.Numquam blanditiis dignissimos laboriosam illum ut officia.<span>Nam aperiam autem nesciunt perferendis id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas nulla sequi pariatur quam animi ipsum molestias assumenda cumque.</span></p>
                                {/*<Row>
                                    <Col sm="4">
                                        <div className="counter-box box1 text-center">
                                            <h3><CountUp end={970} duration={5} delay={1.5} /><i className="las la-plus"></i></h3>
                                            <p>Happy Students</p>
                                        </div>
                                    </Col>
                                    <Col sm="4">
                                        <div className="counter-box box2 text-center">
                                            <h3><CountUp end={130} duration={5} delay={1.5} /><i className="las la-plus"></i></h3>
                                            <p>Teachers</p>
                                        </div>
                                    </Col>
                                    <Col sm="4">
                                        <div className="counter-box box3 text-center">
                                            <h3><CountUp end={340} duration={5} delay={1.5} /><i className="las la-plus"></i></h3>
                                            <p>Courses</p>
                                        </div>
                                    </Col>
                                </Row>*/}
                                <Link className="readmore-btn" to="/about">Read More</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    )
}
