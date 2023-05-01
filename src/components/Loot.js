import React, { useState, useEffect } from 'react';
import { CreateLootTables, GetLoot, GetRarity } from "../util/lootTables";
import { Container, Col, Row, ToggleButtonGroup, ToggleButton, ListGroup, Button, ButtonGroup, Toast } from "react-bootstrap";

function Loot(props) {
    const [minorOrMajor, setMinorOrMajor] = useState("Minor");
    const [rarity, setRarity] = useState("Common");
    const [rarities, setRarities] = useState([]);
    const [loot, setLoot] = useState("");

    useEffect(() => {
        // setMinorOrMajor(GetLoot())
        // setRarities(GetRarity(rarity))
        // CreateLootTables()
    }, [rarity]);

    const handleButtonClick = (event) => {
        let currentRarity = GetRarity(minorOrMajor)
        if (currentRarity.includes(rarity)) {
            let loot = GetLoot(minorOrMajor, rarity)
            setLoot(loot)
        }
    };

    return (
        <div>
            <Container className="align-items-center">
                <h1 style={{ textAlign: "center" }}>Loot Generator</h1>
                <Container className="align-items-center flex-column">
                    <Row className="align-items-center">
                        <Col>
                            <ListGroup>
                                <ListGroup.Item>
                                    <h3>Minor or Major Items</h3>
                                    <ToggleButtonGroup type="radio" name="options" defaultValue={minorOrMajor}>
                                        <ToggleButton
                                            key={1}
                                            id={"minorOrMajor-radio-1"}
                                            variant={"secondary"}
                                            onChange={(e) => setMinorOrMajor(e.currentTarget.value)}
                                        >
                                            Minor
                                        </ToggleButton>
                                        <ToggleButton
                                            key={2}
                                            id={"minorOrMajor-radio-2"}
                                            variant={"secondary"}
                                            onChange={(e) => setMinorOrMajor(e.currentTarget.value)}
                                        >
                                            Major
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col>
                            <ListGroup>
                                <ListGroup.Item>
                                    <h3>Rarity</h3>
                                    <ToggleButtonGroup type="radio" name="options" defaultValue={rarity}>
                                        {rarities.map((thisRarity, idx) => (
                                            <ToggleButton
                                                key={idx}
                                                id={`tbg-radio-${idx}`}
                                                variant={"secondary"}
                                                value={thisRarity}
                                                onChange={(e) => setRarity(e.currentTarget.value)}
                                            >
                                                {thisRarity}
                                            </ToggleButton>
                                        ))}
                                    </ToggleButtonGroup>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col className="align-items-center">
                            <div className="d-grid gap-2">
                                <Button size="lg" onClick={handleButtonClick}>Generate Loot</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}

export default Loot;