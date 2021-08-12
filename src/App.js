import React from "react";
import Axios from "axios";
import Begin from "./components/Begin"
import Dividends from "./components/Dividends"
import './App.css';

function App() {

  const getStockData = () => {
    Axios.get()
  }

  return (
    <div>
      <Begin></Begin>
      <Dividends></Dividends>
    </div>
  );
}

export default App;
