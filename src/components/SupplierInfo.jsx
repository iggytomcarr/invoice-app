import styles from '../styles/SupplierInfo.module.css';

function SupplierInfo() {
    return (
        <div className={styles.supplier}>
            <h2 className={styles.subtitle}>Supplier Information</h2>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>APD Location</th>
                    <th>APD Stock Shelf</th>
                    <th>Stock Level</th>
                    <th>Supplier</th>
                    <th>Order Code</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default SupplierInfo;
