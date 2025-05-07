require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { BlobServiceClient } = require('@azure/storage-blob');
const sql = require('mssql');

// Ruta local donde están las imágenes
const imageFolderPath = '/Users/juancamilobecerrarestrepo/Library/CloudStorage/OneDrive-SharedLibraries-ReflexSeñalizaciónVialSAS/Marketing - Documentos/Imagenes/Productos para página web/Fotos página web/Conversión';

// Azure Blob setup
const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;
const containerName = 'imagenes-productos';
const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
const containerClient = blobServiceClient.getContainerClient(containerName);

// SQL Server setup
const sqlConfig = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  server: process.env.SQL_SERVER,
  database: process.env.SQL_DATABASE,
  options: {
    encrypt: true,
    trustServerCertificate: false
  }
};

// Función principal
async function uploadImagesAndUpdateSQL() {
  const files = fs.readdirSync(imageFolderPath).filter(file =>
    /\.(png|jpg|jpeg|webp)$/i.test(file)
  );

  await sql.connect(sqlConfig);

  for (const fileName of files) {
    const code = fileName.split('.')[0]; // Extrae '1234-1' de '1234-1.algo.jpg'
    const filePath = path.join(imageFolderPath, fileName);
    const blobName = fileName.replace(/\s+/g, '_'); // Evita espacios en URLs
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    try {
      // Subir imagen
      const uploadBlobResponse = await blockBlobClient.uploadFile(filePath);
      const blobUrl = blockBlobClient.url;

      // Actualizar SQL
      await sql.query`
        UPDATE crce7_t_productos
        SET crce7_imagen_url = ${blobUrl}
        WHERE crce7_codigo = ${code}
      `;

      console.log(`✅ ${fileName} → ${blobUrl}`);
    } catch (err) {
      console.error(`❌ Error con ${fileName}:`, err.message);
    }
  }

  await sql.close();
  console.log('🎉 Proceso completado');
}

uploadImagesAndUpdateSQL();