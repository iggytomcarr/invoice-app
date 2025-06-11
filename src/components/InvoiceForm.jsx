import CustomerSection from './CustomerSection';
import DeliverySection from './DeliverySection';
import styles from '../styles/InvoiceForm.module.css';
import { useState } from 'react';


function InvoiceForm() {

    const [customer, setCustomer] = useState({});
    const [delivery, setDelivery] = useState({});
    const [invoiceSetting, setInvoiceSetting] = useState('quote');

    // Function to copy customer data to delivery
    const copyCustomerToDelivery = () => {
        setDelivery({
            firstName: customer.firstName || '',
            lastName: customer.lastName || '',
            business: customer.business || '',
            address1: customer.address1 || '',
            address2: customer.address2 || '',
            town: customer.town || '',
            postcode: customer.postcode || '',
            country: customer.country || '',
            telephone: customer.telephone || ''
        });
    };

    return (
        <div className={styles.formContainer}>
            <h1 className={styles.title}>Create New Order</h1>
            <div className={styles.toggleGroup}>
                <label>
                    <input
                        type="radio"
                        name="invoiceSetting"
                        value="quote"
                        checked={invoiceSetting === 'quote'}
                        onChange={(e) => setInvoiceSetting(e.target.value)}
                    />
                    Quote
                </label>
                <label>
                    <input
                        type="radio"
                        name="invoiceSetting"
                        value="invoice"
                        checked={invoiceSetting === 'invoice'}
                        onChange={(e) => setInvoiceSetting(e.target.value)}
                    />
                    Invoice
                </label>
                <label>
                    <input type="checkbox" /> VAT Applicable
                </label>
                <label>
                    <input type="checkbox" /> Edit Order
                </label>
            </div>
            <div className={styles.sections}>
                <CustomerSection customer={customer} setCustomer={setCustomer}/>
                <DeliverySection
                    delivery={delivery}
                    setDelivery={setDelivery}
                    onCopyFromCustomer={copyCustomerToDelivery}
                />
            </div>
        </div>
    );
}

export default InvoiceForm;
