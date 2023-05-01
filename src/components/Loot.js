import React, { useState, useEffect } from 'react';
import { CreateLootTables, GetLoot, GetRarities } from "../util/lootTables";
import { Container, Col, Row, ToggleButtonGroup, ToggleButton, ListGroup, Button, ButtonGroup, Toast } from "react-bootstrap";

function Loot(props) {
    const [minorOrMajor, setMinorOrMajor] = useState("Minor Items");
    const [rarity, setRarity] = useState("Common");
    const [rarities, setRarities] = useState([]);
    const [loot, setLoot] = useState("");

    useEffect(() => {
        // setMinorOrMajor()
        setRarities(GetRarities(minorOrMajor))
        CreateLootTables()
    }, [rarity]);

    const handleButtonClick = (event) => {
        let currentRarity = GetRarities(minorOrMajor)
        if (currentRarity.includes(rarity)) {
            let loot = GetLoot(minorOrMajor, rarity)
            setLoot(loot)

        }
        // console.log(minorOrMajor)
        // console.log(rarity)
        // console.log(rarities)
        console.log(loot)
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
                                    <ToggleButtonGroup type="radio" name="minorOrMajorRadioButtons" defaultValue={minorOrMajor}>
                                        <ToggleButton
                                            key={1}
                                            id={"minorOrMajor-radio-1"}
                                            variant={"secondary"}
                                            value={"Minor Items"}
                                            onChange={(e) => setMinorOrMajor(e.currentTarget.value)}
                                        >
                                            Minor Items
                                        </ToggleButton>
                                        <ToggleButton
                                            key={2}
                                            id={"minorOrMajor-radio-2"}
                                            variant={"secondary"}
                                            value={"Major Items"}
                                            onChange={(e) => setMinorOrMajor(e.currentTarget.value)}
                                        >
                                            Major Items
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col>
                            <ListGroup>
                                <ListGroup.Item>
                                    <h3>Rarity</h3>
                                    <ToggleButtonGroup type="radio" name="RarityRadioButtons" defaultValue={rarity}>
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