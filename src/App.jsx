import InvoiceForm from './components/InvoiceForm';
import OrderTable from './components/OrderTable.jsx';
import SupplierInfo from './components/SupplierInfo';
import styles from './styles/App.module.css';
import InvoiceTotals from './components/InvoiceTotals.jsx';
import { useState } from 'react';

function App() {
    const [orderTotals, setOrderTotals] = useState({
        subtotal: 0,
        totalVat: 0,
        grandTotal: 0
    });

    return (
        <div className={styles.container}>
            <InvoiceForm />
            <OrderTable onTotalsChange={setOrderTotals} />
            {/*<SupplierInfo />*/}
            <InvoiceTotals totals={orderTotals} />
        </div>
    );
}

export default App;
