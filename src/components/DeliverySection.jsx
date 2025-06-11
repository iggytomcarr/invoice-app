import styles from '../styles/DeliverySection.module.css';

function DeliverySection({ delivery, setDelivery, onCopyFromCustomer }) {
    
    const handleCopy = () => {
        // This copies customer data to delivery fields
        onCopyFromCustomer();
        console.log('Customer data copied to delivery fields!');
    };

    const handleLookUp = () => {
        console.log("Look up clicked!");
        // Add your lookup functionality here
    };

    return (
        <div className={styles.section}>
            <div className={styles.buttonGroup}>
                <button className={styles.button} onClick={handleCopy}>COPY</button>
                <button className={styles.button} onClick={handleLookUp}>LOOK UP</button>
            </div>
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <td className={styles.label}>FirstName</td>
                        <td>
                            <input 
                                type="text" 
                                value={delivery?.firstName || ''} 
                                onChange={(e) => setDelivery({...delivery, firstName: e.target.value})}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.label}>LastName</td>
                        <td>
                            <input 
                                type="text" 
                                value={delivery?.lastName || ''} 
                                onChange={(e) => setDelivery({...delivery, lastName: e.target.value})}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.label}>Business</td>
                        <td>
                            <input 
                                type="text" 
                                value={delivery?.business || ''} 
                                onChange={(e) => setDelivery({...delivery, business: e.target.value})}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.label}>Address 1</td>
                        <td>
                            <input 
                                type="text" 
                                value={delivery?.address1 || ''} 
                                onChange={(e) => setDelivery({...delivery, address1: e.target.value})}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.label}>Address 2</td>
                        <td>
                            <input 
                                type="text" 
                                value={delivery?.address2 || ''} 
                                onChange={(e) => setDelivery({...delivery, address2: e.target.value})}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.label}>Town</td>
                        <td>
                            <input 
                                type="text" 
                                value={delivery?.town || ''} 
                                onChange={(e) => setDelivery({...delivery, town: e.target.value})}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.label}>PostCode</td>
                        <td>
                            <input 
                                type="text" 
                                value={delivery?.postcode || ''} 
                                onChange={(e) => setDelivery({...delivery, postcode: e.target.value})}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.label}>Country</td>
                        <td>
                            <select 
                                value={delivery?.country || ''} 
                                onChange={(e) => setDelivery({...delivery, country: e.target.value})}
                            >
                                <option value="">Select Country</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="United States">United States</option>
                                <option value="Germany">Germany</option>
                                <option value="France">France</option>
                                <option value="Canada">Canada</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.label}>Telephone</td>
                        <td>
                            <input 
                                type="text" 
                                value={delivery?.telephone || ''} 
                                onChange={(e) => setDelivery({...delivery, telephone: e.target.value})}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DeliverySection;