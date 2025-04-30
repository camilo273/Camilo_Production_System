import React, { useState, useEffect } from 'react';
import FormDropdown from './FormDropdown';
import ProductSearch from './ProductSearch';

function ProductManager() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lineasComerciales, setLineasComerciales] = useState([]);
  const [lineasProductivas, setLineasProductivas] = useState([]);
  const [lineaProductivaId, setLineaProductivaId] = useState('');
  const [lineaComercial1Id, setLineaComercial1Id] = useState('');
  const [lineaComercial2Id, setLineaComercial2Id] = useState('');

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch('/api/products').then(res => res.json()),
      fetch('/api/lineascomerciales').then(res => res.json()),
      fetch('/api/lineasproductivas').then(res => res.json())
    ])
      .then(([productos, comerciales, productivas]) => {
        console.log('📦 Productos:', productos);
        console.log('🛍️ Líneas Comerciales:', comerciales);
        console.log('🏭 Líneas Productivas:', productivas);
        setProducts(productos || []);
        setFilteredProducts(productos || []);
        setLineasComerciales((comerciales || []).filter(item => item.nombre));
        setLineasProductivas((productivas || []).filter(item =>
          item.nombre && item.nombre.trim().toLowerCase() !== 'vacío'
        ));
      })
      .catch((err) => {
        console.error('❌ Error cargando datos:', err);
        setProducts([]);
        setFilteredProducts([]);
        setLineasComerciales([]);
        setLineasProductivas([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSearch = (value) => {
    setSearch(value);
    const lower = value.toLowerCase();
    const filtered = products.filter((p) =>
      (p.name || '').toLowerCase().includes(lower) ||
      (p.code || '').toLowerCase().includes(lower) ||
      (p.category || '').toLowerCase().includes(lower)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Camilo Production System</h1>
      <h2>Product Manager</h2>

      {/* Botones de acción */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
        <button
          onClick={() => setOpenCreateModal(true)}
          style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem' }}
        >
          <span role="img" aria-label="crear">➕</span> Crear Producto
        </button>
        <button
          onClick={() => alert('Abrir modal para crear referencia')}
          disabled={!selectedProductId}
          title={!selectedProductId ? 'Selecciona un producto para agregar una referencia' : ''}
          style={{
            padding: '0.5rem 1rem', backgroundColor: selectedProductId ? '#28a745' : '#ccc',
            color: 'white', border: 'none', borderRadius: '8px', cursor: selectedProductId ? 'pointer' : 'not-allowed',
            fontSize: '1rem', marginLeft: '1rem'
          }}
        >
          <span role="img" aria-label="referencia">➕</span> Agregar Referencia
        </button>
      </div>

      {/* Buscador */}
      <ProductSearch value={search} onSearch={handleSearch} />

      {/* Spinner de carga */}
      {loading ? (
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
      ) : (
        <>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem'
          }}>
            {filteredProducts.map(product => (
              <div
                key={product.id}
                onClick={() => setSelectedProductId(product.id)}
                style={{
                  border: selectedProductId === product.id ? '2px solid #007bff' : '1px solid #ddd',
                  borderRadius: '12px', padding: '1rem', boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  cursor: 'pointer', backgroundColor: selectedProductId === product.id ? '#f0f8ff' : 'white'
                }}
              >
                <h3 style={{ margin: '0.5rem 0 0.25rem' }}>{product.name}</h3>
                <p style={{ margin: '0.25rem 0', color: '#888' }}>Código: <strong>{product.code}</strong></p>
                <div style={{
                  backgroundColor: product.lineaproductiva_color || '#ccc', color: '#fff',
                  padding: '4px 8px', borderRadius: '12px', display: 'inline-block',
                  fontSize: '0.75rem', marginBottom: '8px'
                }}>{product.lineaproductiva || 'Sin Línea'}</div>
                <p style={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '0.5rem' }}>
                  Precio: ${product.price_per_unit?.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div style={{ textAlign: 'center', color: '#888', fontSize: '1.1rem' }}>
              No se encontraron productos para mostrar.
            </div>
          )}
        </>
      )}

      {/* Modal de creación */}
      {openCreateModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex',
          alignItems: 'center', justifyContent: 'center', zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white', padding: '2rem', borderRadius: '12px',
            maxWidth: '500px', width: '90%', boxShadow: '0 4px 10px rgba(0,0,0,0.25)'
          }}>
            <h2 style={{ marginBottom: '1rem' }}>Crear Nuevo Producto</h2>
            <form>
              <div style={{ marginBottom: '1rem' }}>
                <label>Nombre:</label>
                <input type="text" style={{ width: '100%', padding: '0.5rem' }} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label>Código:</label>
                <input type="text" style={{ width: '100%', padding: '0.5rem' }} />
              </div>

              <FormDropdown
                label="Línea Productiva"
                value={lineaProductivaId}
                onChange={(e) => setLineaProductivaId(e.target.value)}
                options={lineasProductivas}
                placeholder="Selecciona una línea productiva"
                required
              />

              <FormDropdown
                label="Línea Comercial 1"
                value={lineaComercial1Id}
                onChange={(e) => setLineaComercial1Id(e.target.value)}
                options={lineasComerciales}
                placeholder="Selecciona una línea comercial"
              />

              <FormDropdown
                label="Línea Comercial 2"
                value={lineaComercial2Id}
                onChange={(e) => setLineaComercial2Id(e.target.value)}
                options={lineasComerciales}
                placeholder="Selecciona una línea comercial"
              />

              <div style={{ marginBottom: '1rem' }}>
                <label>
                  <input type="checkbox" style={{ marginRight: '0.5rem' }} /> ¿Pág.web?
                </label>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label>Precio por unidad:</label>
                <input type="number" step="0.01" inputMode="decimal" pattern="[0-9]*[.,]?[0-9]*" style={{ width: '100%', padding: '0.5rem' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                <button
                  type="button"
                  onClick={() => setOpenCreateModal(false)}
                  style={{ padding: '0.5rem 1rem', backgroundColor: '#999', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  style={{ padding: '0.5rem 1rem', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
                >
                  Guardar
                </button>
              </div>
            </form>
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