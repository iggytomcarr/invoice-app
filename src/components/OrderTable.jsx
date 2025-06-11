import { useState } from 'react';
import tableStyles from '../styles/OrderTable.module.css';
import modalStyles from '../styles/AddProductModal.module.css';


import AddProductButton from './AddProductButton.jsx';

function OrderTable() {
    const [orderLines, setOrderLines] = useState([]);
    const [editingLine, setEditingLine] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleAddLine = () => {
        const newLine = {
            id: Date.now(),
            partNo: '',
            description: '',
            qty: 0,
            weight: 0,
            priceExVat: 0,
            vat: 0,
            totalIncVat: 0
        };

        setOrderLines([...orderLines, newLine]);
    };

    // Handler to update a specific field in a specific row
    const handleFieldChange = (id, field, value) => {
        setOrderLines(orderLines.map(line =>
            line.id === id ? { ...line, [field]: value } : line
        ));
    };

    const openEditModal = (line) => {
        setEditingLine(line);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingLine(null);
    };

    const saveChanges = (partNo) => {
        if (editingLine) {
            handleFieldChange(editingLine.id, 'partNo', partNo);
            closeModal();
        }
    };


    return (
        <div className={tableStyles.orderTable}>
            <h2 className={tableStyles.subtitle}>Order</h2>
            <table className={tableStyles.table}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Part No</th>
                        <th>Description</th>
                        <th>Qty</th>
                        <th>Weight kg</th>
                        <th>Price ex VAT</th>
                        <th>VAT</th>
                        <th>Total inc VAT</th>
                    </tr>
                </thead>
                <tbody>
                    {orderLines.map((line, index) => (
                        <tr key={line.id}>
                            <td>{index + 1}</td>

                            <td
                                className={tableStyles.editableCell}
                                onClick={() => openEditModal(line)}
                            >
                                {line.partNo || 'Click to edit'}
                            </td>




                            <td>{line.description}</td>
                            <td>{line.qty}</td>
                            <td>{line.weight}</td>
                            <td>{line.priceExVat}</td>
                            <td>{line.vat}</td>
                            <td>{line.totalIncVat}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <AddProductButton onClick={handleAddLine} />

            {/* Modal Component */}
            {showModal && (
                <div className={modalStyles.modalOverlay}>
                    <div className={modalStyles.modalContainer}>
                        <div className={modalStyles.modalHeader}>
                            <h3>Edit Part Number</h3>
                            <button
                                className={modalStyles.closeButton}
                                onClick={closeModal}
                            >
                                ×
                            </button>
                        </div>
                        <div className={modalStyles.modalBody}>
                            <label htmlFor="partNoInput">Part No:</label>
                            <input
                                id="partNoInput"
                                type="text"
                                value={editingLine?.partNo || ''}
                                onChange={(e) => setEditingLine({...editingLine, partNo: e.target.value})}
                                className={modalStyles.modalInput}
                                autoFocus
                            />
                            <div className={modalStyles.modalDescription}>
                                Enter the part number for this product
                            </div>
                        </div>
                        <div className={modalStyles.modalFooter}>
                            <button
                                className={modalStyles.saveButton}
                                onClick={() => saveChanges(editingLine.partNo)}
                            >
                                Save
                            </button>
                            <button
                                className={modalStyles.cancelButton}
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}




        </div>
    );
}

export default OrderTable;