import React from "react";

const Post = ({ data, type }) => {
  console.log(data);
  const { category, description, date, img } = data;
  const datte = date.split("/");
  return (
    <div
      className={`hero__inside__item  ${
        type == "small"
          ? "hero__inside__item--small"
          : "hero__inside__item--wide"
      } set-bg`}
      style={{ backgroundImage: `url(${img})` }}>
      <div className="hero__inside__item__text ">
        <div className="hero__inside__item--meta">
          <span>{datte[0]} </span>
          <p>{datte[1]}</p>
        </div>
        <div className="hero__inside__item--text">
          <ul className="label">
            {category.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          {type == "small" ? <h5>{description}</h5> : <h4>{description}</h4>}
        </div>
      </div>
    </div>
  );
};

export default Post;
