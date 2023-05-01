import randomArrayEntry from "./randomArrayEntry"
import replaceStringRoll from "../util/replaceStringDiceRoll"

import LootData from "../data/xanthars-magic-item-tables.json";

let LootMap = new Map()
let MinorOrMajor = ["Minor Items", "Major Items"]

function parseLoot(loot) {
    return loot
}

function createTableEntryFromRange(sourceJsonFile) {
    const range = sourceJsonFile.range.split("-");
    if (range.length === 2) {
        let subTable = []
        for (let i = parseInt(range[0]); i <= parseInt(range[1]); ++i) {
            subTable.push(parseLoot(sourceJsonFile.event))
        }
        return subTable
    } else if (range.length) {
        return [parseLoot(sourceJsonFile.event)]
    } else {
        return null;
    }
}

function createTableEntries(inputArray) {
    let rollTable = []
    inputArray.forEach((row) => {
        let expandedSubTable = createTableEntryFromRange(row)
        rollTable = rollTable.concat(expandedSubTable)
    });
    return rollTable
}

function CreateLootTables() { //THIS IS WHAT YOU WERE LAST WORKING ON
    for (let [minorOrMajor, rarities] of Object.entries(LootData)) {
        let minorOrMajorMap = new Map()
        for (let [rarity, loot] of Object.entries(rarities)) {
            minorOrMajorMap.set(rarity, createTableEntries(loot))
        }
        LootMap.set(minorOrMajor, minorOrMajorMap)
    }
}

function GetLoot(minorOrMajorSelection, raritySelection) {
    let loot = randomArrayEntry(LootMap.get(minorOrMajorSelection).get(raritySelection))
    let calculatedLoot = replaceStringRoll(loot)
    return calculatedLoot

}

function GetRarity(minorOrMajorSelection) {
    let arrayOfRarities = []
    for (let [minorOrMajor, rarities] of Object.entries(LootData)) {
        if (minorOrMajorSelection == minorOrMajor) {
            Object.keys(rarities).forEach((rarity) => {
                arrayOfRarities.push(rarity)
            })
        }
    }
    return arrayOfRarities
}



export { CreateLootTables, GetLoot, GetRarity };