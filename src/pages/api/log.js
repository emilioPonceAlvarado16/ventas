import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const logsDir = path.join(process.cwd(), 'public');
    const logsPath = path.join(logsDir, 'logs.json');

    try {
      // Crear directorio si no existe
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }

      // Crear archivo inicial con array vacío
      if (!fs.existsSync(logsPath)) {
        fs.writeFileSync(logsPath, '[]');
      }

      const rawData = fs.readFileSync(logsPath);
      const logs = JSON.parse(rawData);
      
      const newLog = {
        ...req.body,
        ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        timestamp: new Date().toISOString()
      };

      logs.push(newLog);
      fs.writeFileSync(logsPath, JSON.stringify(logs, null, 2));

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error detallado:', error);  // Debug en consola del servidor
      res.status(500).json({ 
        error: 'Error al guardar log',
        details: error.message 
      });
    }
  } else {
    res.status(405).end();
  }
}