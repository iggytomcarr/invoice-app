import React from 'react';
import styles from '../styles/Button.module.css';

const AddProductButton = ({ onClick }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <button onClick={onClick} className={styles.button}>
                +
            </button>
        </div>
    );
};

export default AddProductButton;
