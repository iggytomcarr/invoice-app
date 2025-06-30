import {useEffect, useState} from 'react';
import tableStyles from '../styles/OrderTable.module.css';
import modalStyles from '../styles/AddProductModal.module.css';

import AddProductButton from './AddProductButton.jsx';

function OrderTable() {
    const [orderLines, setOrderLines] = useState([{
        id: Date.now(),
        partNo: '',
        description: '',
        qty: 0,
        weight: 0,
        priceExVat: 0,
        vat: 0,
        totalIncVat: 0
    }
    ]);
    const [editingLine, setEditingLine] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const [inputMode, setInputMode] = useState('manual');
    const [searchResults, setSearchResults] = useState([]);

    const VAT_RATE = 0.20;

    const calculateLineTotals = (lines) =>
    {
        return lines.map(line => {
            const lineTotal = line.qty * line.priceExVat;
            const vatAmount = lineTotal * VAT_RATE;
            const totalIncVat = lineTotal + vatAmount;
            return {
                ...line,
                vat : Number(vatAmount.toFixed(2)),
                totalIncVat: Number(totalIncVat.toFixed(2))
            }
        })
    }

    const calculateOrderTotals = () => {
        const totals = orderLines.reduce((acc, line) => {
            const lineTotal = line.qty * line.priceExVat;
            const vatAmount = lineTotal * VAT_RATE;
            const totalIncVat = lineTotal + vatAmount;

            return {
                subtotal: acc.subtotal + lineTotal,
                totalVat: acc.totalVat + vatAmount,
                grandTotal: acc.grandTotal + totalIncVat
            };
        }, { subtotal: 0, totalVat: 0, grandTotal: 0 });

        return {
            subtotal: Number(totals.subtotal.toFixed(2)),
            totalVat: Number(totals.totalVat.toFixed(2)),
            grandTotal: Number(totals.grandTotal.toFixed(2))
        };

    };

    // Recalculate totals whenever orderLines change
    useEffect(() => {
        const updatedLines = calculateLineTotals(orderLines);
        // Only update if calculations have changed to avoid infinite loop
        const hasChanges = updatedLines.some((line, index) =>
            line.vat !== orderLines[index].vat ||
            line.totalIncVat !== orderLines[index].totalIncVat
        );

        if (hasChanges) {
            setOrderLines(updatedLines);
        }
    }, [orderLines.map(line => `${line.qty}-${line.priceExVat}`).join(',')]);





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
        setInputMode('manual');
        setSearchResults([]);
    };

    const saveChanges = (partNo) => {
        if (editingLine) {
            handleFieldChange(editingLine.id, 'partNo', partNo);
            closeModal();
        }
    };

    const orderTotals = calculateOrderTotals();

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
                    <tr
                        key={line.id}
                        className={editingLine?.id === line.id ? tableStyles.highlightedRow : ''}
                        >
                        <td>{index + 1}</td>
                        <td
                            className={tableStyles.editableCell}
                            onClick={() => openEditModal(line)}
                        >
                            {line.partNo || 'Click to edit'}
                        </td>
                        <td>

                            <input
                            type="text"
                            value={line.description}
                            onChange={(e) => handleFieldChange(line.id, 'description', e.target.value)}
                            className={tableStyles.editableInput}
                            placeholder="Enter description"
                            />
                        </td>
                        <td>

                            <input
                                type="number"
                                value={line.qty}
                                onChange={(e) => handleFieldChange(line.id, 'qty', Number(e.target.value))}
                                className={tableStyles.editableInput}
                                min="0"
                            />

                        </td>
                        <td>

                            <input
                                type="number"
                                value={line.weight}
                                onChange={(e) => handleFieldChange(line.id, 'weight', Number(e.target.value))}
                                className={tableStyles.editableInput}
                                min="0"
                                step="0.01"
                            />

                        </td>
                        <td>

                            <input
                                type="number"
                                value={line.priceExVat}
                                onChange={(e) => handleFieldChange(line.id, 'priceExVat', Number(e.target.value))}
                                className={tableStyles.editableInput}
                                min="0"
                                step="0.01"
                            />
                            </td>
                        <td>{line.vat}</td>
                        <td>{line.totalIncVat}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <AddProductButton onClick={handleAddLine} />

            {showModal && (
                <div className={modalStyles.modalOverlay}>
                    <div className={modalStyles.modalContainerExpanded}>
                        <div className={modalStyles.modalHeader}>
                            <h3>Add a part manually or search the product database</h3>
                            <button className={modalStyles.closeButton} onClick={closeModal}>×</button>
                        </div>

                        <div className={modalStyles.modalBodyExpanded}>
                            <div className={modalStyles.modalLeft}>
                                <div className={modalStyles.radioGroup}>
                                    <label className={modalStyles.radioOption}>
                                        <input
                                            type="radio"
                                            name="inputMode"
                                            value="manual"
                                            checked={inputMode === 'manual'}
                                            onChange={() => setInputMode('manual')}
                                        />
                                        Manual
                                    </label>
                                    <label className={modalStyles.radioOption}>
                                        <input
                                            type="radio"
                                            name="inputMode"
                                            value="search"
                                            checked={inputMode === 'search'}
                                            onChange={() => setInputMode('search')}
                                        />
                                        Search
                                    </label>
                                </div>

                                {inputMode === 'manual' ? (
                                    <>
                                        <label htmlFor="partNoInput">Enter Part Number</label>
                                        <input
                                            id="partNoInput"
                                            type="text"
                                            value={editingLine?.partNo || ''}
                                            onChange={(e) => setEditingLine({ ...editingLine, partNo: e.target.value })}
                                            className={modalStyles.modalInput}
                                            autoFocus
                                        />
                                        <div className={modalStyles.modalDescription}>
                                            Enter the part number manually and click "Save" and continue editing the product description and other details in the invoice table.
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <label htmlFor="searchInput">Search</label>
                                        <input
                                            id="searchInput"
                                            type="text"
                                            value={editingLine?.partNo || ''}
                                            onChange={async (e) => {
                                                const value = e.target.value;
                                                setEditingLine({ ...editingLine, partNo: value });

                                                const fakeResults = [
                                                    { id: 1, partNo: 'ABC123', desc: 'Brake Pad' },
                                                    { id: 2, partNo: 'XYZ789', desc: 'Oil Filter' }
                                                ];
                                                setSearchResults(value ? fakeResults : []);
                                            }}
                                            className={modalStyles.modalInput}
                                            autoFocus
                                        />
                                        <div className={modalStyles.modalDescription}>
                                            Start typing to search the product database.
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className={modalStyles.modalRight}>
                                {inputMode === 'search' && searchResults.length > 0 && (
                                    <table className={modalStyles.resultsTable}>
                                        <thead>
                                        <tr>
                                            <th>Part No</th>
                                            <th>Description</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {searchResults.map(result => (
                                            <tr
                                                key={result.id}
                                                onClick={() => {
                                                    setEditingLine({ ...editingLine, partNo: result.partNo });
                                                    setSearchResults([]);
                                                }}
                                                className={modalStyles.resultRow}
                                            >
                                                <td>{result.partNo}</td>
                                                <td>{result.desc}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>

                        <div className={modalStyles.modalFooter}>
                            <button className={modalStyles.saveButton} onClick={() => saveChanges(editingLine.partNo)}>Save</button>
                            <button className={modalStyles.cancelButton} onClick={closeModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default OrderTable;
