import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function NameGenerator(props) {
  const [show, setShow] = useState(false);
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);

  const handleButtonClick = (event) => {
    if (props.firstnames){
      setFirstname(props.firstnames[Math.floor(Math.random()*props.firstnames.length)])
    }
    if (props.lastnames){
      setLastname(props.lastnames[Math.floor(Math.random()*props.lastnames.length)])
    }
    
    setShow(true)
  };

  return (
    <Row>
      <Col xs={6}>
      <div className="d-grid gap-2">
        <Button size="lg" onClick={handleButtonClick}>{props.buttonName}</Button>
        </div>
      </Col>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show}>
          <Toast.Header>
            <strong className="me-auto">{firstname} {lastname}</strong>
          </Toast.Header>
        </Toast>
      </Col>
    </Row>
  );
}

export default NameGenerator;