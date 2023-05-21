import { WheelsOptions } from "./wheels.js"
import { InteriorOptions } from "./interior.js"
import { orders } from "./order.js"
import { PaintOptions } from "./paints.js"
import { saveSelection } from "./saveSelection.js"
import { TechnologyOptions } from "./technologies.js"



const render = async () => {

    const ordersHTML = await orders()
    const saveSelectionHTML =  saveSelection()
    const interiorHTML = await InteriorOptions()
    const wheelTypeHTML = await WheelsOptions()
    const paintsHTML = await PaintOptions()
    const technologiesHTML = await TechnologyOptions()


    const composedHTML = `
        <h1>Cars R US</h1>

        <article class="choices">
            <section class="choices__paint options">
                <h2>Paints</h2>
                ${paintsHTML}
            </section>

            <section class="choices__wheel options">
                <h2>wheel</h2>
                ${wheelTypeHTML}
        </section>

            <section class="choices__interior options">
                <h2>Interior</h2>
                ${interiorHTML}
            </section>

            <section class="choices__technologies options">
                <h2>Technologies</h2>
                ${technologiesHTML}
            </section>
        </article>

        <article class="selectionButton">
            ${saveSelectionHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${ordersHTML}
        </article>
    `

    container.innerHTML = composedHTML
}
render()
document.addEventListener("newSelectionCreated", render)


