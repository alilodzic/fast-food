import logo from "./../../utils/img/logo.png"
import avatar from "./../../utils/img/footer/instagram-avatar.jpg"
const Footer = () => {
  return (
    <footer className="footer">
  <div className="container-fluid">
    <div className="footer__instagram">
      <div className="footer__instagram__avatar">
        <div className="footer__instagram__avatar--pic">
          <img src={avatar} alt="" />
        </div>
        <div className="footer__instagram__avatar--text">
          <h5>@ foodieblog</h5>
          <span>23,7k follower</span>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-4 col-6">
          <div className="footer__instagram__item set-bg" data-setbg="img/footer/ip-1.jpg"  />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4 col-6">
          <div className="footer__instagram__item set-bg" data-setbg="img/footer/ip-2.jpg" />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4 col-6">
          <div className="footer__instagram__item set-bg" data-setbg="img/footer/ip-3.jpg" />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4 col-6">
          <div className="footer__instagram__item set-bg" data-setbg="img/footer/ip-4.jpg" />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4 col-6">
          <div className="footer__instagram__item set-bg" data-setbg="img/footer/ip-5.jpg" />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4 col-6">
          <div className="footer__instagram__item set-bg" data-setbg="img/footer/ip-6.jpg" />
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="footer__text">
          <div className="footer__logo">
            <a href="#"><img src={logo} alt="" /></a>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut<br /> labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
            commodo viverra<br /> maecenas accumsan lacus vel facilisis. </p>
          <div className="footer__social">
            <a href="#"><i className="fa fa-facebook" /></a>
            <a href="#"><i className="fa fa-twitter" /></a>
            <a href="#"><i className="fa fa-instagram" /></a>
            <a href="#"><i className="fa fa-youtube-play" /></a>
            <a href="#"><i className="fa fa-envelope-o" /></a>
          </div>
        </div>
        <div className="footer__copyright">
          <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer