import styles from '../styles/DeliverySection.module.css';

function DeliverySection() {
    return (
        <div className={styles.section}>
            <div className={styles.buttonGroup}>
                <button className={styles.button}>COPY</button>
                <button className={styles.button}>LOOK UP</button>
            </div>
            <table className={styles.table}>
                <tbody>
                {[
                    "Status", "FirstName", "LastName", "Business", "Address 1",
                    "Address 2", "Town", "County", "PostCode", "Telephone",
                    "Mobile", "Country", "Instructions"
                ].map((item, idx) => (
                    <tr key={idx}>
                        <td className={styles.label}>{item}</td>
                        <td>
                            {item === "Country" ? (
                                <select>
                                    <option>United Kingdom</option>
                                    <option>USA</option>
                                    <option>Germany</option>
                                    <option>France</option>
                                </select>
                            ) : (
                                <input type="text" />
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default DeliverySection;
