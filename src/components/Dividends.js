import React from "react";
import {Card} from "react-bootstrap";

const Dividends = () => (
  
    <div className = "App">
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Ticker</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">% Weighting</Card.Subtitle>
      <Card.Text>
        Security Description
      </Card.Text>
    </Card.Body>
  </Card>
    
    </div>
)

export default Dividends;