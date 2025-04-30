
CREATE TABLE crce7_t_proovedores (
    id INT PRIMARY KEY IDENTITY(1,1),
    nombre_prov VARCHAR(100),
    correo VARCHAR(100),
    telefono VARCHAR(50),
    activo BIT DEFAULT 1,
    created_at DATETIME DEFAULT GETDATE()
);
