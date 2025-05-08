import React from 'react';

function BadgeLabel({ text, backgroundColor = '#ccc' }) {
  // Calcular color de texto (blanco o negro) según brillo del fondo
  const textColor = (() => {
    const hex = backgroundColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 160 ? '#000' : '#fff';
  })();

  return (
    <div
      style={{
        backgroundColor,
        color: textColor,
        padding: '0.25rem 0.5rem',
        borderRadius: '8px',
        display: 'inline-block',
        marginTop: '0.5rem',
        fontSize: '0.85rem',
        fontWeight: '500'
      }}
    >
      {text || 'Sin asignar'}
    </div>
  );
}

export default BadgeLabel;
