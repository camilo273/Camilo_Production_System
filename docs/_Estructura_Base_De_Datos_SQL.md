# 📘 Estructura Base de Datos SQL – Plataforma Reflex

## 🧩 Tabla: `T_Linea_comercial`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `Value` | int |  | 10 | 0 | NO |
| `Label` | nvarchar | 255 |  |  | NO |


## 🧩 Tabla: `T_Tipo`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `Value` | int |  | 10 | 0 | NO |
| `Label` | nvarchar | 255 |  |  | NO |


## 🧩 Tabla: `crce7_departmentinformation`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_continent` | nvarchar | 255 |  |  | YES |
| `crce7_continentnumber` | nvarchar | 255 |  |  | YES |
| `crce7_country1` | nvarchar | 255 |  |  | YES |
| `crce7_country2` | nvarchar | 255 |  |  | YES |
| `crce7_countrynumber` | nvarchar | 255 |  |  | YES |
| `crce7_departmentinformationid` | nvarchar | 255 |  |  | YES |
| `crce7_departmentname` | nvarchar | 255 |  |  | YES |
| `crce7_fullname` | nvarchar | 255 |  |  | YES |
| `crce7_id` | nvarchar | 255 |  |  | YES |
| `crce7_municipalitycode` | nvarchar | 255 |  |  | YES |
| `crce7_municipalityname` | nvarchar | 255 |  |  | YES |
| `crce7_name` | nvarchar | 255 |  |  | YES |
| `crce7_province` | nvarchar | 255 |  |  | YES |
| `createdby` | nvarchar | 255 |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | nvarchar | 255 |  |  | YES |
| `createdonbehalfby` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `importsequencenumber` | nvarchar | 255 |  |  | YES |
| `modifiedby` | nvarchar | 255 |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfby` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | nvarchar | 255 |  |  | YES |
| `ownerid` | nvarchar | 255 |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | nvarchar | 255 |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | nvarchar | 255 |  |  | YES |
| `owninguser` | nvarchar | 255 |  |  | YES |
| `statecode` | nvarchar | 255 |  |  | YES |
| `statuscode` | nvarchar | 255 |  |  | YES |
| `timezoneruleversionnumber` | nvarchar | 255 |  |  | YES |
| `utcconversiontimezonecode` | nvarchar | 255 |  |  | YES |
| `versionnumber` | nvarchar | 255 |  |  | YES |


## 🧩 Tabla: `crce7_nuevatabla2`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_compra` | nvarchar | 255 |  |  | YES |
| `crce7_compraname` | nvarchar | 255 |  |  | YES |
| `crce7_fechadecompra` | nvarchar | 255 |  |  | YES |
| `crce7_fecharequerida` | nvarchar | 255 |  |  | YES |
| `crce7_no` | nvarchar | 255 |  |  | YES |
| `crce7_nuevatabla2id` | nvarchar | 255 |  |  | YES |
| `crce7_op` | nvarchar | 255 |  |  | YES |
| `crce7_opname` | nvarchar | 255 |  |  | YES |
| `crce7_orden` | nvarchar | 255 |  |  | YES |
| `createdby` | nvarchar | 255 |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | nvarchar | 255 |  |  | YES |
| `createdonbehalfby` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `importsequencenumber` | nvarchar | 255 |  |  | YES |
| `modifiedby` | nvarchar | 255 |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfby` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | nvarchar | 255 |  |  | YES |
| `ownerid` | nvarchar | 255 |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | nvarchar | 255 |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | nvarchar | 255 |  |  | YES |
| `owninguser` | nvarchar | 255 |  |  | YES |
| `statecode` | nvarchar | 255 |  |  | YES |
| `statuscode` | nvarchar | 255 |  |  | YES |
| `timezoneruleversionnumber` | nvarchar | 255 |  |  | YES |
| `utcconversiontimezonecode` | nvarchar | 255 |  |  | YES |
| `versionnumber` | nvarchar | 255 |  |  | YES |


## 🧩 Tabla: `crce7_nuevatabla3`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_id_lc` | nvarchar | 255 |  |  | YES |
| `crce7_lineacomercial` | nvarchar | 255 |  |  | YES |
| `crce7_nuevatabla3id` | nvarchar | 255 |  |  | YES |
| `crce7_t_productos` | nvarchar | 255 |  |  | YES |
| `crce7_t_productosname` | nvarchar | 255 |  |  | YES |
| `createdby` | nvarchar | 255 |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | nvarchar | 255 |  |  | YES |
| `createdonbehalfby` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `importsequencenumber` | nvarchar | 255 |  |  | YES |
| `modifiedby` | nvarchar | 255 |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfby` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | nvarchar | 255 |  |  | YES |
| `ownerid` | nvarchar | 255 |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | nvarchar | 255 |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | nvarchar | 255 |  |  | YES |
| `owninguser` | nvarchar | 255 |  |  | YES |
| `statecode` | nvarchar | 255 |  |  | YES |
| `statuscode` | nvarchar | 255 |  |  | YES |
| `timezoneruleversionnumber` | nvarchar | 255 |  |  | YES |
| `utcconversiontimezonecode` | nvarchar | 255 |  |  | YES |
| `versionnumber` | nvarchar | 255 |  |  | YES |


## 🧩 Tabla: `crce7_od_prod`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_cant` | decimal |  | 38 | 18 | YES |
| `crce7_cantidad` | nvarchar | 255 |  |  | YES |
| `crce7_cod` | nvarchar | 255 |  |  | YES |
| `crce7_codproduni` | nvarchar | 255 |  |  | YES |
| `crce7_estado__` | nvarchar | 255 |  |  | YES |
| `crce7_fechadespacho` | nvarchar | 255 |  |  | YES |
| `crce7_fechaempaque` | nvarchar | 255 |  |  | YES |
| `crce7_fechafinemp` | nvarchar | 255 |  |  | YES |
| `crce7_fechainiemp` | nvarchar | 255 |  |  | YES |
| `crce7_id_od_prod` | nvarchar | 255 |  |  | YES |
| `crce7_inicio` | nvarchar | 255 |  |  | YES |
| `crce7_inventario` | nvarchar | 255 |  |  | YES |
| `crce7_item` | nvarchar | 255 |  |  | YES |
| `crce7_lineaproductiva` | nvarchar | 255 |  |  | YES |
| `crce7_nombreproducto` | nvarchar | 255 |  |  | YES |
| `crce7_noorden` | nvarchar | 255 |  |  | YES |
| `crce7_od` | nvarchar | 255 |  |  | YES |
| `crce7_od_prodid` | nvarchar | 255 |  |  | YES |
| `crce7_odname` | nvarchar | 255 |  |  | YES |
| `crce7_paquetes` | nvarchar | 255 |  |  | YES |
| `crce7_producto` | nvarchar | 255 |  |  | YES |
| `crce7_productoname` | nvarchar | 255 |  |  | YES |
| `createdby` | nvarchar | 255 |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | nvarchar | 255 |  |  | YES |
| `createdonbehalfby` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `importsequencenumber` | nvarchar | 255 |  |  | YES |
| `modifiedby` | nvarchar | 255 |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfby` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | nvarchar | 255 |  |  | YES |
| `ownerid` | nvarchar | 255 |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | nvarchar | 255 |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | nvarchar | 255 |  |  | YES |
| `owninguser` | nvarchar | 255 |  |  | YES |
| `statecode` | nvarchar | 255 |  |  | YES |
| `statuscode` | nvarchar | 255 |  |  | YES |
| `timezoneruleversionnumber` | nvarchar | 255 |  |  | YES |
| `utcconversiontimezonecode` | nvarchar | 255 |  |  | YES |
| `versionnumber` | nvarchar | 255 |  |  | YES |


## 🧩 Tabla: `crce7_pestanas`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_f_timestamp` | nvarchar | 255 |  |  | YES |
| `crce7_f_url` | nvarchar | 255 |  |  | YES |
| `crce7_fid` | nvarchar | 255 |  |  | YES |
| `crce7_icono` | nvarchar | 255 |  |  | YES |
| `crce7_imagen_timestamp` | nvarchar | 255 |  |  | YES |
| `crce7_imagen_url` | nvarchar | 255 |  |  | YES |
| `crce7_imagenid` | nvarchar | 255 |  |  | YES |
| `crce7_navegar` | nvarchar | 255 |  |  | YES |
| `crce7_no` | nvarchar | 255 |  |  | YES |
| `crce7_nombre` | nvarchar | 255 |  |  | YES |
| `crce7_pestanasid` | nvarchar | 255 |  |  | YES |
| `createdby` | nvarchar | 255 |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | nvarchar | 255 |  |  | YES |
| `createdonbehalfby` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `importsequencenumber` | nvarchar | 255 |  |  | YES |
| `modifiedby` | nvarchar | 255 |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfby` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | nvarchar | 255 |  |  | YES |
| `ownerid` | nvarchar | 255 |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | nvarchar | 255 |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | nvarchar | 255 |  |  | YES |
| `owninguser` | nvarchar | 255 |  |  | YES |
| `statecode` | nvarchar | 255 |  |  | YES |
| `statuscode` | nvarchar | 255 |  |  | YES |
| `timezoneruleversionnumber` | nvarchar | 255 |  |  | YES |
| `utcconversiontimezonecode` | nvarchar | 255 |  |  | YES |
| `versionnumber` | nvarchar | 255 |  |  | YES |


## 🧩 Tabla: `crce7_t_ciudades`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_codigomunicipio` | nvarchar | 255 |  |  | YES |
| `crce7_column10` | nvarchar | 255 |  |  | YES |
| `crce7_column9` | nvarchar | 255 |  |  | YES |
| `crce7_completo_nombre` | nvarchar | 255 |  |  | YES |
| `crce7_id` | nvarchar | 255 |  |  | YES |
| `crce7_nombre` | nvarchar | 255 |  |  | YES |
| `crce7_nombrecompleto` | nvarchar | 255 |  |  | YES |
| `crce7_nombredepto` | nvarchar | 255 |  |  | YES |
| `crce7_nombrempio` | nvarchar | 255 |  |  | YES |
| `crce7_pais` | nvarchar | 255 |  |  | YES |
| `crce7_provincia` | nvarchar | 255 |  |  | YES |
| `crce7_t_ciudadesid` | nvarchar | 255 |  |  | YES |
| `createdby` | nvarchar | 255 |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | nvarchar | 255 |  |  | YES |
| `createdonbehalfby` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `importsequencenumber` | nvarchar | 255 |  |  | YES |
| `modifiedby` | nvarchar | 255 |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfby` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | nvarchar | 255 |  |  | YES |
| `ownerid` | nvarchar | 255 |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | nvarchar | 255 |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | nvarchar | 255 |  |  | YES |
| `owninguser` | nvarchar | 255 |  |  | YES |
| `statecode` | nvarchar | 255 |  |  | YES |
| `statuscode` | nvarchar | 255 |  |  | YES |
| `timezoneruleversionnumber` | nvarchar | 255 |  |  | YES |
| `utcconversiontimezonecode` | nvarchar | 255 |  |  | YES |
| `versionnumber` | nvarchar | 255 |  |  | YES |


## 🧩 Tabla: `crce7_t_cliente_cont`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_celular` | nvarchar | 255 |  |  | YES |
| `crce7_cliente` | nvarchar | 255 |  |  | YES |
| `crce7_correo` | nvarchar | 255 |  |  | YES |
| `crce7_nombre` | nvarchar | 255 |  |  | YES |
| `crce7_nombrecliente` | nvarchar | 255 |  |  | YES |
| `crce7_t_cliente_contid` | uniqueidentifier |  |  |  | NO |
| `createdby` | uniqueidentifier |  |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | datetime2 |  |  |  | YES |
| `createdonbehalfby` | uniqueidentifier |  |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `importsequencenumber` | int |  | 10 | 0 | YES |
| `modifiedby` | uniqueidentifier |  |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | datetime2 |  |  |  | YES |
| `modifiedonbehalfby` | uniqueidentifier |  |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | datetime2 |  |  |  | YES |
| `ownerid` | uniqueidentifier |  |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | uniqueidentifier |  |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | uniqueidentifier |  |  |  | YES |
| `owninguser` | uniqueidentifier |  |  |  | YES |
| `statecode` | int |  | 10 | 0 | YES |
| `statuscode` | int |  | 10 | 0 | YES |
| `timezoneruleversionnumber` | int |  | 10 | 0 | YES |
| `utcconversiontimezonecode` | int |  | 10 | 0 | YES |
| `versionnumber` | bigint |  | 19 | 0 | YES |


## 🧩 Tabla: `crce7_t_clientecontacto`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_cliente` | uniqueidentifier |  |  |  | YES |
| `crce7_clientename` | nvarchar | 255 |  |  | YES |
| `crce7_contacto` | uniqueidentifier |  |  |  | YES |
| `crce7_contactoname` | nvarchar | 255 |  |  | YES |
| `crce7_id` | nvarchar | 255 |  |  | YES |
| `crce7_t_clientecontactoid` | uniqueidentifier |  |  |  | YES |
| `createdby` | uniqueidentifier |  |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | datetime2 |  |  |  | YES |
| `createdonbehalfby` | uniqueidentifier |  |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `importsequencenumber` | int |  | 10 | 0 | YES |
| `modifiedby` | uniqueidentifier |  |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | datetime2 |  |  |  | YES |
| `modifiedonbehalfby` | uniqueidentifier |  |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | datetime2 |  |  |  | YES |
| `ownerid` | uniqueidentifier |  |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | uniqueidentifier |  |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | uniqueidentifier |  |  |  | YES |
| `owninguser` | uniqueidentifier |  |  |  | YES |
| `statecode` | int |  | 10 | 0 | YES |
| `statuscode` | int |  | 10 | 0 | YES |
| `timezoneruleversionnumber` | int |  | 10 | 0 | YES |
| `utcconversiontimezonecode` | int |  | 10 | 0 | YES |
| `versionnumber` | bigint |  | 19 | 0 | YES |


## 🧩 Tabla: `crce7_t_clientes`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_contacto` | uniqueidentifier |  |  |  | YES |
| `crce7_contactoname` | nvarchar | 255 |  |  | YES |
| `crce7_id_cliente` | nvarchar | 255 |  |  | YES |
| `crce7_nitcc` | nvarchar | 255 |  |  | YES |
| `crce7_nombre` | nvarchar | 255 |  |  | YES |
| `crce7_pers` | nvarchar | 255 |  |  | YES |
| `crce7_persona` | int |  | 10 | 0 | YES |
| `createdby` | uniqueidentifier |  |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | datetime2 |  |  |  | YES |
| `createdonbehalfby` | uniqueidentifier |  |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `importsequencenumber` | int |  | 10 | 0 | YES |
| `modifiedby` | uniqueidentifier |  |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | datetime2 |  |  |  | YES |
| `modifiedonbehalfby` | uniqueidentifier |  |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | datetime2 |  |  |  | YES |
| `ownerid` | uniqueidentifier |  |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | uniqueidentifier |  |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | uniqueidentifier |  |  |  | YES |
| `owninguser` | uniqueidentifier |  |  |  | YES |
| `statecode` | int |  | 10 | 0 | YES |
| `statuscode` | int |  | 10 | 0 | YES |
| `timezoneruleversionnumber` | int |  | 10 | 0 | YES |
| `utcconversiontimezonecode` | int |  | 10 | 0 | YES |
| `versionnumber` | bigint |  | 19 | 0 | YES |
| `crce7_t_clientesid` | uniqueidentifier |  |  |  | NO |


## 🧩 Tabla: `crce7_t_clientes_direccion`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_barrio` | nvarchar | 255 |  |  | YES |
| `crce7_ciudad` | uniqueidentifier |  |  |  | YES |
| `crce7_ciudadname` | nvarchar | 255 |  |  | YES |
| `crce7_cliente` | uniqueidentifier |  |  |  | YES |
| `crce7_clientename` | nvarchar | 255 |  |  | YES |
| `crce7_direccion` | nvarchar | 255 |  |  | YES |
| `crce7_direccion_` | nvarchar | 255 |  |  | YES |
| `crce7_t_clientes_direccionid` | uniqueidentifier |  |  |  | NO |
| `createdby` | uniqueidentifier |  |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | datetime2 |  |  |  | YES |
| `createdonbehalfby` | uniqueidentifier |  |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `importsequencenumber` | int |  | 10 | 0 | YES |
| `modifiedby` | uniqueidentifier |  |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | datetime2 |  |  |  | YES |
| `modifiedonbehalfby` | uniqueidentifier |  |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | datetime2 |  |  |  | YES |
| `ownerid` | uniqueidentifier |  |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | uniqueidentifier |  |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | uniqueidentifier |  |  |  | YES |
| `owninguser` | uniqueidentifier |  |  |  | YES |
| `statecode` | int |  | 10 | 0 | YES |
| `statuscode` | int |  | 10 | 0 | YES |
| `timezoneruleversionnumber` | int |  | 10 | 0 | YES |
| `utcconversiontimezonecode` | int |  | 10 | 0 | YES |
| `versionnumber` | bigint |  | 19 | 0 | YES |


## 🧩 Tabla: `crce7_t_comp_entregas`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_cantidad` | int |  | 10 | 0 | YES |
| `crce7_fechaentrega` | datetime2 |  |  |  | YES |
| `crce7_id_comp_entr_prod` | nvarchar | 255 |  |  | YES |
| `crce7_inv` | nvarchar | 255 |  |  | YES |
| `crce7_t_comp_entregasid` | uniqueidentifier |  |  |  | YES |
| `crce7_t_compr_prod` | uniqueidentifier |  |  |  | YES |
| `crce7_t_compr_prodname` | nvarchar | 255 |  |  | YES |
| `createdby` | uniqueidentifier |  |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | datetime2 |  |  |  | YES |
| `createdonbehalfby` | uniqueidentifier |  |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `importsequencenumber` | int |  | 10 | 0 | YES |
| `modifiedby` | uniqueidentifier |  |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | datetime2 |  |  |  | YES |
| `modifiedonbehalfby` | uniqueidentifier |  |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | datetime2 |  |  |  | YES |
| `ownerid` | uniqueidentifier |  |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | uniqueidentifier |  |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | uniqueidentifier |  |  |  | YES |
| `owninguser` | uniqueidentifier |  |  |  | YES |
| `statecode` | int |  | 10 | 0 | YES |
| `statuscode` | int |  | 10 | 0 | YES |
| `timezoneruleversionnumber` | int |  | 10 | 0 | YES |
| `utcconversiontimezonecode` | int |  | 10 | 0 | YES |
| `versionnumber` | bigint |  | 19 | 0 | YES |


## 🧩 Tabla: `crce7_t_compr_prod`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_cantidad` | decimal |  | 38 | 18 | YES |
| `crce7_compra` | uniqueidentifier |  |  |  | YES |
| `crce7_compraname` | nvarchar | 255 |  |  | YES |
| `crce7_ent` | decimal |  | 38 | 18 | YES |
| `crce7_estado` | int |  | 10 | 0 | YES |
| `crce7_fechallegada` | datetime2 |  |  |  | YES |
| `crce7_id_compr_prod` | nvarchar | 255 |  |  | YES |
| `crce7_inv` | nvarchar | 255 |  |  | YES |
| `crce7_iva` | decimal |  | 38 | 18 | YES |
| `crce7_prodreq` | uniqueidentifier |  |  |  | YES |
| `crce7_prodreqname` | nvarchar | 255 |  |  | YES |
| `crce7_producto` | uniqueidentifier |  |  |  | YES |
| `crce7_productoname` | nvarchar | 255 |  |  | YES |
| `crce7_recibido` | decimal |  | 38 | 18 | YES |
| `crce7_referencia` | nvarchar | 255 |  |  | YES |
| `crce7_saldo` | decimal |  | 38 | 18 | YES |
| `crce7_t_compr_prodid` | uniqueidentifier |  |  |  | YES |
| `crce7_uso` | nvarchar | 255 |  |  | YES |
| `crce7_valortotal` | decimal |  | 38 | 18 | YES |
| `crce7_valortotal_base` | decimal |  | 38 | 18 | YES |
| `crce7_valorunitario` | decimal |  | 38 | 18 | YES |
| `crce7_valorunitario_base` | decimal |  | 38 | 18 | YES |
| `createdby` | uniqueidentifier |  |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | datetime2 |  |  |  | YES |
| `createdonbehalfby` | uniqueidentifier |  |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `exchangerate` | decimal |  | 38 | 18 | YES |
| `importsequencenumber` | int |  | 10 | 0 | YES |
| `modifiedby` | uniqueidentifier |  |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | datetime2 |  |  |  | YES |
| `modifiedonbehalfby` | uniqueidentifier |  |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | datetime2 |  |  |  | YES |
| `ownerid` | uniqueidentifier |  |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | uniqueidentifier |  |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | uniqueidentifier |  |  |  | YES |
| `owninguser` | uniqueidentifier |  |  |  | YES |
| `statecode` | int |  | 10 | 0 | YES |
| `statuscode` | int |  | 10 | 0 | YES |
| `timezoneruleversionnumber` | int |  | 10 | 0 | YES |
| `transactioncurrencyid` | uniqueidentifier |  |  |  | YES |
| `transactioncurrencyidname` | nvarchar | 255 |  |  | YES |
| `utcconversiontimezonecode` | int |  | 10 | 0 | YES |
| `versionnumber` | bigint |  | 19 | 0 | YES |


## 🧩 Tabla: `crce7_t_compra`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_despacho` | decimal |  | 38 | 18 | YES |
| `crce7_despacho_base` | decimal |  | 38 | 18 | YES |
| `crce7_dirdespacho` | int |  | 10 | 0 | YES |
| `crce7_estado_` | int |  | 10 | 0 | YES |
| `crce7_fechacompra` | datetime2 |  |  |  | YES |
| `crce7_fechadellegada` | datetime2 |  |  |  | YES |
| `crce7_fechaestimadaentrega` | datetime2 |  |  |  | YES |
| `crce7_fechapago` | datetime2 |  |  |  | YES |
| `crce7_fecharequerimiento` | datetime2 |  |  |  | YES |
| `crce7_formadepago` | int |  | 10 | 0 | YES |
| `crce7_id_compra` | nvarchar | 255 |  |  | YES |
| `crce7_iva` | decimal |  | 38 | 18 | YES |
| `crce7_iva_base` | decimal |  | 38 | 18 | YES |
| `crce7_nofactura` | nvarchar | 255 |  |  | YES |
| `crce7_plazodelpagodias` | int |  | 10 | 0 | YES |
| `crce7_proovedor` | uniqueidentifier |  |  |  | YES |
| `crce7_proovedorname` | nvarchar | 255 |  |  | YES |
| `crce7_revision` | datetime2 |  |  |  | YES |
| `crce7_saldo` | decimal |  | 38 | 18 | YES |
| `crce7_saldo_base` | decimal |  | 38 | 18 | YES |
| `crce7_subtotal` | decimal |  | 38 | 18 | YES |
| `crce7_subtotal_base` | decimal |  | 38 | 18 | YES |
| `crce7_t_compraid` | uniqueidentifier |  |  |  | YES |
| `crce7_total` | decimal |  | 38 | 18 | YES |
| `crce7_total_base` | decimal |  | 38 | 18 | YES |
| `crce7_totalpagos` | decimal |  | 38 | 18 | YES |
| `crce7_totalpagos_base` | decimal |  | 38 | 18 | YES |
| `createdby` | uniqueidentifier |  |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | datetime2 |  |  |  | YES |
| `createdonbehalfby` | uniqueidentifier |  |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `exchangerate` | decimal |  | 38 | 18 | YES |
| `importsequencenumber` | int |  | 10 | 0 | YES |
| `modifiedby` | uniqueidentifier |  |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | datetime2 |  |  |  | YES |
| `modifiedonbehalfby` | uniqueidentifier |  |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | datetime2 |  |  |  | YES |
| `ownerid` | uniqueidentifier |  |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | uniqueidentifier |  |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | uniqueidentifier |  |  |  | YES |
| `owninguser` | uniqueidentifier |  |  |  | YES |
| `statecode` | int |  | 10 | 0 | YES |
| `statuscode` | int |  | 10 | 0 | YES |
| `timezoneruleversionnumber` | int |  | 10 | 0 | YES |
| `transactioncurrencyid` | uniqueidentifier |  |  |  | YES |
| `transactioncurrencyidname` | nvarchar | 255 |  |  | YES |
| `utcconversiontimezonecode` | int |  | 10 | 0 | YES |
| `versionnumber` | bigint |  | 19 | 0 | YES |


## 🧩 Tabla: `crce7_t_cotizaciones`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_ciudad` | uniqueidentifier |  |  |  | YES |
| `crce7_ciudadname` | nvarchar | 255 |  |  | YES |
| `crce7_cliente` | uniqueidentifier |  |  |  | YES |
| `crce7_clientename` | nvarchar | 255 |  |  | YES |
| `crce7_contactoventa` | uniqueidentifier |  |  |  | YES |
| `crce7_contactoventaname` | nvarchar | 255 |  |  | YES |
| `crce7_despacho` | decimal |  | 38 | 18 | YES |
| `crce7_despacho_base` | decimal |  | 38 | 18 | YES |
| `crce7_despachoinlcuido` | bit |  |  |  | YES |
| `crce7_diasparadespachar` | int |  | 10 | 0 | YES |
| `crce7_direccion` | nvarchar | 255 |  |  | YES |
| `crce7_fecha_cot` | datetime2 |  |  |  | YES |
| `crce7_fecha_env` | datetime2 |  |  |  | YES |
| `crce7_id_cot` | nvarchar | 255 |  |  | YES |
| `crce7_iva` | decimal |  | 38 | 18 | YES |
| `crce7_iva_base` | decimal |  | 38 | 18 | YES |
| `crce7_subtotal` | decimal |  | 38 | 18 | YES |
| `crce7_subtotal_base` | decimal |  | 38 | 18 | YES |
| `crce7_t_direccion` | uniqueidentifier |  |  |  | YES |
| `crce7_t_direccionname` | nvarchar | 255 |  |  | YES |
| `crce7_total` | decimal |  | 38 | 18 | YES |
| `crce7_total_base` | decimal |  | 38 | 18 | YES |
| `crce7_validezoferta` | int |  | 10 | 0 | YES |
| `createdby` | uniqueidentifier |  |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | datetime2 |  |  |  | YES |
| `createdonbehalfby` | uniqueidentifier |  |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `exchangerate` | decimal |  | 38 | 18 | YES |
| `importsequencenumber` | int |  | 10 | 0 | YES |
| `modifiedby` | uniqueidentifier |  |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | datetime2 |  |  |  | YES |
| `modifiedonbehalfby` | uniqueidentifier |  |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | datetime2 |  |  |  | YES |
| `ownerid` | uniqueidentifier |  |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | uniqueidentifier |  |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | uniqueidentifier |  |  |  | YES |
| `owninguser` | uniqueidentifier |  |  |  | YES |
| `statecode` | int |  | 10 | 0 | YES |
| `statuscode` | int |  | 10 | 0 | YES |
| `timezoneruleversionnumber` | int |  | 10 | 0 | YES |
| `transactioncurrencyid` | uniqueidentifier |  |  |  | YES |
| `transactioncurrencyidname` | nvarchar | 255 |  |  | YES |
| `utcconversiontimezonecode` | int |  | 10 | 0 | YES |
| `versionnumber` | bigint |  | 19 | 0 | YES |
| `crce7_t_cotizacionesid` | uniqueidentifier |  |  |  | NO |


## 🧩 Tabla: `crce7_t_cotprod`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_cantidad` | decimal |  | 38 | 18 | YES |
| `crce7_cotizacion` | uniqueidentifier |  |  |  | YES |
| `crce7_cotizacionname` | nvarchar | 255 |  |  | YES |
| `crce7_descripcion` | nvarchar | 255 |  |  | YES |
| `crce7_id_cotprod` | nvarchar | 255 |  |  | YES |
| `crce7_iva` | decimal |  | 38 | 18 | YES |
| `crce7_iva_base` | decimal |  | 38 | 18 | YES |
| `crce7_iva_porc` | decimal |  | 38 | 18 | YES |
| `crce7_prodnombre` | nvarchar | 255 |  |  | YES |
| `crce7_producto` | uniqueidentifier |  |  |  | YES |
| `crce7_productoname` | nvarchar | 255 |  |  | YES |
| `crce7_total` | decimal |  | 38 | 18 | YES |
| `crce7_total_base` | decimal |  | 38 | 18 | YES |
| `crce7_usd_total` | decimal |  | 38 | 18 | YES |
| `crce7_usd_total_base` | decimal |  | 38 | 18 | YES |
| `crce7_usd_vu` | decimal |  | 38 | 18 | YES |
| `crce7_usd_vu_base` | decimal |  | 38 | 18 | YES |
| `crce7_valorunitario` | decimal |  | 38 | 18 | YES |
| `crce7_valorunitario_base` | decimal |  | 38 | 18 | YES |
| `createdby` | uniqueidentifier |  |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | datetime2 |  |  |  | YES |
| `createdonbehalfby` | uniqueidentifier |  |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `exchangerate` | decimal |  | 38 | 18 | YES |
| `importsequencenumber` | int |  | 10 | 0 | YES |
| `modifiedby` | uniqueidentifier |  |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | datetime2 |  |  |  | YES |
| `modifiedonbehalfby` | uniqueidentifier |  |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | datetime2 |  |  |  | YES |
| `ownerid` | uniqueidentifier |  |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | uniqueidentifier |  |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | uniqueidentifier |  |  |  | YES |
| `owninguser` | uniqueidentifier |  |  |  | YES |
| `statecode` | int |  | 10 | 0 | YES |
| `statuscode` | int |  | 10 | 0 | YES |
| `timezoneruleversionnumber` | int |  | 10 | 0 | YES |
| `transactioncurrencyid` | uniqueidentifier |  |  |  | YES |
| `transactioncurrencyidname` | nvarchar | 255 |  |  | YES |
| `utcconversiontimezonecode` | int |  | 10 | 0 | YES |
| `versionnumber` | bigint |  | 19 | 0 | YES |
| `crce7_t_cotprodid` | uniqueidentifier |  |  |  | NO |


## 🧩 Tabla: `crce7_t_empleados`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_apellidos` | nvarchar | 255 |  |  | YES |
| `crce7_fechadenacimiento` | datetime2 |  |  |  | YES |
| `crce7_foto_timestamp` | bigint |  | 19 | 0 | YES |
| `crce7_foto_url` | nvarchar | 255 |  |  | YES |
| `crce7_fotoid` | uniqueidentifier |  |  |  | YES |
| `crce7_id_empleado` | nvarchar | 255 |  |  | YES |
| `crce7_nombres` | nvarchar | 255 |  |  | YES |
| `crce7_t_empleadosid` | uniqueidentifier |  |  |  | YES |
| `createdby` | uniqueidentifier |  |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | datetime2 |  |  |  | YES |
| `createdonbehalfby` | uniqueidentifier |  |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `importsequencenumber` | int |  | 10 | 0 | YES |
| `modifiedby` | uniqueidentifier |  |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | datetime2 |  |  |  | YES |
| `modifiedonbehalfby` | uniqueidentifier |  |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | datetime2 |  |  |  | YES |
| `ownerid` | uniqueidentifier |  |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | uniqueidentifier |  |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | uniqueidentifier |  |  |  | YES |
| `owninguser` | uniqueidentifier |  |  |  | YES |
| `statecode` | int |  | 10 | 0 | YES |
| `statuscode` | int |  | 10 | 0 | YES |
| `timezoneruleversionnumber` | int |  | 10 | 0 | YES |
| `utcconversiontimezonecode` | int |  | 10 | 0 | YES |
| `versionnumber` | bigint |  | 19 | 0 | YES |


## 🧩 Tabla: `crce7_t_ent_prod`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_cant` | int |  | 10 | 0 | YES |
| `crce7_cantidad` | decimal |  | 38 | 18 | YES |
| `crce7_fechaentrega` | datetime2 |  |  |  | YES |
| `crce7_id_ent_prod` | nvarchar | 255 |  |  | YES |
| `crce7_producto` | uniqueidentifier |  |  |  | YES |
| `crce7_productoname` | nvarchar | 255 |  |  | YES |
| `crce7_t_compr_prod` | uniqueidentifier |  |  |  | YES |
| `crce7_t_compr_prodname` | nvarchar | 255 |  |  | YES |
| `crce7_t_ent_prodid` | uniqueidentifier |  |  |  | YES |
| `createdby` | uniqueidentifier |  |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | datetime2 |  |  |  | YES |
| `createdonbehalfby` | uniqueidentifier |  |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `importsequencenumber` | int |  | 10 | 0 | YES |
| `modifiedby` | uniqueidentifier |  |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | datetime2 |  |  |  | YES |
| `modifiedonbehalfby` | uniqueidentifier |  |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | datetime2 |  |  |  | YES |
| `ownerid` | uniqueidentifier |  |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | uniqueidentifier |  |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | uniqueidentifier |  |  |  | YES |
| `owninguser` | uniqueidentifier |  |  |  | YES |
| `statecode` | int |  | 10 | 0 | YES |
| `statuscode` | int |  | 10 | 0 | YES |
| `timezoneruleversionnumber` | int |  | 10 | 0 | YES |
| `utcconversiontimezonecode` | int |  | 10 | 0 | YES |
| `versionnumber` | bigint |  | 19 | 0 | YES |


## 🧩 Tabla: `crce7_t_insumos`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_depieza` | decimal |  | 38 | 18 | YES |
| `crce7_id_insumo` | nvarchar | 255 |  |  | YES |
| `crce7_insumo` | uniqueidentifier |  |  |  | YES |
| `crce7_insumoname` | nvarchar | 255 |  |  | YES |
| `crce7_producto` | uniqueidentifier |  |  |  | YES |
| `crce7_productoname` | nvarchar | 255 |  |  | YES |
| `crce7_rendimiento` | decimal |  | 38 | 18 | YES |
| `crce7_t_insumosid` | uniqueidentifier |  |  |  | YES |
| `crce7_tipo` | int |  | 10 | 0 | YES |
| `createdby` | uniqueidentifier |  |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | datetime2 |  |  |  | YES |
| `createdonbehalfby` | uniqueidentifier |  |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `importsequencenumber` | int |  | 10 | 0 | YES |
| `modifiedby` | uniqueidentifier |  |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | datetime2 |  |  |  | YES |
| `modifiedonbehalfby` | uniqueidentifier |  |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | datetime2 |  |  |  | YES |
| `ownerid` | uniqueidentifier |  |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | uniqueidentifier |  |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | uniqueidentifier |  |  |  | YES |
| `owninguser` | uniqueidentifier |  |  |  | YES |
| `statecode` | int |  | 10 | 0 | YES |
| `statuscode` | int |  | 10 | 0 | YES |
| `timezoneruleversionnumber` | int |  | 10 | 0 | YES |
| `utcconversiontimezonecode` | int |  | 10 | 0 | YES |
| `versionnumber` | bigint |  | 19 | 0 | YES |


## 🧩 Tabla: `crce7_t_lineaproductiva`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_color` | nvarchar | 255 |  |  | YES |
| `crce7_correo` | nvarchar | 255 |  |  | YES |
| `crce7_lineaproductiva` | nvarchar | 255 |  |  | YES |
| `crce7_t_lineaproductivaid` | uniqueidentifier |  |  |  | YES |
| `crce7_textofiltro` | nvarchar | 255 |  |  | YES |
| `createdby` | uniqueidentifier |  |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | datetime2 |  |  |  | YES |
| `createdonbehalfby` | uniqueidentifier |  |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `importsequencenumber` | int |  | 10 | 0 | YES |
| `modifiedby` | uniqueidentifier |  |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | datetime2 |  |  |  | YES |
| `modifiedonbehalfby` | uniqueidentifier |  |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | datetime2 |  |  |  | YES |
| `ownerid` | uniqueidentifier |  |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | uniqueidentifier |  |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | uniqueidentifier |  |  |  | YES |
| `owninguser` | uniqueidentifier |  |  |  | YES |
| `statecode` | int |  | 10 | 0 | YES |
| `statuscode` | int |  | 10 | 0 | YES |
| `timezoneruleversionnumber` | int |  | 10 | 0 | YES |
| `utcconversiontimezonecode` | int |  | 10 | 0 | YES |
| `versionnumber` | bigint |  | 19 | 0 | YES |


## 🧩 Tabla: `crce7_t_od`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_cancelada` | datetime2 |  |  |  | YES |
| `crce7_ciudad` | nvarchar | 255 |  |  | YES |
| `crce7_cliente` | nvarchar | 255 |  |  | YES |
| `crce7_correocontacto` | nvarchar | 255 |  |  | YES |
| `crce7_direccion` | nvarchar | 255 |  |  | YES |
| `crce7_estado` | nvarchar | 255 |  |  | YES |
| `crce7_fechadespacho` | datetime2 |  |  |  | YES |
| `crce7_fechaempaque` | datetime2 |  |  |  | YES |
| `crce7_id_od` | nvarchar | 255 |  |  | YES |
| `crce7_idcliente` | int |  | 10 | 0 | YES |
| `crce7_nombredecontacto` | nvarchar | 255 |  |  | YES |
| `crce7_noorden` | nvarchar | 255 |  |  | YES |
| `crce7_noventa` | int |  | 10 | 0 | YES |
| `crce7_numerodecontacto` | nvarchar | 255 |  |  | YES |
| `crce7_observacionesempaque` | nvarchar | 255 |  |  | YES |
| `crce7_t_odid` | uniqueidentifier |  |  |  | YES |
| `createdby` | uniqueidentifier |  |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | datetime2 |  |  |  | YES |
| `createdonbehalfby` | uniqueidentifier |  |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `importsequencenumber` | int |  | 10 | 0 | YES |
| `modifiedby` | uniqueidentifier |  |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | datetime2 |  |  |  | YES |
| `modifiedonbehalfby` | uniqueidentifier |  |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | datetime2 |  |  |  | YES |
| `ownerid` | uniqueidentifier |  |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | uniqueidentifier |  |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | uniqueidentifier |  |  |  | YES |
| `owninguser` | uniqueidentifier |  |  |  | YES |
| `statecode` | int |  | 10 | 0 | YES |
| `statuscode` | int |  | 10 | 0 | YES |
| `timezoneruleversionnumber` | int |  | 10 | 0 | YES |
| `utcconversiontimezonecode` | int |  | 10 | 0 | YES |
| `versionnumber` | bigint |  | 19 | 0 | YES |


## 🧩 Tabla: `crce7_t_op`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_cantidad` | decimal |  | 38 | 18 | YES |
| `crce7_estado__` | nvarchar | 255 |  |  | YES |
| `crce7_fechaentrega` | datetime2 |  |  |  | YES |
| `crce7_fechafin` | datetime2 |  |  |  | YES |
| `crce7_fechainicio` | datetime2 |  |  |  | YES |
| `crce7_id_op` | nvarchar | 255 |  |  | YES |
| `crce7_insumo` | uniqueidentifier |  |  |  | YES |
| `crce7_insumoname` | nvarchar | 255 |  |  | YES |
| `crce7_observaciones` | nvarchar | 255 |  |  | YES |
| `crce7_od` | uniqueidentifier |  |  |  | YES |
| `crce7_od_prod` | uniqueidentifier |  |  |  | YES |
| `crce7_od_prodname` | nvarchar | 255 |  |  | YES |
| `crce7_odname` | nvarchar | 255 |  |  | YES |
| `crce7_producto` | uniqueidentifier |  |  |  | YES |
| `crce7_productoname` | nvarchar | 255 |  |  | YES |
| `crce7_t_opid` | uniqueidentifier |  |  |  | YES |
| `createdby` | uniqueidentifier |  |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | datetime2 |  |  |  | YES |
| `createdonbehalfby` | uniqueidentifier |  |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `importsequencenumber` | int |  | 10 | 0 | YES |
| `modifiedby` | uniqueidentifier |  |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | datetime2 |  |  |  | YES |
| `modifiedonbehalfby` | uniqueidentifier |  |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | datetime2 |  |  |  | YES |
| `ownerid` | uniqueidentifier |  |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | uniqueidentifier |  |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | uniqueidentifier |  |  |  | YES |
| `owninguser` | uniqueidentifier |  |  |  | YES |
| `statecode` | int |  | 10 | 0 | YES |
| `statuscode` | int |  | 10 | 0 | YES |
| `timezoneruleversionnumber` | int |  | 10 | 0 | YES |
| `utcconversiontimezonecode` | int |  | 10 | 0 | YES |
| `versionnumber` | bigint |  | 19 | 0 | YES |


## 🧩 Tabla: `crce7_t_op_ins`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_cantidad` | decimal |  | 38 | 18 | YES |
| `crce7_id_op_ins` | nvarchar | 255 |  |  | YES |
| `crce7_insumo` | uniqueidentifier |  |  |  | YES |
| `crce7_insumoname` | nvarchar | 255 |  |  | YES |
| `crce7_op` | uniqueidentifier |  |  |  | YES |
| `crce7_op_ins` | uniqueidentifier |  |  |  | YES |
| `crce7_op_insname` | nvarchar | 255 |  |  | YES |
| `crce7_opname` | nvarchar | 255 |  |  | YES |
| `crce7_t_op_insid` | uniqueidentifier |  |  |  | YES |
| `crce7_t_req_prod` | uniqueidentifier |  |  |  | YES |
| `crce7_t_req_prodname` | nvarchar | 255 |  |  | YES |
| `crce7_t_requisicion` | uniqueidentifier |  |  |  | YES |
| `crce7_t_requisicionname` | nvarchar | 255 |  |  | YES |
| `createdby` | uniqueidentifier |  |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | datetime2 |  |  |  | YES |
| `createdonbehalfby` | uniqueidentifier |  |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `importsequencenumber` | int |  | 10 | 0 | YES |
| `modifiedby` | uniqueidentifier |  |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | datetime2 |  |  |  | YES |
| `modifiedonbehalfby` | uniqueidentifier |  |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | datetime2 |  |  |  | YES |
| `ownerid` | uniqueidentifier |  |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | uniqueidentifier |  |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | uniqueidentifier |  |  |  | YES |
| `owninguser` | uniqueidentifier |  |  |  | YES |
| `statecode` | int |  | 10 | 0 | YES |
| `statuscode` | int |  | 10 | 0 | YES |
| `timezoneruleversionnumber` | int |  | 10 | 0 | YES |
| `utcconversiontimezonecode` | int |  | 10 | 0 | YES |
| `versionnumber` | bigint |  | 19 | 0 | YES |


## 🧩 Tabla: `crce7_t_pago_compra`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_abono` | decimal |  | 38 | 18 | YES |
| `crce7_abono_base` | decimal |  | 38 | 18 | YES |
| `crce7_id_pago_comp` | nvarchar | 255 |  |  | YES |
| `crce7_pago` | decimal |  | 38 | 18 | YES |
| `crce7_pago_base` | decimal |  | 38 | 18 | YES |
| `crce7_porcentaje` | decimal |  | 38 | 18 | YES |
| `crce7_t_compra` | uniqueidentifier |  |  |  | YES |
| `crce7_t_compraname` | nvarchar | 255 |  |  | YES |
| `crce7_t_pago` | uniqueidentifier |  |  |  | YES |
| `crce7_t_pago_compraid` | uniqueidentifier |  |  |  | YES |
| `crce7_t_pagoname` | nvarchar | 255 |  |  | YES |
| `createdby` | uniqueidentifier |  |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | datetime2 |  |  |  | YES |
| `createdonbehalfby` | uniqueidentifier |  |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `exchangerate` | decimal |  | 38 | 18 | YES |
| `importsequencenumber` | int |  | 10 | 0 | YES |
| `modifiedby` | uniqueidentifier |  |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | datetime2 |  |  |  | YES |
| `modifiedonbehalfby` | uniqueidentifier |  |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | datetime2 |  |  |  | YES |
| `ownerid` | uniqueidentifier |  |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | uniqueidentifier |  |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | uniqueidentifier |  |  |  | YES |
| `owninguser` | uniqueidentifier |  |  |  | YES |
| `statecode` | int |  | 10 | 0 | YES |
| `statuscode` | int |  | 10 | 0 | YES |
| `timezoneruleversionnumber` | int |  | 10 | 0 | YES |
| `transactioncurrencyid` | uniqueidentifier |  |  |  | YES |
| `transactioncurrencyidname` | nvarchar | 255 |  |  | YES |
| `utcconversiontimezonecode` | int |  | 10 | 0 | YES |
| `versionnumber` | bigint |  | 19 | 0 | YES |


## 🧩 Tabla: `crce7_t_pagos`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_abonos` | decimal |  | 38 | 18 | YES |
| `crce7_abonos_base` | decimal |  | 38 | 18 | YES |
| `crce7_comprobante_timestamp` | bigint |  | 19 | 0 | YES |
| `crce7_comprobante_url` | nvarchar | 255 |  |  | YES |
| `crce7_comprobanteid` | uniqueidentifier |  |  |  | YES |
| `crce7_id_pago` | nvarchar | 255 |  |  | YES |
| `crce7_saldo` | decimal |  | 38 | 18 | YES |
| `crce7_saldo_base` | decimal |  | 38 | 18 | YES |
| `crce7_t_pagosid` | uniqueidentifier |  |  |  | YES |
| `crce7_t_proovedores` | uniqueidentifier |  |  |  | YES |
| `crce7_t_proovedoresname` | nvarchar | 255 |  |  | YES |
| `crce7_valor` | decimal |  | 38 | 18 | YES |
| `crce7_valor_base` | decimal |  | 38 | 18 | YES |
| `createdby` | uniqueidentifier |  |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | datetime2 |  |  |  | YES |
| `createdonbehalfby` | uniqueidentifier |  |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `exchangerate` | decimal |  | 38 | 18 | YES |
| `importsequencenumber` | int |  | 10 | 0 | YES |
| `modifiedby` | uniqueidentifier |  |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | datetime2 |  |  |  | YES |
| `modifiedonbehalfby` | uniqueidentifier |  |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | datetime2 |  |  |  | YES |
| `ownerid` | uniqueidentifier |  |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | uniqueidentifier |  |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | uniqueidentifier |  |  |  | YES |
| `owninguser` | uniqueidentifier |  |  |  | YES |
| `statecode` | int |  | 10 | 0 | YES |
| `statuscode` | int |  | 10 | 0 | YES |
| `timezoneruleversionnumber` | int |  | 10 | 0 | YES |
| `transactioncurrencyid` | uniqueidentifier |  |  |  | YES |
| `transactioncurrencyidname` | nvarchar | 255 |  |  | YES |
| `utcconversiontimezonecode` | int |  | 10 | 0 | YES |
| `versionnumber` | bigint |  | 19 | 0 | YES |


## 🧩 Tabla: `crce7_t_productos`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_alaventa` | bit |  |  |  | YES |
| `crce7_cant_v1` | int |  | 10 | 0 | YES |
| `crce7_cant_v2` | int |  | 10 | 0 | YES |
| `crce7_cod` | nvarchar | 255 |  |  | YES |
| `crce7_codigo` | nvarchar | 255 |  |  | YES |
| `crce7_costo` | decimal |  | 38 | 18 | YES |
| `crce7_costo__fecha` | datetime2 |  |  |  | YES |
| `crce7_costo_base` | decimal |  | 38 | 18 | YES |
| `crce7_descripcion` | nvarchar | 1000 |  |  | YES |
| `crce7_eliminado` | datetime2 |  |  |  | YES |
| `crce7_fecha_v1` | datetime2 |  |  |  | YES |
| `crce7_fecha_v2` | datetime2 |  |  |  | YES |
| `crce7_fecha_v3` | datetime2 |  |  |  | YES |
| `crce7_fecharepinv` | datetime2 |  |  |  | YES |
| `crce7_fichatecnica_name` | nvarchar | 255 |  |  | YES |
| `crce7_id_lote` | nvarchar | 255 |  |  | YES |
| `crce7_id_producto` | nvarchar | 255 |  |  | YES |
| `crce7_imagen_timestamp` | bigint |  | 19 | 0 | YES |
| `crce7_imagen_url` | nvarchar | 255 |  |  | YES |
| `crce7_imagenid` | uniqueidentifier |  |  |  | YES |
| `crce7_inslp1` | uniqueidentifier |  |  |  | YES |
| `crce7_inslp1name` | nvarchar | 255 |  |  | YES |
| `crce7_inslp2` | uniqueidentifier |  |  |  | YES |
| `crce7_inslp2name` | nvarchar | 255 |  |  | YES |
| `crce7_inv` | nvarchar | 255 |  |  | YES |
| `crce7_inventariar` | bit |  |  |  | YES |
| `crce7_lincom1` | int |  | 10 | 0 | YES |
| `crce7_lincom2` | int |  | 10 | 0 | YES |
| `crce7_lineaproductiva` | uniqueidentifier |  |  |  | YES |
| `crce7_lineaproductivaname` | nvarchar | 255 |  |  | YES |
| `crce7_minprod` | decimal |  | 38 | 18 | YES |
| `crce7_nombre` | nvarchar | 255 |  |  | YES |
| `crce7_nombre_` | nvarchar | 255 |  |  | YES |
| `crce7_nombrecompleto` | nvarchar | 255 |  |  | YES |
| `crce7_nuevatabla2` | uniqueidentifier |  |  |  | YES |
| `crce7_nuevatabla2name` | nvarchar | 255 |  |  | YES |
| `crce7_pagweb` | bit |  |  |  | YES |
| `crce7_pesokg` | decimal |  | 38 | 18 | YES |
| `crce7_producto` | int |  | 10 | 0 | YES |
| `crce7_referencia` | int |  | 10 | 0 | YES |
| `crce7_repinv` | decimal |  | 18 | 4 | YES |
| `crce7_stockminimo` | decimal |  | 38 | 18 | YES |
| `crce7_tipo` | int |  | 10 | 0 | YES |
| `crce7_total` | decimal |  | 38 | 18 | YES |
| `crce7_unidad` | nvarchar | 255 |  |  | YES |
| `crce7_valor1` | decimal |  | 38 | 18 | YES |
| `crce7_valor1_base` | decimal |  | 38 | 18 | YES |
| `crce7_valor2` | decimal |  | 38 | 18 | YES |
| `crce7_valor2_base` | decimal |  | 38 | 18 | YES |
| `crce7_valor3` | decimal |  | 38 | 18 | YES |
| `crce7_valor3_base` | decimal |  | 38 | 18 | YES |
| `createdby` | uniqueidentifier |  |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | datetime2 |  |  |  | YES |
| `createdonbehalfby` | uniqueidentifier |  |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `exchangerate` | decimal |  | 38 | 18 | YES |
| `importsequencenumber` | int |  | 10 | 0 | YES |
| `modifiedby` | uniqueidentifier |  |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | datetime2 |  |  |  | YES |
| `modifiedonbehalfby` | uniqueidentifier |  |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | datetime2 |  |  |  | YES |
| `ownerid` | uniqueidentifier |  |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | uniqueidentifier |  |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | uniqueidentifier |  |  |  | YES |
| `owninguser` | uniqueidentifier |  |  |  | YES |
| `statecode` | int |  | 10 | 0 | YES |
| `statuscode` | int |  | 10 | 0 | YES |
| `timezoneruleversionnumber` | int |  | 10 | 0 | YES |
| `transactioncurrencyid` | uniqueidentifier |  |  |  | YES |
| `transactioncurrencyidname` | nvarchar | 255 |  |  | YES |
| `utcconversiontimezonecode` | int |  | 10 | 0 | YES |
| `versionnumber` | bigint |  | 19 | 0 | YES |
| `crce7_t_productosid` | uniqueidentifier |  |  |  | NO |


## 🧩 Tabla: `crce7_t_proovedores`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_banco` | nvarchar | 255 |  |  | YES |
| `crce7_camaradecomercio_name` | nvarchar | 255 |  |  | YES |
| `crce7_celular` | nvarchar | 255 |  |  | YES |
| `crce7_certbancario_name` | nvarchar | 255 |  |  | YES |
| `crce7_ciudad` | nvarchar | 255 |  |  | YES |
| `crce7_contacto` | nvarchar | 255 |  |  | YES |
| `crce7_correo` | nvarchar | 255 |  |  | YES |
| `crce7_direccion` | nvarchar | 255 |  |  | YES |
| `crce7_formatodevinculacion_name` | nvarchar | 255 |  |  | YES |
| `crce7_id_proovedor` | nvarchar | 255 |  |  | YES |
| `crce7_idviejo` | nvarchar | 255 |  |  | YES |
| `crce7_nocuenta` | nvarchar | 255 |  |  | YES |
| `crce7_nombrecompleto` | nvarchar | 255 |  |  | YES |
| `crce7_persona` | int |  | 10 | 0 | YES |
| `crce7_proovedor` | nvarchar | 255 |  |  | YES |
| `crce7_razonsocialcc` | nvarchar | 255 |  |  | YES |
| `crce7_rut_name` | nvarchar | 255 |  |  | YES |
| `crce7_t_proovedoresid` | uniqueidentifier |  |  |  | YES |
| `createdby` | uniqueidentifier |  |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | datetime2 |  |  |  | YES |
| `createdonbehalfby` | uniqueidentifier |  |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `importsequencenumber` | int |  | 10 | 0 | YES |
| `modifiedby` | uniqueidentifier |  |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | datetime2 |  |  |  | YES |
| `modifiedonbehalfby` | uniqueidentifier |  |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | datetime2 |  |  |  | YES |
| `ownerid` | uniqueidentifier |  |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | uniqueidentifier |  |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | uniqueidentifier |  |  |  | YES |
| `owninguser` | uniqueidentifier |  |  |  | YES |
| `statecode` | int |  | 10 | 0 | YES |
| `statuscode` | int |  | 10 | 0 | YES |
| `timezoneruleversionnumber` | int |  | 10 | 0 | YES |
| `utcconversiontimezonecode` | int |  | 10 | 0 | YES |
| `versionnumber` | bigint |  | 19 | 0 | YES |


## 🧩 Tabla: `crce7_t_rep_ins`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_cantidad` | decimal |  | 38 | 18 | YES |
| `crce7_id_rep_ins` | nvarchar | 255 |  |  | YES |
| `crce7_insumo` | uniqueidentifier |  |  |  | YES |
| `crce7_insumoname` | nvarchar | 255 |  |  | YES |
| `crce7_inv` | nvarchar | 255 |  |  | YES |
| `crce7_op` | uniqueidentifier |  |  |  | YES |
| `crce7_opname` | nvarchar | 255 |  |  | YES |
| `crce7_rep_prod` | uniqueidentifier |  |  |  | YES |
| `crce7_rep_prodname` | nvarchar | 255 |  |  | YES |
| `crce7_t_rep_insid` | uniqueidentifier |  |  |  | YES |
| `createdby` | uniqueidentifier |  |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | datetime2 |  |  |  | YES |
| `createdonbehalfby` | uniqueidentifier |  |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `importsequencenumber` | int |  | 10 | 0 | YES |
| `modifiedby` | uniqueidentifier |  |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | datetime2 |  |  |  | YES |
| `modifiedonbehalfby` | uniqueidentifier |  |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | datetime2 |  |  |  | YES |
| `ownerid` | uniqueidentifier |  |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | uniqueidentifier |  |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | uniqueidentifier |  |  |  | YES |
| `owninguser` | uniqueidentifier |  |  |  | YES |
| `statecode` | int |  | 10 | 0 | YES |
| `statuscode` | int |  | 10 | 0 | YES |
| `timezoneruleversionnumber` | int |  | 10 | 0 | YES |
| `utcconversiontimezonecode` | int |  | 10 | 0 | YES |
| `versionnumber` | bigint |  | 19 | 0 | YES |


## 🧩 Tabla: `crce7_t_rep_prod`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_cantidad` | decimal |  | 38 | 18 | YES |
| `crce7_fechafin` | datetime2 |  |  |  | YES |
| `crce7_fechainicio` | datetime2 |  |  |  | YES |
| `crce7_id_rep_prod` | nvarchar | 255 |  |  | YES |
| `crce7_inv` | nvarchar | 255 |  |  | YES |
| `crce7_op` | uniqueidentifier |  |  |  | YES |
| `crce7_opname` | nvarchar | 255 |  |  | YES |
| `crce7_t_rep_prodid` | uniqueidentifier |  |  |  | YES |
| `createdby` | uniqueidentifier |  |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | datetime2 |  |  |  | YES |
| `createdonbehalfby` | uniqueidentifier |  |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `importsequencenumber` | int |  | 10 | 0 | YES |
| `modifiedby` | uniqueidentifier |  |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | datetime2 |  |  |  | YES |
| `modifiedonbehalfby` | uniqueidentifier |  |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | datetime2 |  |  |  | YES |
| `ownerid` | uniqueidentifier |  |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | uniqueidentifier |  |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | uniqueidentifier |  |  |  | YES |
| `owninguser` | uniqueidentifier |  |  |  | YES |
| `statecode` | int |  | 10 | 0 | YES |
| `statuscode` | int |  | 10 | 0 | YES |
| `timezoneruleversionnumber` | int |  | 10 | 0 | YES |
| `utcconversiontimezonecode` | int |  | 10 | 0 | YES |
| `versionnumber` | bigint |  | 19 | 0 | YES |


## 🧩 Tabla: `crce7_t_repinv`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_cant_ajuste` | decimal |  | 38 | 18 | YES |
| `crce7_cant_reporte` | decimal |  | 38 | 18 | YES |
| `crce7_fecha` | datetime2 |  |  |  | YES |
| `crce7_id_repinv` | nvarchar | 255 |  |  | YES |
| `crce7_inv_` | nvarchar | 255 |  |  | YES |
| `crce7_producto` | uniqueidentifier |  |  |  | YES |
| `crce7_productoname` | nvarchar | 255 |  |  | YES |
| `crce7_t_repinvid` | uniqueidentifier |  |  |  | YES |
| `createdby` | uniqueidentifier |  |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | datetime2 |  |  |  | YES |
| `createdonbehalfby` | uniqueidentifier |  |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `importsequencenumber` | int |  | 10 | 0 | YES |
| `modifiedby` | uniqueidentifier |  |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | datetime2 |  |  |  | YES |
| `modifiedonbehalfby` | uniqueidentifier |  |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | datetime2 |  |  |  | YES |
| `ownerid` | uniqueidentifier |  |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | uniqueidentifier |  |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | uniqueidentifier |  |  |  | YES |
| `owninguser` | uniqueidentifier |  |  |  | YES |
| `statecode` | int |  | 10 | 0 | YES |
| `statuscode` | int |  | 10 | 0 | YES |
| `timezoneruleversionnumber` | int |  | 10 | 0 | YES |
| `utcconversiontimezonecode` | int |  | 10 | 0 | YES |
| `versionnumber` | bigint |  | 19 | 0 | YES |


## 🧩 Tabla: `crce7_t_req_prod`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_cantidad` | decimal |  | 38 | 18 | YES |
| `crce7_compra` | uniqueidentifier |  |  |  | YES |
| `crce7_compraname` | nvarchar | 255 |  |  | YES |
| `crce7_fechacompra` | datetime2 |  |  |  | YES |
| `crce7_noreqprod` | nvarchar | 255 |  |  | YES |
| `crce7_producto` | uniqueidentifier |  |  |  | YES |
| `crce7_productoname` | nvarchar | 255 |  |  | YES |
| `crce7_requisicion` | uniqueidentifier |  |  |  | YES |
| `crce7_requisicionname` | nvarchar | 255 |  |  | YES |
| `crce7_t_comp_prod` | uniqueidentifier |  |  |  | YES |
| `crce7_t_comp_prodname` | nvarchar | 255 |  |  | YES |
| `crce7_t_req_prodid` | uniqueidentifier |  |  |  | YES |
| `createdby` | uniqueidentifier |  |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | datetime2 |  |  |  | YES |
| `createdonbehalfby` | uniqueidentifier |  |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `importsequencenumber` | int |  | 10 | 0 | YES |
| `modifiedby` | uniqueidentifier |  |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | datetime2 |  |  |  | YES |
| `modifiedonbehalfby` | uniqueidentifier |  |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | datetime2 |  |  |  | YES |
| `ownerid` | uniqueidentifier |  |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | uniqueidentifier |  |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | uniqueidentifier |  |  |  | YES |
| `owninguser` | uniqueidentifier |  |  |  | YES |
| `statecode` | int |  | 10 | 0 | YES |
| `statuscode` | int |  | 10 | 0 | YES |
| `timezoneruleversionnumber` | int |  | 10 | 0 | YES |
| `utcconversiontimezonecode` | int |  | 10 | 0 | YES |
| `versionnumber` | bigint |  | 19 | 0 | YES |


## 🧩 Tabla: `crce7_t_ventas`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_cliente` | uniqueidentifier |  |  |  | YES |
| `crce7_clientename` | nvarchar | 255 |  |  | YES |
| `crce7_desp_ciudad` | uniqueidentifier |  |  |  | YES |
| `crce7_desp_ciudadname` | nvarchar | 255 |  |  | YES |
| `crce7_desp_direccion` | nvarchar | 255 |  |  | YES |
| `crce7_fecha_desp_progr` | datetime2 |  |  |  | YES |
| `crce7_fechadeventa` | datetime2 |  |  |  | YES |
| `crce7_iddeventa` | nvarchar | 255 |  |  | YES |
| `crce7_iva` | decimal |  | 38 | 18 | YES |
| `crce7_iva_base` | decimal |  | 38 | 18 | YES |
| `crce7_nombreproducto` | nvarchar | 255 |  |  | YES |
| `crce7_nomprod` | nvarchar | 255 |  |  | YES |
| `crce7_prod` | uniqueidentifier |  |  |  | YES |
| `crce7_prodname` | nvarchar | 255 |  |  | YES |
| `crce7_producto` | nvarchar | 255 |  |  | YES |
| `crce7_saldo` | decimal |  | 38 | 18 | YES |
| `crce7_saldo_base` | decimal |  | 38 | 18 | YES |
| `crce7_total` | decimal |  | 38 | 18 | YES |
| `crce7_total_base` | decimal |  | 38 | 18 | YES |
| `createdby` | uniqueidentifier |  |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | datetime2 |  |  |  | YES |
| `createdonbehalfby` | uniqueidentifier |  |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `exchangerate` | decimal |  | 38 | 18 | YES |
| `importsequencenumber` | int |  | 10 | 0 | YES |
| `modifiedby` | uniqueidentifier |  |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | datetime2 |  |  |  | YES |
| `modifiedonbehalfby` | uniqueidentifier |  |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | datetime2 |  |  |  | YES |
| `ownerid` | uniqueidentifier |  |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | uniqueidentifier |  |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | uniqueidentifier |  |  |  | YES |
| `owninguser` | uniqueidentifier |  |  |  | YES |
| `statecode` | int |  | 10 | 0 | YES |
| `statuscode` | int |  | 10 | 0 | YES |
| `timezoneruleversionnumber` | int |  | 10 | 0 | YES |
| `transactioncurrencyid` | uniqueidentifier |  |  |  | YES |
| `transactioncurrencyidname` | nvarchar | 255 |  |  | YES |
| `utcconversiontimezonecode` | int |  | 10 | 0 | YES |
| `versionnumber` | bigint |  | 19 | 0 | YES |
| `crce7_t_ventasid` | uniqueidentifier |  |  |  | NO |
| `crce7_contacto` | uniqueidentifier |  |  |  | YES |
| `crce7_direccion` | uniqueidentifier |  |  |  | YES |
| `crce7_direccion_id` | uniqueidentifier |  |  |  | YES |


## 🧩 Tabla: `crce7_t_ventprods`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_cantidad` | decimal |  | 38 | 18 | YES |
| `crce7_id_vp` | nvarchar | 255 |  |  | YES |
| `crce7_nombreprincipal` | nvarchar | 255 |  |  | YES |
| `crce7_t_ventprodsid` | uniqueidentifier |  |  |  | YES |
| `crce7_total` | decimal |  | 38 | 18 | YES |
| `crce7_total_base` | decimal |  | 38 | 18 | YES |
| `crce7_usd_total` | decimal |  | 38 | 18 | YES |
| `crce7_usd_total_base` | decimal |  | 38 | 18 | YES |
| `crce7_usd_un` | decimal |  | 38 | 18 | YES |
| `crce7_usd_un_base` | decimal |  | 38 | 18 | YES |
| `crce7_valorunitario` | decimal |  | 38 | 18 | YES |
| `crce7_valorunitario_base` | decimal |  | 38 | 18 | YES |
| `crce7_venta` | uniqueidentifier |  |  |  | YES |
| `crce7_ventaname` | nvarchar | 255 |  |  | YES |
| `createdby` | uniqueidentifier |  |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | datetime2 |  |  |  | YES |
| `createdonbehalfby` | uniqueidentifier |  |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `exchangerate` | decimal |  | 38 | 18 | YES |
| `importsequencenumber` | int |  | 10 | 0 | YES |
| `modifiedby` | uniqueidentifier |  |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | datetime2 |  |  |  | YES |
| `modifiedonbehalfby` | uniqueidentifier |  |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | datetime2 |  |  |  | YES |
| `ownerid` | uniqueidentifier |  |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | uniqueidentifier |  |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | uniqueidentifier |  |  |  | YES |
| `owninguser` | uniqueidentifier |  |  |  | YES |
| `statecode` | int |  | 10 | 0 | YES |
| `statuscode` | int |  | 10 | 0 | YES |
| `timezoneruleversionnumber` | int |  | 10 | 0 | YES |
| `transactioncurrencyid` | uniqueidentifier |  |  |  | YES |
| `transactioncurrencyidname` | nvarchar | 255 |  |  | YES |
| `utcconversiontimezonecode` | int |  | 10 | 0 | YES |
| `versionnumber` | bigint |  | 19 | 0 | YES |


## 🧩 Tabla: `crce7_tabla1`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `crce7_cantidad` | decimal |  | 38 | 18 | YES |
| `crce7_descripcion` | nvarchar | 255 |  |  | YES |
| `crce7_id_almacen` | nvarchar | 255 |  |  | YES |
| `crce7_inv` | nvarchar | 255 |  |  | YES |
| `crce7_producto` | uniqueidentifier |  |  |  | YES |
| `crce7_productoname` | nvarchar | 255 |  |  | YES |
| `crce7_tabla1id` | uniqueidentifier |  |  |  | YES |
| `createdby` | uniqueidentifier |  |  |  | YES |
| `createdbyname` | nvarchar | 255 |  |  | YES |
| `createdbyyominame` | nvarchar | 255 |  |  | YES |
| `createdon` | datetime2 |  |  |  | YES |
| `createdonbehalfby` | uniqueidentifier |  |  |  | YES |
| `createdonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `createdonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `importsequencenumber` | int |  | 10 | 0 | YES |
| `modifiedby` | uniqueidentifier |  |  |  | YES |
| `modifiedbyname` | nvarchar | 255 |  |  | YES |
| `modifiedbyyominame` | nvarchar | 255 |  |  | YES |
| `modifiedon` | datetime2 |  |  |  | YES |
| `modifiedonbehalfby` | uniqueidentifier |  |  |  | YES |
| `modifiedonbehalfbyname` | nvarchar | 255 |  |  | YES |
| `modifiedonbehalfbyyominame` | nvarchar | 255 |  |  | YES |
| `overriddencreatedon` | datetime2 |  |  |  | YES |
| `ownerid` | uniqueidentifier |  |  |  | YES |
| `owneridname` | nvarchar | 255 |  |  | YES |
| `owneridtype` | nvarchar | 255 |  |  | YES |
| `owneridyominame` | nvarchar | 255 |  |  | YES |
| `owningbusinessunit` | uniqueidentifier |  |  |  | YES |
| `owningbusinessunitname` | nvarchar | 255 |  |  | YES |
| `owningteam` | uniqueidentifier |  |  |  | YES |
| `owninguser` | uniqueidentifier |  |  |  | YES |
| `statecode` | int |  | 10 | 0 | YES |
| `statuscode` | int |  | 10 | 0 | YES |
| `timezoneruleversionnumber` | int |  | 10 | 0 | YES |
| `utcconversiontimezonecode` | int |  | 10 | 0 | YES |
| `versionnumber` | bigint |  | 19 | 0 | YES |


## 🧩 Tabla: `database_firewall_rules`

| Campo | Tipo | Longitud | Precisión | Escala | Permite NULL |
|-------|------|----------|-----------|--------|---------------|
| `id` | int |  | 10 | 0 | NO |
| `name` | nvarchar | 128 |  |  | NO |
| `start_ip_address` | varchar | 45 |  |  | NO |
| `end_ip_address` | varchar | 45 |  |  | NO |
| `create_date` | datetime |  |  |  | NO |
| `modify_date` | datetime |  |  |  | NO |


## Estructura Base de Datos SQL – Plataforma Reflex

### Tabla: T_Linea_comercial
| Campo  | Tipo      | Longitud | Precisión | Escala | Permite NULL |
|--------|-----------|----------|-----------|--------|--------------|
| Value  | int       |          | 10        | 0      | NO           |
| Label  | nvarchar  | 255      |           |        | NO           |

### Tabla: T_Tipo
| Campo  | Tipo      | Longitud | Precisión | Escala | Permite NULL |
|--------|-----------|----------|-----------|--------|--------------|
| Value  | int       |          | 10        | 0      | NO           |
| Label  | nvarchar  | 255      |           |        | NO           |

### Tabla: crce7_departmentinformation
| Campo                         | Tipo      | Longitud | Permite NULL |
|-------------------------------|-----------|----------|--------------|
| crce7_continent               | nvarchar  | 255      | YES          |
| crce7_continentnumber         | nvarchar  | 255      | YES          |
| crce7_country1                | nvarchar  | 255      | YES          |
| crce7_country2                | nvarchar  | 255      | YES          |
| crce7_countrynumber           | nvarchar  | 255      | YES          |
| crce7_departmentinformationid | nvarchar  | 255      | YES          |
| crce7_departmentname          | nvarchar  | 255      | YES          |
| crce7_fullname                | nvarchar  | 255      | YES          |
| crce7_id                      | nvarchar  | 255      | YES          |
| crce7_municipalitycode        | nvarchar  | 255      | YES          |
| crce7_municipalityname        | nvarchar  | 255      | YES          |
| crce7_name                    | nvarchar  | 255      | YES          |
| crce7_province                | nvarchar  | 255      | YES          |
| createdby                     | nvarchar  | 255      | YES          |
| createdbyname                 | nvarchar  | 255      | YES          |
| createdbyyominame             | nvarchar  | 255      | YES          |
| createdon                     | nvarchar  | 255      | YES          |
| createdonbehalfby             | nvarchar  | 255      | YES          |
| createdonbehalfbyname         | nvarchar  | 255      | YES          |
| createdonbehalfbyyominame     | nvarchar  | 255      | YES          |
| importsequencenumber          | nvarchar  | 255      | YES          |
| modifiedby                    | nvarchar  | 255      | YES          |
| modifiedbyname                | nvarchar  | 255      | YES          |
| modifiedbyyominame            | nvarchar  | 255      | YES          |
| modifiedon                    | nvarchar  | 255      | YES          |
| modifiedonbehalfby            | nvarchar  | 255      | YES          |
| modifiedonbehalfbyname        | nvarchar  | 255      | YES          |
| modifiedonbehalfbyyominame    | nvarchar  | 255      | YES          |
| overriddencreatedon           | nvarchar  | 255      | YES          |
| ownerid                       | nvarchar  | 255      | YES          |
| owneridname                   | nvarchar  | 255      | YES          |
| owneridtype                   | nvarchar  | 255      | YES          |
| owneridyominame               | nvarchar  | 255      | YES          |
| owningbusinessunit            | nvarchar  | 255      | YES          |
| owningbusinessunitname        | nvarchar  | 255      | YES          |
| owningteam                    | nvarchar  | 255      | YES          |
| owninguser                    | nvarchar  | 255      | YES          |
| statecode                     | nvarchar  | 255      | YES          |
| statuscode                    | nvarchar  | 255      | YES          |
| timezoneruleversionnumber     | nvarchar  | 255      | YES          |
| utcconversiontimezonecode     | nvarchar  | 255      | YES          |
| versionnumber                 | nvarchar  | 255      | YES          |

### Tabla: crce7_nuevatabla2
| Campo                  | Tipo      | Longitud | Permite NULL |
|------------------------|-----------|----------|--------------|
| crce7_compra           | nvarchar  | 255      | YES          |
| crce7_compraname       | nvarchar  | 255      | YES          |
| crce7_fechadecompra    | nvarchar  | 255      | YES          |
| crce7_fecharequerida   | nvarchar  | 255      | YES          |
| crce7_no               | nvarchar  | 255      | YES          |
| crce7_nuevatabla2id    | nvarchar  | 255      | YES          |
| crce7_op               | nvarchar  | 255      | YES          |
| crce7_opname           | nvarchar  | 255      | YES          |
| crce7_orden            | nvarchar  | 255      | YES          |
| createdby              | nvarchar  | 255      | YES          |
| createdbyname          | nvarchar  | 255      | YES          |
| createdbyyominame      | nvarchar  | 255      | YES          |
| createdon              | nvarchar  | 255      | YES          |
| createdonbehalfby      | nvarchar  | 255      | YES          |
| createdonbehalfbyname  | nvarchar  | 255      | YES          |
| createdonbehalfbyyominame | nvarchar  | 255   | YES          |
| importsequencenumber   | nvarchar  | 255      | YES          |
| modifiedby             | nvarchar  | 255      | YES          |
| modifiedbyname         | nvarchar  | 255      | YES          |
| modifiedbyyominame     | nvarchar  | 255      | YES          |
| modifiedon             | nvarchar  | 255      | YES          |
| modifiedonbehalfby     | nvarchar  | 255      | YES          |
| modifiedonbehalfbyname | nvarchar  | 255      | YES          |
| modifiedonbehalfbyyominame | nvarchar  | 255   | YES          |
| overriddencreatedon    | nvarchar  | 255      | YES          |
| ownerid                | nvarchar  | 255      | YES          |
| owneridname            | nvarchar  | 255      | YES          |
| owneridtype            | nvarchar  | 255      | YES          |
| owneridyominame        | nvarchar  | 255      | YES          |
| owningbusinessunit     | nvarchar  | 255      | YES          |
| owningbusinessunitname | nvarchar  | 255      | YES          |
| owningteam             | nvarchar  | 255      | YES          |
| owninguser             | nvarchar  | 255      | YES          |
| statecode              | nvarchar  | 255      | YES          |
| statuscode             | nvarchar  | 255      | YES          |
| timezoneruleversionnumber | nvarchar  | 255   | YES          |
| utcconversiontimezonecode | nvarchar  | 255   | YES          |
| versionnumber          | nvarchar  | 255      | YES          |

### Tabla: crce7_nuevatabla3
| Campo                | Tipo      | Longitud | Permite NULL |
|----------------------|-----------|----------|--------------|
| crce7_id_lc          | nvarchar  | 255      | YES          |
| crce7_lineacomercial | nvarchar  | 255      | YES          |
| crce7_nuevatabla3id  | nvarchar  | 255      | YES          |
| crce7_t_productos    | nvarchar  | 255      | YES          |
| crce7_t_productosname| nvarchar  | 255      | YES          |
| createdby            | nvarchar  | 255      | YES          |
| createdbyname        | nvarchar  | 255      | YES          |
| createdbyyominame    | nvarchar  | 255      | YES          |
| createdon            | nvarchar  | 255      | YES          |
| createdonbehalfby    | nvarchar  | 255      | YES          |
| createdonbehalfbyname| nvarchar  | 255      | YES          |
| createdonbehalfbyyominame | nvarchar  | 255  | YES          |
| importsequencenumber | nvarchar  | 255      | YES          |
| modifiedby           | nvarchar  | 255      | YES          |
| modifiedbyname       | nvarchar  | 255      | YES          |
| modifiedbyyominame   | nvarchar  | 255      | YES          |
| modifiedon           | nvarchar  | 255      | YES          |
| modifiedonbehalfby   | nvarchar  | 255      | YES          |
| modifiedonbehalfbyname | nvarchar | 255      | YES          |
| modifiedonbehalfbyyominame | nvarchar | 255  | YES          |
| overriddencreatedon  | nvarchar  | 255      | YES          |
| ownerid              | nvarchar  | 255      | YES          |
| owneridname          | nvarchar  | 255      | YES          |
| owneridtype          | nvarchar  | 255      | YES          |
| owneridyominame      | nvarchar  | 255      | YES          |
| owningbusinessunit   | nvarchar  | 255      | YES          |
| owningbusinessunitname | nvarchar | 255     | YES          |
| owningteam           | nvarchar  | 255      | YES          |
| owninguser           | nvarchar  | 255      | YES          |
| statecode            | nvarchar  | 255      | YES          |
| statuscode           | nvarchar  | 255      | YES          |
| timezoneruleversionnumber | nvarchar | 255   | YES          |
| utcconversiontimezonecode | nvarchar | 255   | YES          |
| versionnumber        | nvarchar  | 255      | YES          |

<!-- El resto de las tablas siguen la misma estructura que las anteriores, listando cada campo, tipo, longitud y si permite NULL. -->