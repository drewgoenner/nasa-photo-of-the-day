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
        </StyledPicCard>
    )
}

const StyledPicCard = styled.div`
width: 100%;
height: 100%;
margin: 10px;
background: #55CB53;
align-self: center;
justify-content: center;
border: 1px solid black;
`;
export default (PicCard);
