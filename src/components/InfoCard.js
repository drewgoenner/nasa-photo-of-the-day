import React from "react";
const InfoCard = props => {
    return (
        <div className ="info-card" key={props.id}>
            <h2>Title: {props.title}</h2>
            <p>{props.explanation}</p>
        </div>
    )
}
export default InfoCard;