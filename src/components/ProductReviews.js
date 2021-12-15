import React from 'react';
import "../styles/ProductReviews.css";
import ProductReviewCard from './ProductReviewCard.js';
function ProductReviews({productReviews}) {
    return (
        <div className="productReviews">
            {
                productReviews.map((item,index)=>(
                    <ProductReviewCard name={item.name} review = {item.review} price = {item.price} image = {item.image} key={index}/>
                ))
            }
        </div>
    )
}

export default ProductReviews;


