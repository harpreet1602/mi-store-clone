import React from 'react'
import "../styles/Heading.css";

// spot the difference {} the value given like this will be directly used
// but the value that come by props are accessed like props.text etc
const Heading = ({text}) => {
    return (
        <div className="heading">
            <div></div>
            <p>{text}</p>
            <div></div>
        </div>
    )
}

export default Heading;
