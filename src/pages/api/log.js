import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const logsPath = path.join('/tmp', 'logs.json');
    
    try {
      // Crear archivo si no existe
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
      res.status(500).json({ error: 'Error guardando log' });
    }
  } else {
    res.status(405).end();
  }
}