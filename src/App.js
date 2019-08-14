import React, {useState, useEffect} from "react";
import PicInfo from "../src/components/PicInfo";
import ApodInfo from "./components/ApodInfo";
import axios from "axios";
import "./App.css";

function App() {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=VSx5bXONJ1m3UlsPArwHOx5sDmzB4PMEcKztCWfZ`)
    .then(response => setData(response.data))
  }, [])

  return (
    <div className="App">
      <PicInfo data={data}/>
      <ApodInfo data={data} />
      
    </div>
  );
}

export default App;
