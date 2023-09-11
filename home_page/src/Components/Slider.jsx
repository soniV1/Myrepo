import React from 'react'
import './Slider.css';
import img4 from "../images/img4.jpg";
 import img2 from "../images/img2.jpg";
 import img3 from "../images/img3.jpg";
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';



function Slider(){
    return(
        <Container>
        <Carousel className='mycarousel'>
            <Carousel.Item>
              <img src={img4} text="First slide"  className='img1'/>
                <Carousel.Caption>
                 <h3>First slide label</h3>
                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img2} text="second slide" className='img1'/>
                <Carousel.Caption>
                 <h3>Second slide label</h3>
                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img3} text="thirst slide" className='img1' />
                <Carousel.Caption>
                 <h3>thirst slide label</h3>
                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
               </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
        </Container>
    )
}

export default Slider;