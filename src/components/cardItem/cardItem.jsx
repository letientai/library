import React from "react";
import './cardItem.scss';

const CardItem = (props) =>{
    const item = props.product
    return(
        <div className="cardItem-container">
            <p>{item.name}</p>
        </div>
    )
}
export default CardItem;