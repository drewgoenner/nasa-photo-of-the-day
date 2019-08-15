import React from "react";
import {Card, Image} from "semantic-ui-react";
import styled from "styled-components";

const PicCard = props => {
    return (
        <StyledPicCard>
        
        <Card>
        <Image class='ui small image'
        width = '100%'
        height = '100%'
        src = {props.imgUrl}
        />
        <Card.Header>NASA Atronomical Photo of the Day</Card.Header> 
        <Card.Meta>{props.date}</Card.Meta>
        </Card>
        
        {/* // <div className ="photo-card" key={props.url}>
        //     <img className="astro-image" alt="view of the day" src={props.imgUrl} />
        //     <h2>NASA Astronomy Photo of the Day: {props.date}</h2>
        // </div> */}
        </StyledPicCard>
    )
}

const StyledPicCard = styled.div`
width: 50%;
height: 600px;
margin: 10px;
padding: 50px;
background: green;
align-self: center;
justify-content: center;


`;
export default (PicCard);
