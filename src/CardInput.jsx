import React from 'react';

const CardInput = ({label, onChange, onFocus, maxLength, field}) => {

    const onFocusCvv = () => label === 'CVV' && onFocus(true)
    const onBlurCvv = () => label === 'CVV' && onFocus(false)

    const modifyInput = (e) => {
        let value = e.target.value
        onChange(prev => ({...prev, [field]: value}))
    }

    const numberOnly = (e) => label !== 'Card Holder' && !/[0-9]/.test(e.key) && e.preventDefault()

    return (
        <label className='card-input'>
            <span>{label}</span>
            <input
                type='text'
                maxLength={maxLength}
                onKeyPress={numberOnly}
                onChange={modifyInput}
                onFocus={onFocusCvv}
                onBlur={onBlurCvv}
            />
        </label>
    );
};

export default CardInput;
