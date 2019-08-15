import React from "react";
import { Container, Header, Divider } from 'semantic-ui-react'

const InfoCard = props => {
    return (
        <Container width = '500px'>
            <Divider />
            <Header as='h2' textAlign='center'>Title: {props.title}</Header>
            <Divider />
            <p textAlign='center'>{props.explanation}</p>

        </Container>
    //     <div className ="info-card" key={props.url}>
    //         <h2>Title: {props.title}</h2>
    //         <p>{props.explanation}</p>
    //     </div>
    // 
    )
}
export default InfoCard;