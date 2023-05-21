const transientState = {
    "paintId": 0,
    "interiorId": 0,
    "technologyId":0,
    "wheelId":0
}


export const setPaintChoice = (paintId) => {
    transientState.paintId= paintId
        console.log(transientState)
}
export const setInteriorChoice = (interiorId) => {
    transientState.interiorId= interiorId
    console.log(transientState)
}

export const setTechnologyChoice = (technologyId) => {
    transientState.technologyId = technologyId
    console.log(transientState)
}


export const setWheelChoice = (wheelId) => {
    transientState.wheelId = wheelId
    console.log(transientState)
}


export const saveSelectionSubmission =async() => {
    const postOptions ={
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/Orders", postOptions)

    const customEvent = new CustomEvent("newSelectionCreated")
    document.dispatchEvent(customEvent)

}


