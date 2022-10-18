import React, { Component } from "react";
import { Container, Col, Row, Alert } from "react-bootstrap";

import NpcData from "../data/xanthars-character-names.json";
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

    let TieflingMaleGenerator = <></>
    let TieflingFemaleGenerator = <></>
    if (this.state.Dragonborn){
      TieflingMaleGenerator = <NameGenerator buttonName={"Tiefling Male"} firstnames={this.state.Tiefling.Male} lastnames={this.state.Tiefling.Virtue} />;
      TieflingFemaleGenerator = <NameGenerator buttonName={"Tiefling Female"} firstnames={this.state.Tiefling.Female} lastnames={this.state.Tiefling.Virtue} />;
    }
    
    let ArabicMaleGenerator = <></>
    let CelticMaleGenerator = <></>
    let ChineseMaleGenerator = <></>
    let EgyptianMaleGenerator = <></>
    let EnglishMaleGenerator = <></>
    let FrenchMaleGenerator = <></>
    let GermanMaleGenerator = <></>
    let GreekMaleGenerator = <></>
    let IndianMaleGenerator = <></>
    let JapaneseMaleGenerator = <></>
    let MesoamericanMaleGenerator = <></>
    let NigerCongoMaleGenerator = <></>
    let NorseMaleGenerator = <></>
    let PolynesianMaleGenerator = <></>
    let RomanMaleGenerator = <></>
    let SlavicMaleGenerator = <></>
    let SpanishMaleGenerator = <></>

    if (this.state.Human){
      ArabicMaleGenerator = <NameGenerator buttonName={"Arabic Male"} firstnames={this.state.Human.Arabic.Male} lastnames={null} />;
      CelticMaleGenerator = <NameGenerator buttonName={"Celtic Male"} firstnames={this.state.Human.Celtic.Male} lastnames={null} />;
      ChineseMaleGenerator = <NameGenerator buttonName={"Chinese Male"} firstnames={this.state.Human.Chinese.Male} lastnames={null} />;
      EgyptianMaleGenerator = <NameGenerator buttonName={"Egyptian Male"} firstnames={this.state.Human.Egyptian.Male} lastnames={null} />;
      EnglishMaleGenerator = <NameGenerator buttonName={"English Male"} firstnames={this.state.Human.English.Male} lastnames={null} />;
      FrenchMaleGenerator = <NameGenerator buttonName={"French Male"} firstnames={this.state.Human.French.Male} lastnames={null} />;
      GermanMaleGenerator = <NameGenerator buttonName={"German Male"} firstnames={this.state.Human.German.Male} lastnames={null} />;
      GreekMaleGenerator = <NameGenerator buttonName={"Greek Male"} firstnames={this.state.Human.Greek.Male} lastnames={null} />;
      IndianMaleGenerator = <NameGenerator buttonName={"Indian Male"} firstnames={this.state.Human.Indian.Male} lastnames={null} />;
      JapaneseMaleGenerator = <NameGenerator buttonName={"Japanese Male"} firstnames={this.state.Human.Japanese.Male} lastnames={null} />;
      MesoamericanMaleGenerator = <NameGenerator buttonName={"Mesoamerican Male"} firstnames={this.state.Human.Mesoamerican.Male} lastnames={null} />;
      NigerCongoMaleGenerator = <NameGenerator buttonName={"NigerCongo Male"} firstnames={this.state.Human.NigerCongo.Male} lastnames={null} />;
      NorseMaleGenerator = <NameGenerator buttonName={"Norse Male"} firstnames={this.state.Human.Norse.Male} lastnames={null} />;
      PolynesianMaleGenerator = <NameGenerator buttonName={"Polynesian Male"} firstnames={this.state.Human.Polynesian.Male} lastnames={null} />;
      RomanMaleGenerator = <NameGenerator buttonName={"Roman Male"} firstnames={this.state.Human.Roman.Male} lastnames={null} />;
      SlavicMaleGenerator = <NameGenerator buttonName={"Slavic Male"} firstnames={this.state.Human.Slavic.Male} lastnames={null} />;
      SpanishMaleGenerator = <NameGenerator buttonName={"Spanish Male"} firstnames={this.state.Human.Spanish.Male} lastnames={null} />;
    }

    return (
      <div className="npcnames">
        <h1 style={{ textAlign: "center"}}>NPC Name Generators</h1>
        <Container fluid className="align-items-center" >
          <Row >
          <Col>
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
            <Alert variant="secondary">
              <Container className="align-items-center">
                <div className="d-grid gap-2" styles="display: flex">
                  <Row className="align-items-center">
                    {TieflingMaleGenerator}
                  </Row>
                  <Row className="align-items-center">
                    {TieflingFemaleGenerator}
                  </Row>
                </div>
              </Container>
            </Alert>
          </Col>
            <Col>
              <Alert variant="secondary">
                  <Container className="align-items-center">
                    <div className="d-grid gap-1" styles="display: flex">
                      <Row className="align-items-center">
                        {ArabicMaleGenerator}
                      </Row>
                      <Row className="align-items-center">
                        {ArabicMaleGenerator}
                      </Row>
                    </div>
                  </Container>
                </Alert>
                <Alert variant="secondary">
                  <Container className="align-items-center">
                    <div className="d-grid gap-1" styles="display: flex">
                      <Row className="align-items-center">
                        {CelticMaleGenerator}
                      </Row>
                      <Row className="align-items-center">
                        {CelticMaleGenerator}
                      </Row>
                    </div>
                  </Container>
                </Alert>
                <Alert variant="secondary">
                  <Container className="align-items-center">
                    <div className="d-grid gap-1" styles="display: flex">
                      <Row className="align-items-center">
                        {ChineseMaleGenerator}
                      </Row>
                      <Row className="align-items-center">
                        {ChineseMaleGenerator}
                      </Row>
                    </div>
                  </Container>
                </Alert>
                <Alert variant="secondary">
                  <Container className="align-items-center">
                    <div className="d-grid gap-1" styles="display: flex">
                      <Row className="align-items-center">
                        {EgyptianMaleGenerator}
                      </Row>
                      <Row className="align-items-center">
                        {EgyptianMaleGenerator}
                      </Row>
                    </div>
                  </Container>
                </Alert>
                <Alert variant="secondary">
                  <Container className="align-items-center">
                    <div className="d-grid gap-1" styles="display: flex">
                      <Row className="align-items-center">
                        {EnglishMaleGenerator}
                      </Row>
                      <Row className="align-items-center">
                        {EnglishMaleGenerator}
                      </Row>
                    </div>
                  </Container>
                </Alert>
                <Alert variant="secondary">
                  <Container className="align-items-center">
                    <div className="d-grid gap-1" styles="display: flex">
                      <Row className="align-items-center">
                        {FrenchMaleGenerator}
                      </Row>
                      <Row className="align-items-center">
                        {FrenchMaleGenerator}
                      </Row>
                    </div>
                  </Container>
                </Alert>
                <Alert variant="secondary">
                  <Container className="align-items-center">
                    <div className="d-grid gap-1" styles="display: flex">
                      <Row className="align-items-center">
                        {GermanMaleGenerator}
                      </Row>
                      <Row className="align-items-center">
                        {GermanMaleGenerator}
                      </Row>
                    </div>
                  </Container>
                </Alert>
                <Alert variant="secondary">
                  <Container className="align-items-center">
                    <div className="d-grid gap-1" styles="display: flex">
                      <Row className="align-items-center">
                        {GermanMaleGenerator}
                      </Row>
                      <Row className="align-items-center">
                        {GermanMaleGenerator}
                      </Row>
                    </div>
                  </Container>
                </Alert>
                <Alert variant="secondary">
                  <Container className="align-items-center">
                    <div className="d-grid gap-1" styles="display: flex">
                      <Row className="align-items-center">
                        {GreekMaleGenerator}
                      </Row>
                      <Row className="align-items-center">
                        {GreekMaleGenerator}
                      </Row>
                    </div>
                  </Container>
                </Alert>
            </Col>
            <Col>
            <Alert variant="secondary">
                  <Container className="align-items-center">
                    <div className="d-grid gap-1" styles="display: flex">
                      <Row className="align-items-center">
                        {IndianMaleGenerator}
                      </Row>
                      <Row className="align-items-center">
                        {IndianMaleGenerator}
                      </Row>
                    </div>
                  </Container>
                </Alert>
                <Alert variant="secondary">
                  <Container className="align-items-center">
                    <div className="d-grid gap-1" styles="display: flex">
                      <Row className="align-items-center">
                        {JapaneseMaleGenerator}
                      </Row>
                      <Row className="align-items-center">
                        {JapaneseMaleGenerator}
                      </Row>
                    </div>
                  </Container>
                </Alert>
              <Alert variant="secondary">
                  <Container className="align-items-center">
                    <div className="d-grid gap-1" styles="display: flex">
                      <Row className="align-items-center">
                        {MesoamericanMaleGenerator}
                      </Row>
                      <Row className="align-items-center">
                        {MesoamericanMaleGenerator}
                      </Row>
                    </div>
                  </Container>
                </Alert>
                <Alert variant="secondary">
                  <Container className="align-items-center">
                    <div className="d-grid gap-1" styles="display: flex">
                      <Row className="align-items-center">
                        {NigerCongoMaleGenerator}
                      </Row>
                      <Row className="align-items-center">
                        {NigerCongoMaleGenerator}
                      </Row>
                    </div>
                  </Container>
                </Alert>
                <Alert variant="secondary">
                  <Container className="align-items-center">
                    <div className="d-grid gap-1" styles="display: flex">
                      <Row className="align-items-center">
                        {NorseMaleGenerator}
                      </Row>
                      <Row className="align-items-center">
                        {NorseMaleGenerator}
                      </Row>
                    </div>
                  </Container>
                </Alert>
                <Alert variant="secondary">
                  <Container className="align-items-center">
                    <div className="d-grid gap-1" styles="display: flex">
                      <Row className="align-items-center">
                        {PolynesianMaleGenerator}
                      </Row>
                      <Row className="align-items-center">
                        {PolynesianMaleGenerator}
                      </Row>
                    </div>
                  </Container>
                </Alert>
                <Alert variant="secondary">
                  <Container className="align-items-center">
                    <div className="d-grid gap-1" styles="display: flex">
                      <Row className="align-items-center">
                        {RomanMaleGenerator}
                      </Row>
                      <Row className="align-items-center">
                        {RomanMaleGenerator}
                      </Row>
                    </div>
                  </Container>
                </Alert>
                <Alert variant="secondary">
                  <Container className="align-items-center">
                    <div className="d-grid gap-1" styles="display: flex">
                      <Row className="align-items-center">
                        {SlavicMaleGenerator}
                      </Row>
                      <Row className="align-items-center">
                        {SlavicMaleGenerator}
                      </Row>
                    </div>
                  </Container>
                </Alert>
                <Alert variant="secondary">
                  <Container className="align-items-center">
                    <div className="d-grid gap-1" styles="display: flex">
                      <Row className="align-items-center">
                        {SpanishMaleGenerator}
                      </Row>
                      <Row className="align-items-center">
                        {SpanishMaleGenerator}
                      </Row>
                    </div>
                  </Container>
                </Alert>
            </Col>
          </Row>

        </Container>
      </div>
    );
  }
}

export default NpcNames;