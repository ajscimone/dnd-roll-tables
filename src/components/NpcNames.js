import React, { Component } from "react";
import NpcData from "../data/xanthars-character-names.json";

import { Container, Row, Alert } from "react-bootstrap";
import NameGenerator from "./NameGenerator";

class NpcNames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Dragonborn: null,
      Dwarf: null,
      Elf: null,
      Gnome: null,
      Halfling: null,
      HalfOrc: null,
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
      Halfling: NpcData.Halfling,
      HalfOrc: NpcData.HalfOrc,
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

    let DwarfMaleGenerator = <></>
    let DwarfFemaleGenerator = <></>
    if (this.state.Dragonborn){
      DwarfMaleGenerator = <NameGenerator buttonName={"Dwarf Male"} firstnames={this.state.Dwarf.Male} lastnames={this.state.Dwarf.Clan} />;
      DwarfFemaleGenerator = <NameGenerator buttonName={"Dwarf Female"} firstnames={this.state.Dwarf.Female} lastnames={this.state.Dwarf.Clan} />;
    }

    let ElfChildGenerator = <></>
    let ElfMaleGenerator = <></>
    let ElfFemaleGenerator = <></>
    if (this.state.Dragonborn){
      ElfChildGenerator = <NameGenerator buttonName={"Elf Child"} firstnames={this.state.Elf.Child} lastnames={this.state.Elf.Family} />;
      ElfMaleGenerator = <NameGenerator buttonName={"Elf Male"} firstnames={this.state.Elf.Male} lastnames={this.state.Elf.Family} />;
      ElfFemaleGenerator = <NameGenerator buttonName={"Elf Female"} firstnames={this.state.Elf.Female} lastnames={this.state.Elf.Family} />;
    }

    let GnomeMaleGenerator = <></>
    let GnomeFemaleGenerator = <></>
    if (this.state.Dragonborn){
      GnomeMaleGenerator = <NameGenerator buttonName={"Gnome Male"} firstnames={this.state.Gnome.Male} lastnames={this.state.Gnome.Clan} />;
      GnomeFemaleGenerator = <NameGenerator buttonName={"Gnome Female"} firstnames={this.state.Gnome.Female} lastnames={this.state.Gnome.Clan} />;
    }

    let HalflingMaleGenerator = <></>
    let HalflingFemaleGenerator = <></>
    if (this.state.Dragonborn){
      HalflingMaleGenerator = <NameGenerator buttonName={"Halfling Male"} firstnames={this.state.Halfling.Male} lastnames={this.state.Halfling.Family} />;
      HalflingFemaleGenerator = <NameGenerator buttonName={"Halfling Female"} firstnames={this.state.Halfling.Female} lastnames={this.state.Halfling.Family} />;
    }

    let HalfOrcMaleGenerator = <></>
    let HalfOrcFemaleGenerator = <></>
    if (this.state.Dragonborn){
      HalfOrcMaleGenerator = <NameGenerator buttonName={"Half-Orc Male"} firstnames={this.state.HalfOrc.Male} lastnames={null} />;
      HalfOrcFemaleGenerator = <NameGenerator buttonName={"Half-Orc Female"} firstnames={this.state.HalfOrc.Female} lastnames={null} />;
    }


    return (
      <div className="npcnames">
        <Container className="align-items-center">
          <div className="d-grid gap-2" styles="display: flex">
            <Alert variant="secondary">
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
            </Alert>
            <Alert variant="secondary">
              <Container className="align-items-center">
                <div className="d-grid gap-2" styles="display: flex">
                  <Row className="align-items-center">
                    {DwarfMaleGenerator}
                  </Row>
                  <Row className="align-items-center">
                    {DwarfFemaleGenerator}
                  </Row>
                </div>
              </Container>
            </Alert>
            <Alert variant="secondary">
              <Container className="align-items-center">
                <div className="d-grid gap-2" styles="display: flex">
                  <Row className="align-items-center">
                    {ElfChildGenerator}
                  </Row>
                  <Row className="align-items-center">
                    {ElfMaleGenerator}
                  </Row>
                  <Row className="align-items-center">
                    {ElfFemaleGenerator}
                  </Row>
                </div>
              </Container>
            </Alert>
            <Alert variant="secondary">
              <Container className="align-items-center">
                <div className="d-grid gap-2" styles="display: flex">
                  <Row className="align-items-center">
                    {GnomeMaleGenerator}
                  </Row>
                  <Row className="align-items-center">
                    {GnomeFemaleGenerator}
                  </Row>
                </div>
              </Container>
            </Alert>
            <Alert variant="secondary">
              <Container className="align-items-center">
                <div className="d-grid gap-2" styles="display: flex">
                  <Row className="align-items-center">
                    {HalflingMaleGenerator}
                  </Row>
                  <Row className="align-items-center">
                    {HalflingFemaleGenerator}
                  </Row>
                </div>
              </Container>
            </Alert>
            <Alert variant="secondary">
              <Container className="align-items-center">
                <div className="d-grid gap-2" styles="display: flex">
                  <Row className="align-items-center">
                    {HalfOrcMaleGenerator}
                  </Row>
                  <Row className="align-items-center">
                    {HalfOrcFemaleGenerator}
                  </Row>
                </div>
              </Container>
            </Alert>
          </div>
        </Container>

      </div>
    );
  }
}

export default NpcNames;