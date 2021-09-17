import React, {useState} from "react";
import Axios from "axios";
import Begin from "./components/Begin";


import './App.css';

function App() {

  const [data, updateData] = useState([]);
  let holdings;
 

  const getStockData = (holdings = []) => {
    Axios.get("https://eodhistoricaldata.com/api/fundamentals/VTI.US?api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX")
    .then((response) => {


    holdings = Object.values(response.data.ETF_Data.Holdings);
    console.log(holdings.map(item => item.Code));
  }) 
  };


  return (
    <div>
      <Begin></Begin>
      <button onClick={getStockData}>Click for VTI Data</button>
    </div>
  );
}

export default App;
