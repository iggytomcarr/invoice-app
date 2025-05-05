import styles from '../styles/CustomerSection.module.css';
import customers from '../example_data/customers.js'
import { useState } from 'react';

function CustomerSection() {

    const [customer, setCustomer] = useState({});

    const loadCustomer = () => {
        const customerToLoad = customers[4]; // later: let user select which one
        setCustomer(customerToLoad);
    };


    return (
        <div className={styles.section}>
            <button className={styles.button} onClick={loadCustomer}>LOAD CUSTOMER</button>
            <table className={styles.table}>
                <tbody>
                <tr>
                    <td className={styles.label}>Customer Number</td>
                    <td><input type="text" value={customer.customerNumber || ''} readOnly /></td>
                </tr>

                <tr>
                    <td className={styles.label}>Email Address</td>
                    <td><input type="text" value={customer.emailAddress || ''} readOnly /></td>
                </tr>

                <tr>
                    <td className={styles.label}>FirstName</td>
                    <td><input type="text" value={customer.firstName || ''} readOnly /></td>
                </tr>
                <tr>
                    <td className={styles.label}>LastName</td>
                    <td><input type="text" value={customer.lastName || ''} readOnly /></td>
                </tr>
                <tr>
                    <td className={styles.label}>Business</td>
                    <td><input type="text" value={customer.business || ''} readOnly /></td>
                </tr>
                <tr>
                    <td className={styles.label}>Address 1</td>
                    <td><input type="text" value={customer.address1 || ''} readOnly /></td>
                </tr>
                <tr>
                    <td className={styles.label}>Address 2</td>
                    <td><input type="text" value={customer.address2 || ''} readOnly /></td>
                </tr>
                <tr>
                    <td className={styles.label}>Town</td>
                    <td><input type="text" value={customer.town || ''} readOnly /></td>
                </tr>
                <tr>
                    <td className={styles.label}>PostCode</td>
                    <td><input type="text" value={customer.postcode || ''} readOnly /></td>
                </tr>
                <tr>
                    <td className={styles.label}>Country</td>
                    <td><input type="text" value={customer.country || ''} readOnly /></td>
                </tr>
                <tr>
                    <td className={styles.label}>Telephone</td>
                    <td><input type="text" value={customer.telephone || ''} readOnly /></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CustomerSection;
