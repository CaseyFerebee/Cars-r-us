import { setWheelChoice } from "./transientState.js"


const handleTechnologiesChoice = (changeEvent) => {
    // Make sure you change this condition if you named your inputs differently
    if (changeEvent.target.id === "wheels") {
        setWheelChoice(parseInt(changeEvent.target.value))
    }
}





export const WheelsOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    let WheelsHTML = `<select id="wheels"><option  value="0">select a wheel type...</option>`
    document.addEventListener("change", handleTechnologiesChoice )
                
    const divStringArray = wheels.map(
        (wheel) => {
            return `<option class="dropDownWheel" value='${wheel.id}'> ${wheel.type} </option>`
        }
    )

    WheelsHTML += divStringArray.join("")
    WheelsHTML +=  `</select>`


    return  WheelsHTML
}
