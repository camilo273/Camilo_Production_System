
CREATE TABLE crce7_t_productos (
    id INT PRIMARY KEY IDENTITY(1,1),
    nombre_prod VARCHAR(100),
    codigo_prod VARCHAR(50),
    categoria_prod VARCHAR(100),
    imagen_url VARCHAR(255),
    inventario_real DECIMAL(18,2),
    disponible_produccion DECIMAL(18,2),
    disponible_venta DECIMAL(18,2),
    precio_unitario DECIMAL(18,2),
    created_at DATETIME DEFAULT GETDATE()
);
