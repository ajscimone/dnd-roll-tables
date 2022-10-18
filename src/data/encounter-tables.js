import {randomArrayEntry} from "../util/randomArrayEntry"
import EncounterData from "../data/xanthars-random-encounter-tables.json";

function parseEncounter(encounterJSON){
  if (encounterJSON.event) {
    return {"event": encounterJSON.event}
  } else if (encounterJSON.quantity && encounterJSON.monsters) {
    return {"quantity":encounterJSON.quantity, "monsters":encounterJSON.monsters}
  } else {
    return null
  }
}

function createTableEntryFromRange(encounterJSON){
  const range = encounterJSON.range.split("-");
  if (range.length == 2){
    let subTable = []
    for (let i= parseInt(range[0]); i <= parseInt(range[1]); ++i){
      subTable.push(parseEncounter(encounterJSON))
    }
    return subTable
  } else if(range.length){
    return [parseEncounter(encounterJSON)]
  } else {
    return null;
  }
}

function createTableEntries(environment, rating, encouterRatingArray){
  let encounterMap = new Map()
  let rollTable = []
  encouterRatingArray.forEach( (row) => {
    let expandedEncounterSubTable = createTableEntryFromRange(row)
    rollTable = rollTable.concat(expandedEncounterSubTable)
  });
  encounterMap.set(rating, rollTable)
  return encounterMap
}


function getEncounter(environment, challengeRating){
  let ArcticEncounterMap = new Map()
  ArcticEncounterMap = createTableEntries("Arctic", "low", EncounterData.Arctic["Levels 1-4"])
  return randomArrayEntry(ArcticEncounterMap.get(challengeRating))
}


export {getEncounter};