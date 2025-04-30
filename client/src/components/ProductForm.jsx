import React, { useState, useEffect } from 'react';
import DropdownLinea from './DropdownLinea';
import Button from './Button';

function ProductForm({ mode = 'crear', initialData = {}, onCancel, onSubmit }) {
  const [name, setName] = useState(initialData.name || '');
  const [code, setCode] = useState(initialData.code || '');
  const [lineaProductivaId, setLineaProductivaId] = useState(initialData.lineaProductivaId || '');
  const [lineaComercial1Id, setLineaComercial1Id] = useState(initialData.lineaComercial1Id || '');
  const [lineaComercial2Id, setLineaComercial2Id] = useState(initialData.lineaComercial2Id || '');

  const [lineasProductivas, setLineasProductivas] = useState([]);
  const [lineasComerciales, setLineasComerciales] = useState([]);

  useEffect(() => {
    fetch('/api/lineasproductivas')
      .then(res => res.json())
      .then(data => setLineasProductivas(data))
      .catch(err => console.error('Error cargando líneas productivas', err));

    fetch('/api/lineascomerciales')
      .then(res => res.json())
      .then(data => setLineasComerciales(data))
      .catch(err => console.error('Error cargando líneas comerciales', err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (!name.trim() || !code.trim()) {
      alert('Nombre y código son obligatorios');
      return;
    }

    // Validación específica para referencia
    if (mode === 'referencia' && !code.includes('-')) {
      alert('El código de la referencia debe incluir un guion (ej: 123-1)');
      return;
    }

    const productData = {
      name,
      code,
      lineaProductivaId,
      lineaComercial1Id,
      lineaComercial2Id
    };

    onSubmit(productData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '1rem' }}>
        <label>Nombre:</label>
        <input value={name} onChange={e => setName(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Código:</label>
        <input value={code} onChange={e => setCode(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
      </div>

      <DropdownLinea
        label="Línea Productiva"
        value={lineaProductivaId}
        onChange={(e) => setLineaProductivaId(e.target.value)}
        options={lineasProductivas}
        placeholder="Selecciona una línea productiva"
        required
        displayField="nombre"
      />

      <DropdownLinea
        label="Línea Comercial 1"
        value={lineaComercial1Id}
        onChange={(e) => setLineaComercial1Id(e.target.value)}
        options={lineasComerciales}
        placeholder="Selecciona una línea comercial"
        displayField="nombre"
      />

      <DropdownLinea
        label="Línea Comercial 2"
        value={lineaComercial2Id}
        onChange={(e) => setLineaComercial2Id(e.target.value)}
        options={lineasComerciales}
        placeholder="Selecciona una línea comercial"
        displayField="nombre"
      />

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '2rem' }}>
        <Button onClick={onCancel} type="button">Cancelar</Button>
        <Button type="submit">{mode === 'editar' ? 'Actualizar' : 'Guardar'}</Button>
      </div>
    </form>
  );
}

export default ProductForm;
