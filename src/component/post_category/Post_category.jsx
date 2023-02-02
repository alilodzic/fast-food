import React from 'react'
import { Col } from 'react-bootstrap'

const Post_category = ({Data}) => {
    const {lunch, article,img} = Data
  return (
    <Col lg={3} md={6} sm={6}  >
        <div className="categories__item set-bg" style={{backgroundImage : `url(${img})`}}>
         <div className="categories__hover__text">
            <h5>{lunch}</h5>
            <p>{article} articles</p>
         </div>
        </div>
    </Col>
  )
}

export default Post_category