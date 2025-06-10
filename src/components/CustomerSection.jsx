import styles from '../styles/CustomerSection.module.css';
import customers from '../example_data/customers.js'
import { useState } from 'react';
import CustomerModal from './CustomerModal';



function CustomerSection({customer, setCustomer}) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const loadCustomer = () => {
        setIsModalOpen(true);
    };

    const handleCustomerSelect = (selectedCustomer) => {
        setCustomer(selectedCustomer);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.section}>
            <button className={styles.button} onClick={loadCustomer}>LOAD CUSTOMER</button>

            <CustomerModal
                customers={customers}
                isOpen={isModalOpen}
                onClose={closeModal}
                onSelectCustomer={handleCustomerSelect}
            />

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
                    <td>
                        <select value={customer.country || ''} onChange={(e) => setCustomer({...customer, country: e.target.value})}>
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
                    <td><input type="text" value={customer.telephone || ''} readOnly /></td>
                </tr>
                </tbody>
            </table>
        </div>
    );

}

export default CustomerSection;
