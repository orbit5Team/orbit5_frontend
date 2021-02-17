import React from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Search from "./Search/Search.component"
import Sidebar from "./Sidebar/Sidebar.component"

const NavBar = () => {
    return (
        <section className="main-menu">
            <Container>
                <Row>
                    <Col md="12">
                        <div className="main-menu-box">
                            <div className="menu-box d-flex justify-content-between">
                                <ul className="nav menu-nav">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="/" data-toggle="dropdown">Services&nbsp;<i className="las la-angle-down"></i></Link>
                                        <ul className="dropdown list-unstyled">
                                            <li className="nav-item"><Link className="nav-link" to="/services/onetoonecoaching">One-To-One Coaching</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="/">Weekly Webinars</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="/">Corporate Workshops</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Blog</Link>
                                    </li>
    
                                </ul>
                                <ul className="nav search-cart-bar">
                                    {/*<li className="nav-item search-box">
                                        <Search/>
                                    </li>
                                    <li className="nav-item cart-box">
                                        <Link to="/cart" className="nav-link nav-cart">
                                            <i className="las la-shopping-bag"></i>
                                        </Link>
                                    </li>
                                    <li className="nav-item side-box">
                                        <Sidebar/>
                                    </li>*/}
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default NavBar