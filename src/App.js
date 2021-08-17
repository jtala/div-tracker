import React, {useState} from "react";
import Axios from "axios";
import Begin from "./components/Begin";
// import Dividends from "./components/Dividends";
import {Card} from "react-bootstrap";


import './App.css';

function App() {

  const [data, updateData] = useState([]);
  let holdings;
  let testObj = [
    {Name: 1},
    {Code: 2},
    {3: 3},
    {4: 4}
  ];

  const getStockData = () => {
    Axios.get("https://eodhistoricaldata.com/api/fundamentals/VTI.US?api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX")
    .then((response) => {


    holdings = Object.values(response.data.ETF_Data.Holdings);
    console.log(holdings[0]);
  }) 
  };

  const renderCards = (card, index) => {


    return (
      <Card style={{ width: '18rem' }} key={index}>
        <Card.Img variant="top"/>
        <Card.Body>
          <Card.Title>{card.Name}</Card.Title>
          <Card.Text>{card.Code}</Card.Text>
        </Card.Body>
      </Card>
    )
  }


  return (
    <div>
      <Begin></Begin>
      <button onClick={getStockData}>Click for VTI Data</button>
      {testObj.map(renderCards)}
    </div>
  );
}

export default App;
