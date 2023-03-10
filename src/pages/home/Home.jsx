import sidbar_about from "./../../utils/img/sidebar/sidebar-about.jpg";
import banner from "./../../utils/img/sidebar/banner.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";
import Postcategory from "../../component/post_category/Post_category";
import { data } from "./../../json/Data";
import Post from "../../component/post/Post";
import Postmodeltwo from "../../component/post/Postmodeltwo";
import { useState } from "react";


const ipostPerRow = 4;

const Home = () => {
  const length = data.posts.length;
  const [next, setNext] = useState(ipostPerRow);
  const handleMorePost = () => {
      setNext(next + ipostPerRow);
    };
  
  return (
    <>
      <div>
        <section className="hero">
          <div className="hero__slider owl-carousel">
            <div className="hero__item">
              <Container fluid>
                <Row>
                  <Col lg={6} className="p-0">
                    <Post
                      data={data.posts[Math.floor(Math.random() * length)]}
                    />
                  </Col>
                  <Col lg={3} md={6} className="p-0">
                    <Post
                      data={data.posts[Math.floor(Math.random() * length)]}
                      type="small"
                    />
                    <Post
                      data={data.posts[Math.floor(Math.random() * length)]}
                      type="small"
                    />
                  </Col>
                  <Col lg={3} md={6} className="p-0">
                    <Post
                      data={data.posts[Math.floor(Math.random() * length)]}
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </section>
        {/* Hero Section End */}
        {/* Categories Section Begin */}
        <section className="categories spad">
          <Container>
            <Row>
              {data.Post_category.map((el) => (
                <Postcategory key={el.id} Data={el} />
              ))}
            </Row>
          </Container>
          
          <div className="categories__post">
            <Container>
              <Row>

                <Col lg={8} md={8}>
                  <div className="categories__post__item categories__post__item--large">
                    <div
                      className="categories__post__item__pic set-bg"
                      data-setbg="img/categories/categories-post/cp-1.jpg">
                      <div className="post__meta">
                        <h4>08</h4>
                        <span>Aug</span>
                      </div>
                    </div>
                    <div className="categories__post__item__text">
                      <ul className="post__label--large">
                        <li>Vegan</li>
                        <li>Desserts</li>
                      </ul>
                      <h3>
                        <a href="#">
                          The Absolute Best Way to Cook Steak Perfectly,
                          According to Wayyy Too Many Tests
                        </a>
                      </h3>
                      <ul className="post__widget">
                        <li>
                          by <span>Admin</span>
                        </li>
                        <li>3 min read</li>
                        <li>20 Comment</li>
                      </ul>
                      <p>
                        Dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur excepteur sint ...
                      </p>
                      <a href="#" className="primary-btn">
                        Read more
                      </a>
                      <div className="post__social">
                        <span>Share</span>
                        <a href="#">
                          <i className="fa fa-facebook" /> <span>82</span>
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter" /> <span>24</span>
                        </a>
                        <a href="#">
                          <i className="fa fa-envelope-o" /> <span>08</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <Row>
                      {data.posts?.slice(0, next)?.map( el => <Postmodeltwo data={el} /> ) }

                   {next < data.posts.length && (
                    <div className="col-lg-12 text-center">
                    <div className="load__more__btn">
                      <Button  variant="outline-dark" onClick={handleMorePost}>Load more</Button>
                    </div>
                  </div>
                   ) }
                
                  </Row>
                </Col>

                <Col lg={4} md={4}>
                  <div className="sidebar__item">
                    <div className="sidebar__about__item">
                      <div className="sidebar__item__title">
                        <h6>About me</h6>
                      </div>
                      <img src={sidbar_about} alt="" />
                      <h6>
                        Hi every one! I,m <span>Lena Mollein.</span>
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <a href="#" className="primary-btn">
                        Read more
                      </a>
                    </div>
                    <div className="sidebar__follow__item">
                      <div className="sidebar__item__title">
                        <h6>Follow me</h6>
                      </div>
                      <div className="sidebar__item__follow__links">
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fa fa-youtube-play" />
                        </a>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fa fa-envelope-o" />
                        </a>
                      </div>
                    </div>
                    <div className="sidebar__feature__item">
                      <div className="sidebar__item__title">
                        <h6>Feature Posts</h6>
                      </div>
                      <div
                        className="sidebar__feature__item__large set-bg"
                        data-setbg="img/sidebar/feature-post.jpg">
                        <div className="sidebar__feature__item__large--text">
                          <span>Dinner</span>
                          <h5>
                            <a href="#">
                              This Japanese Way of Making Iced Coffee Is a
                              Game...
                            </a>
                          </h5>
                        </div>
                      </div>
                      <div className="sidebar__feature__item__list">
                        <div className="sidebar__feature__item__list__single">
                          <div className="post__meta">
                            <h4>08</h4>
                            <span>Aug</span>
                          </div>
                          <div className="post__text">
                            <span>Dinner</span>
                            <h5>
                              <a href="#">
                                Grilled Potato and Green Bean Salad
                              </a>
                            </h5>
                          </div>
                        </div>
                        <div className="sidebar__feature__item__list__single">
                          <div className="post__meta">
                            <h4>05</h4>
                            <span>Aug</span>
                          </div>
                          <div className="post__text">
                            <span>Smoothie</span>
                            <h5>
                              <a href="#">
                                The $8 French Ros?? I Buy in Bulk Every Summer
                              </a>
                            </h5>
                          </div>
                        </div>
                        <div className="sidebar__feature__item__list__single">
                          <div className="post__meta">
                            <h4>26</h4>
                            <span>jul</span>
                          </div>
                          <div className="post__text">
                            <span>Desert</span>
                            <h5>
                              <a href="#">
                                Ina Garten's Skillet-Roasted Lemon Chicken
                              </a>
                            </h5>
                          </div>
                        </div>
                        <div className="sidebar__feature__item__list__single">
                          <div className="post__meta">
                            <h4>16</h4>
                            <span>jul</span>
                          </div>
                          <div className="post__text">
                            <span>Vegan</span>
                            <h5>
                              <a href="#">
                                The Best Weeknight Baked Potatoes, 3 Creative
                                Ways
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar__item__banner">
                      <img src={banner} alt="" />
                    </div>
                    <div className="sidebar__item__categories">
                      <div className="sidebar__item__title">
                        <h6>Categories</h6>
                      </div>
                      <ul>
                        <li>
                          <a href="#">
                            Recipes <span>128</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Dinner <span>32</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Dessert <span>86</span>
                          </a>
                        </li>
                        <li className="p-left">
                          <a href="#">
                            Smothie <span>25</span>
                          </a>
                        </li>
                        <li className="p-left">
                          <a href="#">
                            Drinks <span>36</span>
                          </a>
                        </li>
                        <li className="p-left">
                          <a href="#">
                            Cakes <span>15</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Vegan <span>63</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Weightloss <span>27</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="sidebar__subscribe__item">
                      <div className="sidebar__item__title">
                        <h6>Subscribe</h6>
                      </div>
                      <p>
                        Subscribe to our newsletter and get our newest updates
                        right on your inbox.
                      </p>
                      <form action="#">
                        <input
                          type="text"
                          className="email-input"
                          placeholder="Your email"
                        />
                        <label htmlFor="s-agree-check">
                          I agree to the terms &amp; conditions
                          <input type="checkbox" id="s-agree-check" />
                          <span className="checkmark" />
                        </label>
                        <button type="submit" className="site-btn">
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
