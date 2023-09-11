
import { Container, Row } from 'react-bootstrap';
import './App.css';
import CardComponent from './Components/CardComponent';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Slider from './Components/Slider';

function App() {
 const arry = [1,2,3,4];
  return (
    <Container>
    <Header/>
    <Slider/>
    <Row>
    {arry.map(() => (<CardComponent/>))}
    </Row>
    
    <Footer/>
    </Container>
  );
}

export default App;
