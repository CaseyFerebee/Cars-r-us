import { setTechnologyChoice } from "./transientState.js"


const handleTechnologiesChoice = (changeEvent) => {
    // Make sure you change this condition if you named your inputs differently
    if (changeEvent.target.id === "technologies") {
        setTechnologyChoice(parseInt(changeEvent.target.value))
    }
}




export const TechnologyOptions = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const technologies= await response.json()

    let technologiesHTML = `<select id="technologies"><option  value="0">select a package...</option>`
    document.addEventListener("change", handleTechnologiesChoice)
                
    const divStringArray = technologies.map(
        (technology ) => {
            return `<option value='${technology.id}'> ${technology.package} </option>`
        }
    )

    technologiesHTML += divStringArray.join("")
    technologiesHTML +=  `</select>`


    return technologiesHTML 
}
