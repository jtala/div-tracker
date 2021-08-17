import React, {useState} from "react";
import Axios from "axios";
import Begin from "./components/Begin"
import './App.css';

function App() {

  const [data, updateData] = useState("Default State here");
  let holdings; 

  const getStockData = () => {
    Axios.get("https://eodhistoricaldata.com/api/fundamentals/VTI.US?api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX").then((response) => {

      holdings = response.data.ETF_Data.Holdings;
      
  }) 
  };

  const updateHoldings = () => {
    // for (let [key,value] of Object.entries(holdings)){
    //   console.log(key, value);
    // }

    
    // updateData(holdings.toString());
  }


  return (
    <div>
      <Begin></Begin>
      <button onClick={getStockData}>Click for VTI Data</button>
      <button onClick={updateHoldings}>Click to refresh data</button>
      <h1>{data}</h1> 
    </div>
  );
}

export default App;
