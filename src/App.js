import React, {useState, useEffect} from "react";
import PicInfo from "../src/components/PicInfo";
import ApodInfo from "./components/ApodInfo";
import axios from "axios";
import styled from "styled-components";
import { Container, Header, Divider } from 'semantic-ui-react'
import "./App.css";

const SupDiv = styled.div`
display: flex;
justify-content: center;
align-content: center;
`;
const AppDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
width: 50%;
height: 100%;
justify-self: center;
border: 1px solid black;
background-color: #2AC7E0;
`;

function App() {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=VSx5bXONJ1m3UlsPArwHOx5sDmzB4PMEcKztCWfZ`)
    .then(response => setData(response.data))
  }, [])

  return (
    <SupDiv>
      <AppDiv>
        <PicInfo data={data}/>
        <ApodInfo data={data} />      
      </AppDiv>
    </SupDiv>
  );
}

export default App;
