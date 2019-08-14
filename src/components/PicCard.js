import React from "react";
const PicCard = props => {
    return (
        <div className ="photo-card" key={props.id}>
            <img className="astro-image" alt="view of the day" src={props.imgUrl} />
            <h2>NASA Astronomy Photo of the Day: {props.date}</h2>
        </div>
    )
}
export default PicCard;