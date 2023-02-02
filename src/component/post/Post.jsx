import React from 'react'

const Post = ({date,category }) => {
  return (
    <div className="col-lg-6 p-0">
        <div className="hero__inside__item hero__inside__item--wide set-bg" data-setbg="img/hero/hero-1.jpg">
            <div className="hero__inside__item__text">
                <div className="hero__inside__item--meta">
                    <span>08</span>
                    <p>Aug</p>
                </div>
                <div className="hero__inside__item--text">
                    <ul className="label">
                        <li>Vegan</li>
                        <li>Desserts</li>
                    </ul>
                    <h4>Vegan White Peach Mug Cobbler With CardamomVegan<br /> White Peach Mug
                        Cobbler With Cardamom</h4>
                    <ul className="widget">
                        <li>by <span>Admin</span></li>
                        <li>3 min read</li>
                        <li>20 Comment</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post