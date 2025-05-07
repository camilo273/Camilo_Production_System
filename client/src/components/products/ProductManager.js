import React, { useState } from 'react';
import Button from '../ui/Button';
import ProductForm from './ProductForm.jsx';
import { useProductsInfinite } from '../../hooks/useProductsInfinite.js';
import ProductCard from './ProductCard.jsx';
import { FaPlus, FaLink, FaTrash } from 'react-icons/fa';

function ProductManager() {
  const [search, setSearch] = useState('');
  const [linea, setLinea] = useState('');
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const { products, loading, hasMore, lastProductRef } = useProductsInfinite({
    search,
    linea,
    limit: 50,
  });

  const handleCreateSubmit = (data) => {
    console.log('Producto creado o referencia guardada:', data);
    setOpenCreateModal(false);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Camilo Production System</h1>
      <h2>Product Manager</h2>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginBottom: '1rem' }}>
      <Button
        onClick={() => setOpenCreateModal(true)}
        icon={<FaPlus />}
        label="Crear Producto"
        variant="primary"
      />
      <Button
        onClick={() => alert('Abrir modal para crear referencia')}
        disabled={!selectedProductId}
        title={!selectedProductId ? 'Selecciona un producto para agregar una referencia' : ''}
        icon={<FaLink />}
        label="Agregar Referencia"
        variant="secondary"
      />
      <Button
        onClick={async () => {
          if (!selectedProductId) return;

          const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
          if (!confirmDelete) return;

          try {
            const response = await fetch(`/api/products/${selectedProductId}`, {
              method: 'DELETE'
            });

            const result = await response.json();

            if (!response.ok) {
              alert(result.error || "❌ Error al eliminar.");
            } else {
              alert(result.message || "✅ Producto eliminado.");
              setSelectedProductId(null);
              window.location.reload();
            }
          } catch (err) {
            alert("❌ Error al intentar eliminar el producto.");
          }
        }}
        disabled={
          !selectedProductId ||
          parseInt(products.find(p => p.crce7_t_productosid === selectedProductId)?.crce7_inv) !== 1
        }
        title={
          !selectedProductId
            ? 'Selecciona un producto para eliminarlo'
            : parseInt(products.find(p => p.crce7_t_productosid === selectedProductId)?.crce7_inv) !== 1
            ? 'Solo se pueden eliminar productos que no sean padres'
            : ''
        }
        icon={<FaTrash />}
        label="Eliminar Producto"
        variant="danger"
      />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Buscar por nombre, código o categoría..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            width: '100%',
            maxWidth: '400px',
            marginBottom: '1rem'
          }}
        />
        <input
          type="text"
          placeholder="Filtrar por línea"
          value={linea}
          onChange={(e) => setLinea(e.target.value)}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            width: '100%',
            maxWidth: '400px'
          }}
        />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.5rem'
      }}>
        {products.map((product, index) => {
          const isLast = index === products.length - 1;
          return (
            <ProductCard
              key={product.crce7_t_productosid || index}
              product={product}
              isSelected={selectedProductId === product.crce7_t_productosid}
              onSelect={setSelectedProductId}
              isLast={isLast}
              lastRef={lastProductRef}
            />
          );
        })}
      </div>

      {loading && (
        <div style={{ textAlign: 'center', margin: '2rem' }}>
          <div className="spinner" style={{
            border: '6px solid #f3f3f3',
            borderTop: '6px solid #007bff',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            animation: 'spin 1s linear infinite',
            margin: 'auto'
          }} />
        </div>
      )}
      {!hasMore && !loading && products.length === 0 && (
        <div style={{ textAlign: 'center', color: '#888', fontSize: '1.1rem' }}>
          No se encontraron productos para mostrar.
        </div>
      )}

      {openCreateModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            maxWidth: '600px',
            width: '90%',
            boxShadow: '0 4px 10px rgba(0,0,0,0.25)'
          }}>
            <h2 style={{ marginBottom: '1rem' }}>Crear Nuevo Producto</h2>
            <ProductForm mode="crear" onCancel={() => setOpenCreateModal(false)} onSubmit={handleCreateSubmit} />
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default ProductManager;
