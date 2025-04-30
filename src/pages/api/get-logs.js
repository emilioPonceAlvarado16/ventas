import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const logsPath = path.join('/tmp', 'logs.json');
  
  try {
    if (!fs.existsSync(logsPath)) {
      return res.status(200).json([]);
    }
    
    const rawData = fs.readFileSync(logsPath);
    const logs = JSON.parse(rawData);
    
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ error: 'Error leyendo logs' });
  }
}