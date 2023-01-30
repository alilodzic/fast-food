import postImage from './../../utils/img/categories/single-post/single-post-hero.jpg'
import desc from "./../../utils/img/categories/single-post/single-post-desc.jpg"
const Singlepost = () => {
    return (
        <section className="single-post spad">
            <div className="single-post__hero set-bg" style={{backgroundImage : `url(${postImage})`}} />
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <div className="single-post__title">
                            <div className="single-post__title__meta">
                                <h2>08</h2>
                                <span>Aug</span>
                            </div>
                            <div className="single-post__title__text">
                                <ul className="label">
                                    <li>Vegan</li>
                                    <li>Desserts</li>
                                </ul>
                                <h4>Weight loss diet: Ditching this one food can help you slim down fast - what is it?</h4>
                                <ul className="widget">
                                    <li>by Admin</li>
                                    <li>3 min read</li>
                                    <li>20 Comment</li>
                                </ul>
                            </div>
                        </div>
                        <div className="single-post__social__item">
                            <ul>
                                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                <li><a href="#"><i className="fa fa-instagram" /></a></li>
                                <li><a href="#"><i className="fa fa-youtube-play" /></a></li>
                            </ul>
                        </div>
                        <div className="single-post__top__text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua accusantium doloremque laudantium. </p>
                        </div>
                        <div className="single-post__recipe__details">
                            <div className="single-post__recipe__details__option">
                                <ul>
                                    <li>
                                        <h5><i className="fa fa-user-o" /> SERVES</h5>
                                        <span>2 as a main, 4 as a side</span>
                                    </li>
                                    <li>
                                        <h5><i className="fa fa-clock-o" /> PREP TIME</h5>
                                        <span>15 minute</span>
                                    </li>
                                    <li>
                                        <h5><i className="fa fa-clock-o" /> Cook TIME</h5>
                                        <span>15 minute</span>
                                    </li>
                                    <li><a href="#" className="primary-btn"><i className="fa fa-print" /> Read more</a></li>
                                </ul>
                            </div>
                            <div className="single-post__recipe__details__indegradients">
                                <h5>Ingredients</h5>
                                <ul>
                                    <li>Ingredients</li>
                                    <li>1 cup (240 ml) water, plus more as needed</li>
                                    <li>1 teaspoon fine sea salt</li>
                                    <li>2 tablespoons olive oil</li>
                                    <li>3/4 cup (120 g) fine polenta</li>
                                    <li>3 cups sunflower oil, plus more as needed</li>
                                    <li>7 ounces (200 g) peeled parsnips, very thinly sliced on a mandoline</li>
                                    <li>1 pinch fine sea salt, plus more to taste</li>
                                    <li>2 tablespoons (30 g) unsalted butter</li>
                                    <li>1/2 tablespoon maple syrup (up to 1 tablespoon as needed)</li>
                                </ul>
                            </div>
                            <div className="single-post__recipe__details__direction">
                                <h5>Directions</h5>
                                <ul>
                                    <li><span>1.</span> Combine all of the ingredients, kneading to form a smooth dough.
                                    </li>
                                    <li><span>2.</span> Allow the dough to rise, in a lightly greased, covered bowl, until
                                        it’s doubled in size, about 90 minutes.</li>
                                    <li><span>3.</span> Gently divide the dough in half; it’ll deflate somewhat.</li>
                                    <li><span>4.</span> Gently shape the dough into two oval loaves; or, for longer loaves,
                                        two 10″ to 11″ logs. Place the loaves on a lightly greased or parchment-lined baking
                                        sheet. Cover and let rise until very puffy, about 1 hour. Towards the</li>
                                    <li><span>5.</span> end of the rising time, preheat the oven to 425°F.</li>
                                    <li><span>6.</span> Spray the loaves with lukewarm water.</li>
                                    <li><span>7.</span> Make two fairly deep diagonal slashes in each; a serrated bread
                                        knife, wielded firmly, works well here.</li>
                                    <li><span>8.</span> Bake the bread for 25 to 30 minutes, until it’s a very deep golden
                                        brown. Remove it from the oven, and cool on a rack.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="single-post__middle__text">
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in. .
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                        </div>
                        <div className="single-post__quote">
                            <p>The whole family of tiny legumes, whether red, green, yellow, or black, offers so many
                                possibilities to create an exciting lunch.</p>
                            <span>MEIKE PETERS</span>
                        </div>
                        <div className="single-post__desc">
                            <p>laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat.</p>
                            <h4>You Can Buy For Less Than A College Degree</h4>
                            <p>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia </p>
                        </div>
                        <div className="single-post__more__details">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <img src={desc} alt="" />
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <p>Vestibulum commodo nulla eu augue tincidunt rutrum. Suspendisse interdum lacus in
                                        ligula finibus luctus. Vivamus mollis libero vel orci finibus, sit amet malesuada
                                        lectus aliquam. In auctor viverra eros. Maecenas elit mi, dictum et consectetur nec,
                                        sollicitudin sed arcu.</p>
                                    <p>Curabitur tempor tempor pharetra.Sed imperdiet sem at nunc luctus, sed cursus nulla
                                        mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                                        ridiculus mus porta tincidunt, purus enim laoreet.</p>
                                    <p>Duis aute irure dolor inenim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo conslaboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="single-post__last__text">
                            <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                aut fugit. Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt
                                tempora incidunt ut labore quia non numquam eius modi.</p>
                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                Mauris vel magna ex. Integer gravida tincidunt accumsan. Vestibulum nulla mauris,
                                condimentum id felis ac, volutpat volutpat mi. In vitae tempor velit of the impenetrable
                                foliage quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci.</p>
                        </div>
                        <div className="single-post__tags">
                            <a href="#">Food</a>
                            <a href="#">Vegan</a>
                            <a href="#">Tomato</a>
                            <a href="#">Weightloss</a>
                        </div>
                        <div className="single-post__next__previous">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <a href="#" className="single-post__previous">
                                        <h6><span className="arrow_carrot-left" /> Previous posts</h6>
                                        <div className="single-post__previous__meta">
                                            <h4>08</h4>
                                            <span>Aug</span>
                                        </div>
                                        <div className="single-post__previous__text">
                                            <span>Dinner</span>
                                            <h5>The Best Weeknight Baked <br />Potatoes, 3 Creative Ways</h5>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <a href="#" className="single-post__next">
                                        <h6>Next posts <span className="arrow_carrot-right" /> </h6>
                                        <div className="single-post__next__meta">
                                            <h4>05</h4>
                                            <span>Aug</span>
                                        </div>
                                        <div className="single-post__next__text">
                                            <span>Smoothie</span>
                                            <h5>The $8 French Rosé I Buy in <br />Bulk Every Summer</h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="single-post__author__profile">
                            <div className="single-post__author__profile__pic">
                                <img src="img/categories/single-post/author-profile.jpg" alt="" />
                            </div>
                            <div className="single-post__author__profile__text">
                                <h4>Lena Mollein.</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <div className="single-post__author__profile__social">
                                    <a href="#"><i className="fa fa-facebook" /></a>
                                    <a href="#"><i className="fa fa-twitter" /></a>
                                    <a href="#"><i className="fa fa-google-plus" /></a>
                                    <a href="#"><i className="fa fa-instagram" /></a>
                                    <a href="#"><i className="fa fa-youtube-play" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="single-post__comment">
                            <div className="widget__title">
                                <h4>03 Comment</h4>
                            </div>
                            <div className="single-post__comment__item">
                                <div className="single-post__comment__item__pic">
                                    <img src="img/categories/single-post/comment/comment-1.jpg" alt="" />
                                </div>
                                <div className="single-post__comment__item__text">
                                    <h5>Brandon Kelley</h5>
                                    <span>15 Aug 2017</span>
                                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                                        magnam.</p>
                                    <ul>
                                        <li><a href="#"><i className="fa fa-heart-o" /></a></li>
                                        <li><a href="#"><i className="fa fa-share-square-o" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="single-post__comment__item single-post__comment__item--reply">
                                <div className="single-post__comment__item__pic">
                                    <img src="img/categories/single-post/comment/comment-2.jpg" alt="" />
                                </div>
                                <div className="single-post__comment__item__text">
                                    <h5>Brandon Kelley</h5>
                                    <span>15 Aug 2017</span>
                                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                                        magnam.</p>
                                    <ul>
                                        <li><a href="#"><i className="fa fa-heart-o" /></a></li>
                                        <li><a href="#"><i className="fa fa-share-square-o" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="single-post__comment__item">
                                <div className="single-post__comment__item__pic">
                                    <img src="img/categories/single-post/comment/comment-3.jpg" alt="" />
                                </div>
                                <div className="single-post__comment__item__text">
                                    <h5>Brandon Kelley</h5>
                                    <span>15 Aug 2017</span>
                                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                                        magnam.</p>
                                    <ul>
                                        <li><a href="#"><i className="fa fa-heart-o" /></a></li>
                                        <li><a href="#"><i className="fa fa-share-square-o" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="single-post__leave__comment">
                            <div className="widget__title">
                                <h4>Leave a comment</h4>
                            </div>
                            <form action="#">
                                <div className="input-list">
                                    <input type="text" placeholder="Name" />
                                    <input type="text" placeholder="Email" />
                                    <input type="text" placeholder="Website" />
                                </div>
                                <textarea placeholder="Message" defaultValue={""} />
                                <button type="submit" className="site-btn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Singlepost