
CREATE TABLE crce7_t_compra (
    id INT PRIMARY KEY IDENTITY(1,1),
    fecha_compra DATETIME DEFAULT GETDATE(),
    proveedor_id INT,
    total DECIMAL(18,2),
    estado VARCHAR(50),
    FOREIGN KEY (proveedor_id) REFERENCES crce7_t_proovedores(id)
);
