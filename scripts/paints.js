import { setPaintChoice } from "./transientState.js"



const handlePaintColorChoice = (changeEvent) => {
    // Make sure you change this condition if you named your inputs differently
    if (changeEvent.target.id === "paint") {
        setPaintChoice(parseInt(changeEvent.target.value))
    }
}






export const PaintOptions = async () => {
    const response = await fetch("http://localhost:8088/paints")
    const paints = await response.json()

    let choicesHTML = `<select id="paint"><option  value="0">select a color...</option>`
    document.addEventListener("change", handlePaintColorChoice)

    const divStringArray = paints.map(
        (paint) => {
            return `<option class="paintDropDown" value='${paint.id}'> ${paint.color} </option>`
        }
    )

    choicesHTML += divStringArray.join("")
    choicesHTML += `</select>`


    return choicesHTML
}
