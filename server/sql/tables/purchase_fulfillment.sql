
CREATE TABLE crce7_t_compr_prod (
    id INT PRIMARY KEY IDENTITY(1,1),
    id_compra INT,
    id_producto INT,
    cantidad DECIMAL(18,2),
    precio_unitario DECIMAL(18,2),
    Recibido DECIMAL(18,2),
    FOREIGN KEY (id_compra) REFERENCES crce7_t_compra(id),
    FOREIGN KEY (id_producto) REFERENCES crce7_t_productos(id)
);
