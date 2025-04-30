import React from 'react';

function DropdownLinea({
  label,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  displayField = 'nombre', // por defecto usamos 'nombre'
}) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>{label}:</label>
      <select
        value={value}
        onChange={onChange}
        required={required}
        style={{ width: '100%', padding: '0.5rem' }}
      >
        <option disabled value="">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option[displayField] || '(Sin nombre)'}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownLinea;