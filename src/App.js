import React from "react";
import Axios from "axios";
import Begin from "./components/Begin"
import Dividends from "./components/Dividends"
import './App.css';

function App() {

  const getStockData = () => {
    Axios.get("https://eodhistoricaldata.com/api/fundamentals/VTI.US?api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX").then((response) => {
      console.log(response.data.ETF_Data.Holdings);


      // 1. Want to get name, ticker
    })
  }

  return (
    <div>
      <Begin></Begin>
      <button onClick={getStockData}>Click for VTI Data</button>
      <Dividends></Dividends>
    </div>
  );
}

export default App;
