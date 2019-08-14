import React from "react";
import PicCard from "./PicCard";

export default function PicInfo(props) {

    return (
        <div className = "container">
            
         <PicCard key ={props.data.hdurl} imgUrl={props.data.hdurl} date={props.data.date} />
            
        </div>
    )
}