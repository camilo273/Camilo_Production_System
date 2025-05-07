import React from 'react';
import PropTypes from 'prop-types';

function Button({
  label,
  icon = null,
  onClick = () => {},
  disabled = false,
  variant = 'primary'
}) {
  // Define styles for different variants
  const variantStyles = {
    primary: {
      backgroundColor: disabled ? '#ccc' : '#007bff',
      color: 'white',
    },
    secondary: {
      backgroundColor: disabled ? '#eee' : '#6c757d',
      color: 'white',
    },
    danger: {
      backgroundColor: disabled ? '#f8d7da' : '#dc3545',
      color: 'white',
    },
    success: {
      backgroundColor: disabled ? '#d4edda' : '#28a745',
      color: 'white',
    },
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '8px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontSize: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        ...variantStyles[variant], // Apply styles based on the variant
      }}
    >
      {icon && (
        <span style={{ display: 'flex', alignItems: 'center' }}>
          {React.cloneElement(icon, { size: 20, color: disabled ? '#666' : 'white' })}
        </span>
      )}
      {label}
    </button>
  );
}

// Define PropTypes for the Button component
Button.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success']),
};

export default Button;