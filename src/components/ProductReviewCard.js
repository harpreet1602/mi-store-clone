import React from 'react';
import "../styles/ProductReviewCard.css";

const ProductReviewCard = ({name,price,review,image}) => {
    return (
        <div className="ProductReviewCard">
            <img src={image} alt="ProductReviewCard"/>
            <h5>{review}</h5>
            <span>{name}</span>
            <b>{price}</b>
        </div>
    )
}

export default ProductReviewCard;
