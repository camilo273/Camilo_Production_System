import React, { useState } from 'react';

const SelectTestComponent = () => {
  const [lineaProductiva, setLineaProductiva] = useState('');
  const [lineaComercial, setLineaComercial] = useState('');

  const lineasProductivas = [
    { id: 1, nombre: 'Electrónica' },
    { id: 2, nombre: 'MetalMecánica' },
    { id: 3, nombre: 'Pintura' },
  ];

  const lineasComerciales = [
    { id: 1, nombre: 'Semáforos' },
    { id: 2, nombre: 'Señales Verticales' },
    { id: 3, nombre: 'Dispositivos de tránsito' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-lg font-bold mb-4">Prueba Dropdowns</h2>

      <label className="block mb-2 font-medium">Línea Productiva</label>
      <select
        className="w-full border rounded p-2 mb-4"
        value={lineaProductiva}
        onChange={(e) => setLineaProductiva(e.target.value)}
      >
        <option value="">Selecciona una línea productiva</option>
        {lineasProductivas.map((lp) => (
          <option key={lp.id} value={lp.id}>
            {lp.nombre}
          </option>
        ))}
      </select>

      <label className="block mb-2 font-medium">Línea Comercial</label>
      <select
        className="w-full border rounded p-2"
        value={lineaComercial}
        onChange={(e) => setLineaComercial(e.target.value)}
      >
        <option value="">Selecciona una línea comercial</option>
        {lineasComerciales.map((lc) => (
          <option key={lc.id} value={lc.id}>
            {lc.nombre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectTestComponent;