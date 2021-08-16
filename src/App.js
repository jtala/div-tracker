import React, {useState} from "react";
import Axios from "axios";
import Begin from "./components/Begin"
import Dividends from "./components/Dividends"
import './App.css';

function App() {

  const [data, getData] = useState("");

  const getStockData = () => {
    Axios.get("https://eodhistoricaldata.com/api/fundamentals/VTI.US?api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX").then((response) => {
      let holdings = response.data.ETF_Data.Holdings;
      
      for (let [key,value] of Object.entries(holdings)){
        console.log(key, value);
      }
    }
    )
  };

  return (
    <div>
      <Begin></Begin>
      <button onClick={getStockData}>Click for VTI Data</button>
      
      <Dividends></Dividends>
      {data}
    </div>
  );
}

export default App;
