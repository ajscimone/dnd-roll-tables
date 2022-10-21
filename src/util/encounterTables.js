import randomArrayEntry from "./randomArrayEntry"
import replaceStringRoll from "../util/replaceStringDiceRoll"

import EncounterData from "../data/xanthars-random-encounter-tables.json";

let EncounterMap = new Map()

function parseEncounter(encounter){
  return encounter
}

function createTableEntryFromRange(encounterJSON){
  const range = encounterJSON.range.split("-");
  if (range.length === 2){
    let subTable = []
    for (let i= parseInt(range[0]); i <= parseInt(range[1]); ++i){
      subTable.push(parseEncounter(encounterJSON.event))
    }
    return subTable
  } else if(range.length){
    return [parseEncounter(encounterJSON.event)]
  } else {
    return null;
  }
}

function createTableEntries(encouterRatingArray){
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
      environmentMap.set(level, createTableEntries(encounters))
    }
    EncounterMap.set(environment, environmentMap)
  }
}

function GetEncounter(environment, challengeRating){
  let encounter = randomArrayEntry(EncounterMap.get(environment).get(challengeRating))
  let calculatedEncounter = replaceStringRoll(encounter)
  return calculatedEncounter

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