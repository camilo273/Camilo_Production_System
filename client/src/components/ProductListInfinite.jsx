import React, { useState } from 'react';
import { useProductsInfinite } from '../hooks/useProductsInfinite';

export default function ProductListInfinite() {
  const [search, setSearch] = useState('');
  const [linea, setLinea] = useState('');

  const { products, loading, hasMore, lastProductRef } = useProductsInfinite({
    search,
    linea,
    limit: 50,
  });

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Productos</h2>

      <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
        <input
          type="text"
          placeholder="Buscar por nombre, código o categoría..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '0.5rem',
            fontSize: '1rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            width: '300px',
          }}
        />
        <input
          type="text"
          placeholder="Filtrar por línea"
          value={linea}
          onChange={(e) => setLinea(e.target.value)}
          style={{
            padding: '0.5rem',
            fontSize: '1rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            width: '200px',
          }}
        />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1rem',
        }}
      >
        {products.map((product, index) => {
          const isLast = index === products.length - 1;
          return (
            <div
              key={product.crce7_t_productosid || index}
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
                Código: <strong>{product.crce7_codigo || 'Sin código'}</strong>
              </p>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: '1rem', textAlign: 'center', color: '#555' }}>
        {loading && <p>Cargando más productos...</p>}
        {!hasMore && !loading && <p>Fin de la lista.</p>}
      </div>
    </div>
  );
}