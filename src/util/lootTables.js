import randomArrayEntry from "./randomArrayEntry"
import replaceStringRoll from "../util/replaceStringDiceRoll"

import LootData from "../data/xanthars-magic-item-tables.json";

let LootMap = new Map()

function CreateLootTables() {
    for (let [minorOrMajor, rarities] of Object.entries(LootData)) {
        let minorOrMajorMap = new Map()
        for (let [rarity, items] of Object.entries(rarities)) {
            minorOrMajorMap.set(rarity, items)
        }
        LootMap.set(minorOrMajor, minorOrMajorMap)
    }
}

function GetLoot(minorOrMajorSelection, raritySelection) {
    return randomArrayEntry(LootMap.get(minorOrMajorSelection).get(raritySelection))
}

function GetRarities(minorOrMajorSelection) {
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



export { CreateLootTables, GetLoot, GetRarities };