import React from 'react';

const InputField = ({
    type,
    value,
    placeholder,
    onChange,
    errorMessage
}) =>{
    return(
        <>
        <input
            style={{borderColor: 'green'}}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
        <div style={{color:'green'}}>{errorMessage}</div>
        </>
    )
};

export default InputField;