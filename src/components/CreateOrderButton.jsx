import React from 'react';
import styles from "../styles/DeliverySection.module.css";

function createOrder() {
    console.log("Create order clicked!")
    alert("Wire this into your back end, to place an order.")
}


const CreateOrderButton = () => {
    return (
        <button className={styles.button} onClick={createOrder}>Create Order</button>
    )

}

export default CreateOrderButton;
