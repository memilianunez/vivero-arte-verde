import React from 'react';
import styles from "./Field.module.css";

const Field = ({ label, name, onChange, type, placeholder }) => {
    return (
        <div className={`mx-4 my-2 ${styles.formControl}`}>
            <label className={`form-label ${styles.label}`}>{label}</label>
            <input className="form-control" name={name} type={type} placeholder={placeholder} onChange={onChange} />
        </div>
    );
};

export default Field;
