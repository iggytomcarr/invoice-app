import styles from '../styles/CustomerSection.module.css';

function CustomerSection() {
    return (
        <div className={styles.section}>
            <button className={styles.button}>LOAD CUSTOMER</button>
            <table className={styles.table}>
                <tbody>
                {["Customer Number", "Email", "FirstName", "LastName", "Address"].map((item, idx) => (
                    <tr key={idx}>
                        <td className={styles.label}>{item}</td>
                        <td><input type="text" /></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default CustomerSection;
