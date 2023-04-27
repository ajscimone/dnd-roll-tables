import Dice from "./dice"

export default function replaceStringRoll(event){
    console.log(event)
    let dice = new Dice()
    let matches = event.match(/(\d+)?d(\d+)\s?([\+\-]\s?\d+)?/g)

    if (!matches){
        return event
    }

    matches.forEach(match => {
        if (isNaN(match)){
            let roll = dice.roll(match)
            let strippedMatch = match.replace(/\s+/g, '')
            event = event.replace(match, `${roll} (${strippedMatch}) `)
        }
    });

    return event
}