// src/components/ProductCard.jsx
import React from 'react';
import BadgeLabel from './BadgeLabel';

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
      {product.nombre_linea_productiva && (
        <BadgeLabel
          text={product.nombre_linea_productiva}
          backgroundColor={product.color_linea_productiva}
        />
      )}
      {product.Tipo && (
        <BadgeLabel
          text={product.Tipo}
          backgroundColor={product.Tipo_color}
        />
      )}
    </div>
  );
}

export default ProductCard;