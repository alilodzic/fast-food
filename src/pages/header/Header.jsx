import React from 'react'
import {  Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from "./../../utils/img/logo.png"
const Header = () => {
    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <Row>
                        <div className="col-lg-2 col-md-1 col-6 order-md-1 order-1">
                            <div className="header__humberger">
                                <i className="fa fa-bars humberger__open" />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-10 order-md-2 order-3">
                            <nav className="header__menu">
                                <ul>
                                    <li  className="active"><NavLink to={'/'}>Home</NavLink></li>
                                    <li><NavLink to="#">Recipes</NavLink>
                                        <div className="header__megamenu__wrapper">
                                            <div className="header__megamenu">
                                                <div className="header__megamenu__item">
                                                    <div className="header__megamenu__item--pic set-bg" data-setbg="img/megamenu/p-1.jpg">
                                                        <div className="label">Vegan</div>
                                                    </div>
                                                    <div className="header__megamenu__item--text">
                                                        <h5><a href="#">How to Make a Milkshake With Any Ice Cream ...</a>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="header__megamenu__item">
                                                    <div className="header__megamenu__item--pic set-bg" data-setbg="img/megamenu/p-2.jpg">
                                                        <div className="label">Vegan</div>
                                                    </div>
                                                    <div className="header__megamenu__item--text">
                                                        <h5><a href="#">How to Make a Milkshake With Any Ice Cream ...</a>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="header__megamenu__item">
                                                    <div className="header__megamenu__item--pic set-bg" data-setbg="img/megamenu/p-3.jpg">
                                                        <div className="label">Vegan</div>
                                                    </div>
                                                    <div className="header__megamenu__item--text">
                                                        <h5><a href="#">How to Make a Milkshake With Any Ice Cream ...</a>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="header__megamenu__item">
                                                    <div className="header__megamenu__item--pic set-bg" data-setbg="img/megamenu/p-4.jpg">
                                                        <div className="label">Vegan</div>
                                                    </div>
                                                    <div className="header__megamenu__item--text">
                                                        <h5><a href="#">How to Make a Milkshake With Any Ice Cream ...</a>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="header__megamenu__item">
                                                    <div className="header__megamenu__item--pic set-bg" data-setbg="img/megamenu/p-5.jpg">
                                                        <div className="label">Vegan</div>
                                                    </div>
                                                    <div className="header__megamenu__item--text">
                                                        <h5><a href="#">How to Make a Milkshake With Any Ice Cream ...</a>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><a href="#">Dinner</a></li>
                                    <li><a href="#">Desserts</a></li>
                                    <li className="dropdown"><a href="#">Pages</a>
                                        <ul className="dropdown__menu">
                                            <li><a href="./categories-grid.html">Categories Grid</a></li>
                                            <li><a href="./categories-list.html">Categories List</a></li>
                                            <li><a href="./single-post.html">Single Post</a></li>
                                            <li><a href="./signin.html">Sign In</a></li>
                                            <li><a href="./404.html">404</a></li>
                                            <li><a href="./typography.html">Typography</a></li>
                                        </ul>
                                    </li>
                                    <li><NavLink to={'about'}>About</NavLink></li>
                                    <li><NavLink to={'contact'}>Contact</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-2 col-md-1 col-6 order-md-3 order-2">
                            <div className="header__search">
                                <i className="fa fa-search search-switch" />
                            </div>
                        </div>
                    </Row>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <div className="header__btn">
                            <a href="./signin.html" className="primary-btn">Subscribe</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="header__logo">
                            <a href="./index.html"><img src={logo} alt="" /></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="header__social">
                            <a href="#"><i className="fa fa-facebook" /></a>
                            <a href="#"><i className="fa fa-twitter" /></a>
                            <a href="#"><i className="fa fa-youtube-play" /></a>
                            <a href="#"><i className="fa fa-instagram" /></a>
                            <a href="#"><i className="fa fa-envelope-o" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header