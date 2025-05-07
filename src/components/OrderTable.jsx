
import styles from '../styles/OrderTable.module.css';
import AddProductButton from './AddProductButton.jsx';
// import products from '../example_data/products.js'



function OrderTable() {
    const handleAddLine = () => {
        console.log("Add line clicked!")
    };


    return (
        <div className={styles.orderTable}>
            <h2 className={styles.subtitle}>Order</h2>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Part No</th>
                    <th>Description</th>
                    <th>Qty</th>
                    <th>Weight kg</th>
                    <th>Price ex VAT</th>
                    <th>VAT</th>
                    <th>Total inc VAT</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>

            <AddProductButton onClick={handleAddLine} />


        </div>
    );
}

export default OrderTable;
