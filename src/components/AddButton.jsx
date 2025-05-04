import { Plus } from 'lucide-react';
import styles from '../styles/AddButton.module.css';



function AddButton({ onClick, className }) {
    return (
        <button className={`${styles.addButton} ${className || ''}`} onClick={onClick}>
            <Plus size={20} stroke="#ffffff" strokeWidth={2.5} />
        </button>
    );
}

export default AddButton;
