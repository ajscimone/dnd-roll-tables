import React, { Component } from "react";
import NpcData from "../data/xanthars-character-names.json";

import { Container, Row } from "react-bootstrap";
import NameGenerator from "./NameGenerator";

class NpcNames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Dragonborn: null,
      Dwarf: null,
      Elf: null,
      Gnome: null,
      HalfOrc: null,
      Halfling: null,
      Human: null,
      Tiefling: null,
    }
  }

  componentDidMount() {
    this.setState({
      Dragonborn: NpcData.Dragonborn,
      Dwarf: NpcData.Dwarf,
      Elf: NpcData.Elf,
      Gnome: NpcData.Gnome,
      HalfOrc: NpcData.HalfOrc,
      Halfling: NpcData.Halfling,
      Human: NpcData.Human,
      Tiefling: NpcData.Tiefling,
    })
  }

  render() {
    let DragonbornMaleGenerator = <></>
    let DragonbornFemaleGenerator = <></>
    if (this.state.Dragonborn){
      DragonbornMaleGenerator = <NameGenerator buttonName={"Dragonborn Male"} firstnames={this.state.Dragonborn.Male} lastnames={this.state.Dragonborn.Clan} />;
      DragonbornFemaleGenerator = <NameGenerator buttonName={"Dragonborn Female"} firstnames={this.state.Dragonborn.Female} lastnames={this.state.Dragonborn.Clan} />;
    }

    return (
      <div className="npcnames">

        <Container className="align-items-center">
          <div className="d-grid gap-2" styles="display: flex">

          <Row className="align-items-center">
            {DragonbornMaleGenerator}
          </Row>

          <Row className="align-items-center">
            {DragonbornFemaleGenerator}
          </Row>

          </div>
        </Container>

      </div>
    );
  }
}

export default NpcNames;