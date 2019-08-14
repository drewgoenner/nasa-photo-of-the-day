import React from "react";
import InfoCard from "./InfoCard";

export default function ApodInfo(props) {

    return (
        <div className = "container">
            
         <InfoCard key ={props.data.hdurl} title={props.data.title} explanation={props.data.explanation} />
            
        </div>
    )
}