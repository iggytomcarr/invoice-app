import CustomerSection from './CustomerSection';
import DeliverySection from './DeliverySection';
import styles from '../styles/InvoiceForm.module.css';

function InvoiceForm() {
    return (
        <div className={styles.formContainer}>
            <h1 className={styles.title}>New Order</h1>
            <div className={styles.toggleGroup}>
                <label>
                    <input type="radio" name="invoiceSetting" /> Quote
                </label>
                <label>
                    <input type="radio" name="invoiceSetting" /> Invoice
                </label>
                <label>
                    <input type="checkbox" /> VAT Applicable
                </label>
                <label>
                    <input type="checkbox" /> Edit Order
                </label>
            </div>
            <div className={styles.sections}>
                <CustomerSection />
                <DeliverySection />
            </div>
        </div>
    );
}

export default InvoiceForm;
