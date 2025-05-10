import React from 'react';

function createOrder() {
    console.log("Create order clicked!")
    alert("Wire this into your back end, to place an order.")
}


const CreateOrderButton = () => {
    return (
        <button onClick={createOrder}>Create Order</button>
    )

}

export default CreateOrderButton;
