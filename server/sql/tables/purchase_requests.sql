
CREATE TABLE crce7_nuevatabla2 (
    id INT PRIMARY KEY IDENTITY(1,1),
    requested_by INT,
    product_id INT,
    quantity DECIMAL(18,2),
    linked_to_type VARCHAR(50),
    linked_to_id INT,
    supplier_id INT,
    notes TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    received_date DATETIME NULL,
    affects_inventory BIT DEFAULT 0,
    created_at DATETIME DEFAULT GETDATE()
);
