import React, { useState, useEffect } from 'react';
import {CreateEncounterTables, GetEncounter, GetEnvironments, GetChallengeRatingsByEnvironment} from "../util/encounter-tables";

import { Container, Col, Row, ToggleButtonGroup, ToggleButton, ListGroup, Button, ButtonGroup, Toast  } from "react-bootstrap";

function Encounters (props) {
  const [show, setShow] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [rating, setRating] = useState("Levels 1-4");
  const [ratings, setRatings] = useState([]);
  const [currentEnvironment, setEnvironment] = useState("Arctic");
  const [environments, setEnvironments] = useState([]);
  const [encounter, setEncounter] = useState("");

  useEffect(() => {
    setEnvironments(GetEnvironments())
    setRatings(GetChallengeRatingsByEnvironment(currentEnvironment))
    CreateEncounterTables()
  }, [currentEnvironment]);

  const handleButtonClick = (event) => {
    let currentRatings = GetChallengeRatingsByEnvironment(currentEnvironment)
    let validRating = false
    currentRatings.forEach(element => {
      if (rating === element){
        validRating = true;
      }
    });
    if (validRating){
      let encounter = GetEncounter(currentEnvironment, rating)
      setEncounter(encounter)
      setShow(true)
      setShowWarning(false)
    } else {
      //setEncounter("You need to select a Party Level")
      console.log("hit")
      setShowWarning(true)
    }
  };

  return (
    <div>
      <Container  className="align-items-center">
      <h1 style={{ textAlign: "center"}}>Encounter Generator</h1>
        <Container className="align-items-center flex-column">
          <Row className="align-items-center">
            <Col>
              <ListGroup>
                <ListGroup.Item>
                  <h3>Party Level</h3>
                  <ToggleButtonGroup type="radio" name="options" defaultValue={rating}>
                    { ratings.map( (thisRating, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`tbg-radio-${idx}`}
                        variant={"secondary"}
                        value={thisRating}
                        onChange={(e) => setRating(e.currentTarget.value)}
                      >
                        {thisRating}
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
            <ListGroup>
              <ListGroup.Item>
                <h3>Environment</h3>
                <ButtonGroup> {/* TODO: Make this collapse when the screen gets too small */}
                  {environments.map((environment, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`environment-${idx}`}
                      type="radio"
                      variant={'outline-success'}
                      name="radio"
                      value={environment}
                      checked={currentEnvironment === environment}
                      onChange={(e) => {
                        setEnvironment(e.currentTarget.value)
                      }}
                    >
                      {environment}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </ListGroup.Item>
            </ListGroup>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col className="align-items-center">
            <div className="d-grid gap-2">
              <Button size="lg" onClick={handleButtonClick}>Generate Encounter</Button>
              </div>
            </Col>
            <Col xs={6}>
              <Toast onClose={() => setShow(false)} show={show}>
                <Toast.Header>
                  <strong className="me-auto">{encounter}</strong>
                </Toast.Header>
              </Toast>

              <Toast className="d-inline-block m-1" bg="warning" onClose={() => showWarning(false)} show={showWarning}>
                <Toast.Header>
                  <strong className="me-auto">Warning</strong>
                </Toast.Header>
                <Toast.Body > You must select a party level</Toast.Body>
              </Toast>
            </Col>
          </Row>
        </Container>
       </Container>
    </div>
  );
}
  
  export default Encounters;