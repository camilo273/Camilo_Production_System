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
      {product.crce7_imagen_url && (
        <img
          src={product.crce7_imagen_url}
          alt={product.crce7_nombre_ || 'Imagen del producto'}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '8px 8px 0 0',
            marginBottom: '0.5rem'
          }}
        />
      )}
      <h3 style={{ margin: '0.5rem 0 0.25rem' }}>{product.crce7_nombre_}</h3>
      <p style={{ margin: '0.25rem 0', color: '#888' }}>
        Cód: <strong>{product.crce7_codigo}</strong>
      </p>
      <p style={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '0.5rem' }}>
        Precio: ${product.crce7_costo?.toFixed(0) || 'N/A'}
      </p>
      {product.crce7_lineaproductiva && (
        <div
          style={{
            backgroundColor: product.color_linea_productiva || '#ccc',
            color: (() => {
              const hex = (product.color_linea_productiva || '#ccc').replace('#', '');
              const r = parseInt(hex.substring(0, 2), 16);
              const g = parseInt(hex.substring(2, 4), 16);
              const b = parseInt(hex.substring(4, 6), 16);
              const brightness = (r * 299 + g * 587 + b * 114) / 1000;
              return brightness > 160 ? '#000' : '#fff';
            })(),
            padding: '0.25rem 0.5rem',
            borderRadius: '8px',
            display: 'inline-block',
            marginTop: '0.5rem',
            fontSize: '0.85rem',
            fontWeight: 'medium'
          }}
        >
          {product.nombre_linea_productiva || 'Sin asignar'}
        </div>
      )}
    </div>
  );
}

export default ProductCard;