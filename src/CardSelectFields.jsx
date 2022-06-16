import React from 'react';

const CardSelectFields = ({label, onChangeMonth, onChangeYear}) => {
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const years = [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033]

    return (
        <label className='card-input'>
            <span>{label}</span>
            <div className='card-input__select-wrapper'>
                <select onChange={e => onChangeMonth(prev => ({...prev, month: e.target.value}))} defaultValue={''}>
                    <option disabled value={''}>{'Month'}</option>
                    {months.map(month => <option key={month} value={month.toString()}>{month}</option>)}
                </select>
                <select onChange={e => onChangeYear(prev => ({...prev, year: e.target.value}))} defaultValue={''}>
                    <option disabled value={''}>{'Year'}</option>
                    {years.map(year => <option key={year} value={year.toString()}>{year}</option>)}
                </select>
            </div>
        </label>
    );
};

export default CardSelectFields;
