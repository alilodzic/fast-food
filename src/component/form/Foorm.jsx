import React from "react";

const Foorm = () => {
  return (
    <div className="signin">
      <div className="signin__warp">
        <div className="signin__content">
          <div className="signin__logo">
            <a href="#">
              <img src="img/siign-in-logo.png" alt="" />
            </a>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt labore dolore magna aliqua viverra.
          </p>
          <div className="signin__form">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="tab"
                  href="#tabs-1"
                  role="tab"
                  aria-selected="false">
                  Sign up
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#tabs-2"
                  role="tab"
                  aria-selected="false">
                  Sign in
                </a>
              </li>
              <li className="nav-item"></li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane " id="tabs-1" role="tabpanel">
                <div className="signin__form__text">
                  <p>with your social network :</p>
                  <div className="signin__form__signup__social">
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#" className="twitter">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#" className="google">
                      <i className="fa fa-google" />
                    </a>
                  </div>
                  <div className="divide">or</div>
                  <form action="#">
                    <input type="text" placeholder="User Name*" />
                    <input type="text" placeholder="Password" />
                    <input type="text" placeholder="Confirm Password" />
                    <input type="text" placeholder="Email Address" />
                    <input type="text" placeholder="Full Name" />
                    <label htmlFor="sign-agree-check">
                      I agree to the terms &amp; conditions
                      <input type="checkbox" id="sign-agree-check" />
                      <span className="checkmark" />
                    </label>
                    <button type="submit" className="site-btn">
                      Register Now
                    </button>
                  </form>
                </div>
              </div>
              <div className="tab-pane active" id="tabs-2" role="tabpanel">
                <div className="signin__form__text">
                  <p>with your social network :</p>
                  <div className="signin__form__signup__social">
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#" className="twitter">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#" className="google">
                      <i className="fa fa-google" />
                    </a>
                  </div>
                  <div className="divide">or</div>
                  <form action="#">
                    <input type="text" placeholder="User Name*" />
                    <input type="text" placeholder="Password" />
                    <button type="submit" className="site-btn">
                      Sign In
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foorm;
