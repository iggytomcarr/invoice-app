import InvoiceForm from './components/InvoiceForm';
import OrderTable from './components/OrderTable.jsx';
import SupplierInfo from './components/SupplierInfo';
import styles from './styles/App.module.css';
import InvoiceTotals from "./components/InvoiceTotals.jsx";

function App() {
    return (
        <div className={styles.container}>
            <InvoiceForm />
            <OrderTable />
            {/*<SupplierInfo />*/}
            <InvoiceTotals />
        </div>
    );
}

export default App;
