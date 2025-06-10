import { useState } from 'react';
import styles from '../styles/CustomerModal.module.css';

function CustomerModal({ customers, isOpen, onClose, onSelectCustomer }) {
    const [selectedCustomerId, setSelectedCustomerId] = useState(null);

    const handleSelectCustomer = () => {
        if (selectedCustomerId !== null) {
            const selectedCustomer = customers[selectedCustomerId];
            onSelectCustomer(selectedCustomer);
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h2>Select Customer</h2>
                    <button className={styles.closeButton} onClick={onClose}>×</button>
                </div>

                <div className={styles.customerList}>
                    {customers.map((customer, index) => (
                        <div
                            key={index}
                            className={`${styles.customerItem} ${selectedCustomerId === index ? styles.selected : ''}`}
                            onClick={() => setSelectedCustomerId(index)}
                        >
                            <div className={styles.customerInfo}>
                                <strong>{customer.firstName} {customer.lastName}</strong>
                                <span className={styles.customerDetails}>
                                    {customer.emailAddress} - {customer.customerNumber}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.modalFooter}>
                    <button
                        className={styles.cancelButton}
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className={styles.selectButton}
                        onClick={handleSelectCustomer}
                        disabled={selectedCustomerId === null}
                    >
                        Select Customer
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CustomerModal;