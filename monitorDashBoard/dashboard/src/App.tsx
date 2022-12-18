import React from 'react';
import './App.css';
import BarStats from './diagrams/BarStats';
import { Container, Row, Col } from 'react-grid-system';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        370 Rue Jean Belleville Statistics
      </header>
      <Container>
  <Row>
    <Col sm={4}>
    <BarStats/>
    </Col>
    <Col sm={4}>
      One of three columns
    </Col>
    <Col sm={4}>
      One of three columns
    </Col>
  </Row>
</Container>
    </div>  );
}

export default App;
