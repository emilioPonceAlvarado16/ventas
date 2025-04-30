import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const capturasDir = path.join(process.cwd(), 'public', 'capturas');
  
  try {
    const files = fs.readdirSync(capturasDir)
                   .filter(file => file.endsWith('.jpg'))
                   .map(file => ({
                     name: file,
                     url: `/capturas/${file}`,
                     date: fs.statSync(path.join(capturasDir, file)).birthtime
                   }));

    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ error: 'Error leyendo capturas' });
  }
}