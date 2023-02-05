import React from 'react'
import { Col } from 'react-bootstrap';

const Postmodeltwo = ({ data, type }) => {
  const { category, description, date, img ,title} = data;
  const datte = date.split("/");

  return (
    <Col lg={6} md={6} sm={12}>

    <div className="categories__post__item">
    <div
      className="categories__post__item__pic small__item set-bg"
      style={{backgroundImage : `url(${img})`}}>
      <div className="post__meta">
        <h4>{datte[0]} </h4>
        <span>{datte[1]} </span>
      </div>
    </div>
    <div className="categories__post__item__text">
            {category.map((item, i) => (
              <span className="post__label" key={i}>{item} </span>
            ))}
          
      <h3>
        <a href="#">
        {title}
        </a>
      </h3>
     
      <p>
       {description}
      </p>
    </div>
  </div>
  </Col>
  )
}

export default Postmodeltwo