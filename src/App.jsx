import InvoiceForm from './components/InvoiceForm';
import OrderTable from './components/OrderTable.jsx';
import SupplierInfo from './components/SupplierInfo';
import styles from './styles/App.module.css';

function App() {
    return (
        <div className={styles.container}>
            <InvoiceForm />
            <OrderTable />
            <SupplierInfo />
        </div>
    );
}

export default App;
