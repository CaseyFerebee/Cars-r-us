import { setInteriorChoice } from "./transientState.js"

const handleInteriorChoice = (changeEvent) => {
    // Make sure you change this condition if you named your inputs differently
    if (changeEvent.target.id === "interior") {
        setInteriorChoice(parseInt(changeEvent.target.value))
    }
}




export const InteriorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    let interiorHTML = `<select id="interior"><option  value="0">select an interior...</option>`
    document.addEventListener("change", handleInteriorChoice)
                
    const divStringArray = interiors.map(
        (interior) => {
            return `<option value='${interior.id}'> ${interior.fabric} </option>`
        }
    )

    interiorHTML += divStringArray.join("")
    interiorHTML +=  `</select>`


    return interiorHTML
}
