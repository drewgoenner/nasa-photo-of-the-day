import React, {useState, useEffect} from "react";
import PicInfo from "../src/components/PicInfo";
import ApodInfo from "./components/ApodInfo";
import axios from "axios";
import styled from "styled-components";
import "./App.css";

const AppDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
`;

function App() {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=VSx5bXONJ1m3UlsPArwHOx5sDmzB4PMEcKztCWfZ`)
    .then(response => setData(response.data))
  }, [])

  return (
    <AppDiv>
      <PicInfo data={data}/>
      <ApodInfo data={data} />
      
    </AppDiv>
  );
}

export default App;
