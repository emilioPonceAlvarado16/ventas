import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const capturasDir = path.join('/tmp', 'capturas');
  
  try {
    if (!fs.existsSync(capturasDir)) {
      return res.status(200).json([]);
    }
    
    const files = fs.readdirSync(capturasDir)
                   .filter(file => file.endsWith('.jpg'))
                   .map(file => ({
                     name: file,
                     url: `/api/capturas/${file}`
                   }));

    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ error: 'Error leyendo capturas' });
  }
}