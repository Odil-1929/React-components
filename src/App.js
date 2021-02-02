import './main.css'
import Card from './components/Card';
import Card2 from './components/Card2';
import {Container, Row} from "reactstrap";


function App() {
    return (
        <Container>
            <img src="" alt=""/>
            <h3>Lorem ipsum dolor.</h3>
            <Row>
                <Card/>

                <Card2/>

            </Row>
        </Container>
    );
}

export default App;
