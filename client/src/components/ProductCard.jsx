import React from 'react';

function ProductCard({ product, isLast, lastProductRef }) {
  return (
    <div
      key={product.crce7_t_productosid}
      ref={isLast ? lastProductRef : null}
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '1rem',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#333' }}>
        {product.crce7_nombre_ || 'Sin nombre'}
      </h3>
      <p style={{ margin: '0.5rem 0 0', color: '#666' }}>
        Cód: <strong>{product.crce7_codigo || 'Sin código'}</strong>
      </p>
      
    </div>
  );
}

export default ProductCard;