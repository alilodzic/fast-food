import "./../../utils/sass/style.scss"
const Nevbar = () => {
    return (
        <>

            {/* Humberger Begin */}
            <div className="humberger__menu__overlay" />
            <div className="humberger__menu__wrapper">
                <div className="humberger__menu__logo">
                    <a href="./index.html"><img src="img/humberger/humberger-logo.png" alt="" /></a>
                </div>
                <nav className="humberger__menu__nav mobile-menu">
                    <ul>
                        <li>Home</li>
                        <li>Recipes</li>
                        <li>Dinner</li>
                        <li>Desserts</li>
                        <li className="dropdown">Pages
                            <ul className="dropdown__menu">
                                <li>Categories Grid</li>
                                <li>Categories List</li>
                                <li>Single Post</li>
                                <li>Sign In</li>
                                <li>404</li>
                                <li>Typography</li>humberger__menu__title
                            </ul>
                        </li>
                        <li><a href="./about.html">About</a></li>
                        <li><a href="./contact.html">Contact</a></li>
                    </ul>
                </nav>
                <div id="mobile-menu-wrap" />
                <div className="humberger__menu__about">
                    <div className="humberger__menu__title sidebar__item__title">
                        <h6>About me</h6>
                    </div>
                    <img src="img/humberger/humberger-about.jpg" alt="" />
                    <h6>Hi every one! I,m Lena Mollein.</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.</p>
                    <div className="humberger__menu__about__social sidebar__item__follow__links">
                        <i className="fa fa-facebook" />
                        <i className="fa fa-twitter" />
                        <i className="fa fa-youtube-play" />
                        <i className="fa fa-instagram" />
                        <i className="fa fa-envelope-o" />
                    </div >
                </div >
                <div className="humberger__menu__subscribe">
                    <div className="humberger__menu__title sidebar__item__title">
                        <h6>Subscribe</h6>
                    </div>
                    <p>Subscribe to our newsletter and get our newest updates right on your inbox.</p>
                    <form action="#">
                        <input type="text" className="email-input" placeholder="Your email" />
                        <label htmlFor="agree-check">
                            I agree to the terms &amp; conditions
                            <input type="checkbox" id="agree-check" />
                            <span className="checkmark" />
                        </label>
                        <button type="submit" className="site-btn">Subscribe</button>
                    </form>
                </div>
            </div >



        </>
    )
}

export default Nevbar