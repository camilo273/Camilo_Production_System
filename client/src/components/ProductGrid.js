import React from 'react';

function ProductGrid({ products, selectedProductId, onSelect }) {
  if (!products || products.length === 0) {
    return (
      <div style={{ textAlign: 'center', color: '#888', fontSize: '1.1rem' }}>
        No se encontraron productos para mostrar.
      </div>
    );
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '1.5rem'
    }}>
      {products.map(product => (
        <div
          key={product.id}
          onClick={() => onSelect(product.id)}
          style={{
            border: selectedProductId === product.id ? '2px solid #007bff' : '1px solid #ddd',
            borderRadius: '12px',
            padding: '1rem',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            backgroundColor: selectedProductId === product.id ? '#f0f8ff' : 'white'
          }}
        >
          <h3 style={{ margin: '0.5rem 0 0.25rem' }}>{product.name}</h3>
          <p style={{ margin: '0.25rem 0', color: '#888' }}>
            Código: <strong>{product.code}</strong>
          </p>
          <div style={{
            backgroundColor: product.lineaproductiva_color || '#ccc',
            color: '#fff',
            padding: '4px 8px',
            borderRadius: '12px',
            display: 'inline-block',
            fontSize: '0.75rem',
            marginBottom: '8px'
          }}>
            {product.lineaproductiva || 'Sin Línea'}
          </div>
          <p style={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '0.5rem' }}>
            Precio: ${product.price_per_unit?.toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;