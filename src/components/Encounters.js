import React, { Component } from "react";
import {getEncounter} from "../data/encounter-tables";


class Encounters extends Component {

    render() {
      let encounter = getEncounter("Coastal", "low");
      console.log(encounter)
        
      return (
        <div>
            Encounters
        </div>
      );
    }
  }
  
  export default Encounters;