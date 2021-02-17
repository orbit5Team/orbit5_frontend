import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

import { Styles } from "./CourseFilter.styles"
import courses from "./courses.data.json"

const CourseFilter = () => {
    return (
        <Styles>
            <section className="course-filter">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="sec-title text-center">
                                <h4>{courses.secTitle}</h4>
                            </div>
                        </Col>
                        <Col md="12">
                            <div className="filter-btns text-center">
                                <ul className="filter-btn-list list-unstyled list inline">
                                    <li data-target="*" className="active list-inline-item">All Courses</li>
                                    <li data-target="desi" className="list-inline-item">Web Design</li>
                                    <li data-target="deve" className="list-inline-item">Web Development</li>
                                    <li data-target="seo" className="list-inline-item">Seo</li>
                                    <li data-target="prog" className="list-inline-item">Programming</li>
                                </ul>
                            </div>
                            <Row className="filter-items">
                            {
                                courses.dataList.map(course => (
                                    <Col lg="4" md="6" key={course.id} data-id={course.targetId}>
                                        <div className="course-item">
                                            <Link to={course.courseLink}>
                                                <div className="course-image" style={{backgroundImage: `url/assets/images/${course.imgUrl})`}}>
                                                    <div className="author-img d-flex">
                                                        <div className="img">
                                                            <img src={`${course.authorImg}`} alt="Author " />
                                                        </div>
                                                        <div className="title">
                                                            <p>{course.authorName}</p>
                                                            <span>{course.authorCourses}</span>
                                                        </div>
                                                    </div>
                                                    <div className="course-price">
                                                        <p>{course.price}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="course-content">
                                                <h6 className="heading"><Link to={course.courseLink}>{course.courseTitle}</Link></h6>
                                                <p className="desc">{course.courseDesc}</p>
                                                <div className="course-face d-flex justify-content-between">
                                                    <div className="duration">
                                                        <p><i className="las la-clock"></i>120</p>
                                                    </div>
                                                    <div className="rating">
                                                        <ul className="list-unstyled list-inline">
                                                            <li className="list-inline-item"><i className="las la-star"></i></li>
                                                            <li className="list-inline-item"><i className="las la-star"></i></li>
                                                            <li className="list-inline-item"><i className="las la-star"></i></li>
                                                            <li className="list-inline-item"><i className="las la-star"></i></li>
                                                            <li className="list-inline-item"><i className="las la-star-half-alt"></i>
                                                            </li>
                                                            <li className="list-inline-item">(4.5)</li>
                                                        </ul>
                                                    </div>
                                                    <div className="student">
                                                        <p><i className="las la-chair"></i>60</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))
                            }
                            </Row>
                        </Col>
                        <Col md="12" className="text-center">
                            <div className="viewall-btn">
                                <Link to={"/course-grid"}>View All Courses</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    )
}

export default CourseFilter