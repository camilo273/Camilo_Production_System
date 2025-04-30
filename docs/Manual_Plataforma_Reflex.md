# Manual de la Plataforma Reflex

Este manual documenta el funcionamiento, la estructura técnica y los procedimientos clave de desarrollo de la Plataforma Reflex.

---

## 🔧 Tecnologías Utilizadas

- **Frontend:** React.js (con Vite, TailwindCSS y Lucide Icons)
- **Backend:** Node.js + Express
- **Base de Datos:** SQL Server (Azure)
- **Almacenamiento de Imágenes:** Azure Blob Storage
- **Infraestructura:** Microsoft Azure, GitHub
- **Automatización de builds:** `npm run dev`, `npm run deploy`, `npm run clean`, etc.

---

## 📁 Estructura del Proyecto

```bash
Camilo_Production_System/
├── client/                 # Frontend React
├── server/                 # Backend Node.js + Express
├── docs/                   # Documentación técnica
│   └── Manual_Plataforma_Reflex.md
├── package.json            # Scripts globales
└── README.md
# Manual Plataforma Reflex

Este documento reúne toda la información técnica, funcional y estructural del sistema de gestión empresarial "Plataforma Reflex".

---

## 1. Introducción y Visión del Proyecto

La Plataforma Reflex nace como una evolución de los sistemas desarrollados originalmente en Power Apps, trasladando todos los datos y lógica de negocio hacia un entorno moderno con React, Node.js y SQL. Su objetivo es modernizar completamente la gestión de producción, productos, inventario, compras, ventas y despachos de la empresa.

---

## 2. Estructura General de la Plataforma

### 2.1 Módulos Funcionales

- Productos y Referencias
- Cotizaciones y Ventas
- Inventario y Stocks mínimos
- Producción e Insumos
- Compras y Recepción de Productos
- Despachos
- Clientes, Contactos y Direcciones
- Línea Productiva y Línea Comercial

### 2.2 Procesos que Cubre

Cada módulo está asociado a flujos de trabajo específicos con etapas claras: creación, validación, procesamiento, recepción, y análisis. La plataforma también contempla automatización y trazabilidad.

---

## 3. Base de Datos

### 3.1 Diseño Lógico SQL

La base de datos está normalizada en 3NF y replica todas las tablas importantes migradas desde Dataverse.

### 3.2 Diccionario de Tablas (Resumen)

- `crce7_t_productos` – Productos y referencias
- `crce7_t_lineaproductiva` – Categorías internas (lookup)
- `crce7_t_lineacomercial` – Líneas de negocio externas (lookup)
- `crce7_t_compr_prod` – Productos en órdenes de compra
- `crce7_t_ventas` – Órdenes de venta
- `crce7_t_cliente_cont` – Contactos de clientes
- `crce7_t_clientes` – Clientes
- `crce7_t_clientes_direccion` – Direcciones de entrega

### 3.3 Relaciones Clave

Se emplean claves primarias UUID (`UniqueIdentifier`) y claves foráneas con campos de tipo `Lookup`. Las relaciones se mantienen automáticamente por migración o se crean explícitamente.

---

## 4. Lógica de Negocio por Módulo

### 4.1 Gestión de Productos

- Se almacenan imágenes en Blob Storage
- Un producto puede ser “referencia” (campo `crce7_referencia = 1`) o producto final
- Relación con Línea Productiva y Línea Comercial
- Campos clave: nombre, código, inventariar, stock mínimo, insumo de…

### 4.2 Inventario

- Se actualiza con compras, producción y despachos
- Stock mínimo y visibilidad en frontend

### 4.3 Producción

- Define fórmulas de insumos por línea productiva
- Permite asignar insumos y verificar existencias antes de iniciar producción

### 4.4 Compras

- Flujo: solicitud → orden de compra → recepción
- Relación entre `crce7_nuevatabla2` y `crce7_t_compr_prod`

### 4.5 Ventas

- Flujo: cotización → validación → venta → despacho
- Usa contacto y dirección de cliente

### 4.6 Despachos

- Tablas: `crce7_t_od` (orden de despacho) y sus productos
- Se valida stock antes de confirmar

### 4.7 Costos

- Se define en productos y se calcula por referencia
- Planeado para integración con producción

---

## 5. Flujo de Datos

### 5.1 Frontend ↔ Backend

- Axios para comunicación
- Scroll infinito implementado
- Dropdowns cargan datos desde caché

### 5.2 Dataverse → SQL

- Azure Data Factory
- Pipeline dinámico con ForEach y Service Principal
- Mantenimiento de relaciones y claves

### 5.3 SQL → Power BI

- Dashboards conectados en tiempo real
- Visualización de desempeño y trazabilidad

---

## 6. Automatizaciones

### 6.1 Azure Data Factory

- Migración diaria o por demanda desde Dataverse

### 6.2 Blob Storage e Imágenes

- Automatización con Node.js
- Subida por código de producto y actualización de URL pública

---

## 7. Desarrollo

### 7.1 Estructura de Carpetas

```
Camilo_Production_System/
├── client/                 # Frontend React (Vite)
├── server/                 # Backend Node.js + Express
├── docs/                   # Documentación técnica
├── package.json            # Scripts globales
└── README.md
```

### 7.2 Scripts Importantes

- `npm run dev`: corre frontend y backend
- `npm run clean`: limpia build
- `npm run deploy`: compila y mueve frontend a `server/public`

### 7.3 Rutas API

- `/api/products/`: CRUD de productos
- `/api/products/paginated`: scroll infinito
- `/api/lineas-productivas`, `/api/lineas-comerciales`: carga con caché

---

## 8. Buenas Prácticas y Futuras Extensiones

- Código reutilizable y desacoplado
- Documentación en `/docs`
- Automatización de validaciones y campos calculados
- Futuras versiones incluirán autenticación, control de versiones, y notificaciones.