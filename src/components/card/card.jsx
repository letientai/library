import React from "react";
import { Icon } from "semantic-ui-react";
import "./card.scss";

const Card = (props) => {
  const item = props.product;
  return (
    <div className="card-container">
      <div className="image">
        <img src={item.image} alt="" />
      </div>
      <p>{item.name}</p>
      <div className="row1">
        <div className="price">
            <span>{item.price} VNĐ</span>
        </div>
        <Icon name="truck" className="truck"/>
      </div>
      <div className="row2">

        <span>Đã bán: {item.sold}</span>
        <div className="icon">
          <Icon name="star" className="start" />
          <Icon name="star" className="start" />
          <Icon name="star" className="start" />
          <Icon name="star" className="start" />
          <Icon name="star" className="start" />
        </div>
      </div>
    </div>
  );
};
export default Card;
