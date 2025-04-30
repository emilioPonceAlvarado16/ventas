import fs from 'fs/promises';
import path from 'path';
import { IncomingForm } from 'formidable';

export const config = {
  api: {
    bodyParser: false
  }
};

const parseForm = (req) => {
  return new Promise((resolve, reject) => {
    const form = new IncomingForm({
      uploadDir: path.join(process.cwd(), 'public', 'capturas'),
      keepExtensions: true,
      filename: (name, ext) => `captura_${Date.now()}${ext}`
    });

    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve(files);
    });
  });
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    // Crear directorio si no existe
    await fs.mkdir(path.join(process.cwd(), 'public', 'capturas'), { recursive: true });

    const files = await parseForm(req);
    const file = files.photo[0];
    
    // Mover el archivo temporal a la ubicación final
    const newPath = path.join(process.cwd(), 'public', 'capturas', file.newFilename);
    await fs.rename(file.filepath, newPath);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({ 
      success: true, 
      path: `/capturas/${file.newFilename}`
    });
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      error: 'Error procesando la imagen',
      details: error.message 
    });
  }
}