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

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Buscar producto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginRight: '1rem' }}
        />
        <input
          type="text"
          placeholder="Filtrar por línea"
          value={linea}
          onChange={(e) => setLinea(e.target.value)}
        />
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product, index) => {
          const isLast = index === products.length - 1;
          return (
            <li
              key={product.crce7_t_productosid || index}
              ref={isLast ? lastProductRef : null}
              style={{
                padding: '10px',
                borderBottom: '1px solid #ccc',
                background: '#f9f9f9',
                marginBottom: '4px',
              }}
            >
              <strong>{product.crce7_nombre_ || 'Sin nombre'}</strong>
            </li>
          );
        })}
      </ul>

      {loading && <p>Cargando más productos...</p>}
      {!hasMore && !loading && <p>Fin de la lista.</p>}
    </div>
  );
}