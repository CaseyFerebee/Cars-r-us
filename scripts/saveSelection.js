import { saveSelectionSubmission } from "./transientState.js"

const handleSelectionSubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === "saveSelection") {
        saveSelectionSubmission()
    }
}


export const saveSelection = () => {
    document.addEventListener("click", handleSelectionSubmissionClick)



    return "<button id='saveSelection'>Save Selections</button>"
}