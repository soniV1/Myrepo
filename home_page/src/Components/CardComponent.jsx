import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import cardimg from '../images/logo.jpg';
import './CardComponent.css';

function CardComponent() {
    return (
    <Col className="mycard1">
 <Card style={{ width: '15rem'}} className="mycard">
      <Card.Img variant="top" src={cardimg}  className="mypic"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example soni soni text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
  </Card>
    </Col>
    )
}

export default CardComponent;