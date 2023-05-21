export const orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/Orders?_expand=paint&_expand=interior&_expand=technology&_expand=wheel")
    const orders =  await fetchResponse.json()




    let orderHTML = ""

    const order = orders.map(
        (order) => {
        const orderPrice = order.paint.price + order.interior.price + order.technology.price + order.wheel.price


            return ` <section class="order">
            <div>Order #${order.id} costs ${orderPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })}</div>
            
        
    </section> 
    `
        }
    )

    orderHTML += order.join("")
    return orderHTML
}
