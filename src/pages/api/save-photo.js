import fs from 'fs';
import path from 'path';
import { IncomingForm } from 'formidable';

export const config = {
  api: {
    bodyParser: false
  }
};

export default function handler(req, res) {
  const uploadDir = path.join('/tmp', 'capturas');
  
  // Crear directorio si no existe
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const form = new IncomingForm({
    uploadDir: uploadDir,
    keepExtensions: true,
    filename: (name, ext) => `captura_${Date.now()}${ext}`
  });

  form.parse(req, (err, fields, files) => {
    if (err) return res.status(500).json({ error: 'Error procesando imagen' });
    
    res.status(200).json({ 
      success: true,
      tempPath: files.photo.filepath // Ruta temporal en /tmp
    });
  });
}