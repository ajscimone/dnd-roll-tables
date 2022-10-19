import {randomArrayEntry} from "./randomArrayEntry"
import EncounterData from "../data/xanthars-random-encounter-tables.json";

let EncounterMap = new Map()

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
  if (range.length === 2){
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

function createTableEntries(rating, encouterRatingArray){
  let rollTable = []
  encouterRatingArray.forEach( (row) => {
    let expandedEncounterSubTable = createTableEntryFromRange(row)
    rollTable = rollTable.concat(expandedEncounterSubTable)
  });
  return rollTable
}

function CreateEncounterTables(){
  for (let [environment, levels] of Object.entries(EncounterData)) {
    let environmentMap = new Map()
    for (let [level, encounters] of Object.entries(levels)) {
      environmentMap.set(level, createTableEntries(level, encounters))
    }
    EncounterMap.set(environment, environmentMap)
  }
}

function GetEncounter(environment, challengeRating){
  let encounter = randomArrayEntry(EncounterMap.get(environment).get(challengeRating))
  if (encounter.event){
    return encounter.event
  } else {
    return `${encounter.quantity} ${encounter.monsters}`
  }
}

function GetEnvironments(){
  let environments = []
  Object.keys(EncounterData).forEach(function(environment) {
    environments.push(environment)
  })
  return environments
}

function GetChallengeRatingsByEnvironment(requestEnvironment){
  let challengeRatings = []
  for (let [environment, levels] of Object.entries(EncounterData)) {
    if (requestEnvironment == environment) {
      Object.keys(levels).forEach( (level) => {
        challengeRatings.push(level)
      })
    }
  }
  return challengeRatings
}



export {CreateEncounterTables, GetEncounter, GetEnvironments, GetChallengeRatingsByEnvironment};