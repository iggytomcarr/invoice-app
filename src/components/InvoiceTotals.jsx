import styles from '../styles/InvoiceTotals.module.css';
import CreateOrderButton from "./CreateOrderButton.jsx";

function InvoiceTotals() {
    return (
        <div className={styles.invoiceTotals}>
            <table className={styles.totalsTable}>
                <tbody>
                <tr>
                    <td className={styles.label}>Total Weight KG</td>
                    <td className={styles.value}>0</td>
                </tr>
                <tr>
                    <td className={styles.label}>Surcharge Total</td>
                    <td className={styles.value}>0.00</td>
                </tr>
                <tr>
                    <td className={styles.label}>Product Total</td>
                    <td className={styles.value}>0.00</td>
                </tr>
                <tr>
                    <td className={styles.label}>Shipping Type:</td>
                    <td className={styles.value}></td>
                </tr>
                <tr>
                    <td className={styles.label}>Shipping Price:</td>
                    <td className={styles.value}>0.00</td>
                </tr>
                <tr>
                    <td className={styles.label}>Order Total Ex VAT</td>
                    <td className={styles.value}>0.00</td>
                </tr>
                <tr>
                    <td className={styles.label}>Total VAT</td>
                    <td className={styles.value}>0.00</td>
                </tr>
                <tr>
                    <td className={styles.label}>Grand Total</td>
                    <td className={styles.value}><strong>0.00</strong></td>
                </tr>
                </tbody>
            </table>
            <CreateOrderButton />
        </div>
    );
}

export default InvoiceTotals;
