import React from "react";
import { Container, Header, Divider } from 'semantic-ui-react'


const InfoCard = props => {
    return (
        <Container text>
            <Header as='h2' textAlign='center'>Title: {props.title}</Header>
            <p>{props.explanation}</p>
        </Container>
    )
}
export default InfoCard