import React,{ useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import { Styles } from "./StickyMenu.styles"

const StickyMenu = () => {
    const stickyMenuRef = useRef();
    const location = useLocation();

    useEffect(() => {
        if(!!!stickyMenuRef.current) return;
        window.addEventListener("scroll", () => {
            if(window.scrollY > 160){
                stickyMenuRef.current.classList.add("sticky");
            }else if((location.pathname !== "/") && (window.scrollY >= 0)){
                stickyMenuRef.current.classList.add("sticky");
            }else{
                if(stickyMenuRef.current.classList){
                    stickyMenuRef.current.classList.remove("sticky");
                }
            }
        })
    },[])
    console.log(window.scrollY >= 0)
    return (
        <Styles>
            <section className="sticky-menu" ref={stickyMenuRef}>
                <Container>
                    <Row>
                        <Col md="3">
                            <div className="logo">
                                <Link to="/"><img src="" alt="Logo" /></Link>
                            </div>
                        </Col>
                        <Col md="9">
                            <div className="menu-box d-flex justify-content-around">
                                <ul className="nav menu-nav">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Courses</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Instructor</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="/" data-toggle="dropdown">Services <i className="las la-angle-down"></i></Link>
                                        <ul className="dropdown list-unstyled">
                                            <li className="nav-item"><Link className="nav-link" to="/services/onetoonecoaching">One-To-One Coaching</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="/">Service 2</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="/">Service 3</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="apply-btn">
                                    <Link to="/registration"><i className="las la-clipboard-list"></i>Apply Now</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    )
}

export default StickyMenu