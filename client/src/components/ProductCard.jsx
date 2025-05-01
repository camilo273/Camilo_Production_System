// src/components/ProductCard.jsx
import React from 'react';

function ProductCard({ product, isSelected, onSelect, isLast, lastRef }) {
  return (
    <div
      key={product.crce7_t_productosid}
      ref={isLast ? lastRef : null}
      onClick={() => onSelect(product.crce7_t_productosid)}
      style={{
        border: isSelected ? '2px solid #007bff' : '1px solid #ddd',
        borderRadius: '12px',
        padding: '1rem',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        backgroundColor: isSelected ? '#f0f8ff' : 'white',
        position: 'relative'
      }}
    >
      {product.crce7_lineaproductiva && product.crce7_color && (
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: product.crce7_color,
          color: 'white',
          padding: '0.25rem 0.5rem',
          borderRadius: '8px',
          fontSize: '0.8rem',
          fontWeight: 'bold'
        }}>
          {product.crce7_lineaproductiva}
        </div>
      )}
      <h3 style={{ margin: '0.5rem 0 0.25rem' }}>{product.crce7_nombre_}</h3>
      <p style={{ margin: '0.25rem 0', color: '#888' }}>
        Cód: <strong>{product.crce7_codigo}</strong>
      </p>
      <p style={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '0.5rem' }}>
        Precio: ${product.crce7_costo?.toFixed(0) || 'N/A'}
      </p>
      <p style={{ marginTop: '0.25rem', fontSize: '0.9rem', color: '#555' }}>
        Línea productiva: {product.crce7_lineaproductiva || 'Sin asignar'}
      </p>
    </div>
  );
}

export default ProductCard;