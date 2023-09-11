import React from "react";
import './Footer.css';
import { Container } from 'react-bootstrap';

function Footer() {
    return (
        <>
      <Container className="myfooter">
        <div className="footer1">© 2020 Copyright:
          <a href="/"> MDBootstrap.com</a>
         </div>
         </Container>
        </>
    )
}

export default Footer;