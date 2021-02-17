import React,{ useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

import { Styles } from "./OneToOneCoaching.styles"

const OneToOneCoaching = () => {
    const [value, onChange] = useState(new Date());
    return (
        <Styles>
        {/* Main Wrapper */}
            <div className="main-wrapper instructor-page">

                {/* Header 2 */}
                {/* <HeaderTwo /> */}
                {/* Breadcroumb */}
               {/* <BreadcrumbBox title="Instructors" />*/}

                {/* Instructor Area */}
                <section className="instructor-area">
                    <Container>
                        <Row>
                            <Col lg="3" md="4" sm="6" >
                                <div className="instructor-item">
                                    <Link to={"/instructor-details"}><img src={`/assets/images/`} alt="" className="img-fluid" /></Link>
                                    <div className="img-content text-center">
                                        <h5><Link to={"/instructor-details"}>data.personName</Link></h5>
                                        <p>data.personTitle</p>
                                        <ul className="list-unstyled list-inline">
                                            <li className="list-inline-item"><a href=""><i className="fab fa-facebook-f"></i></a></li>
                                            <li className="list-inline-item"><a href=""><i className="fab fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href=""><i className="fab fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                                

                           {/* <Col md="12" className="text-center">
                                <Pagination />
                        </Col>*/}
                        </Row>
                    </Container>
                </section>

                <div className="text-center">
                    <Calendar 
                        onChange={onChange}
                        value={value}  />
                </div>

            </div>
        </Styles>
    )
}

export default OneToOneCoaching