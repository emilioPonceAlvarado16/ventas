import { IncomingForm } from 'formidable';

export const config = {
  api: {
    bodyParser: false,
    runtime: 'nodejs' // Fuerza el uso de runtime Node.js
  }
};

export default async function handler(req, res) {
  try {
    const form = new IncomingForm();
    
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Error parsing form:', err);
        return res.status(500).json({ error: 'Error procesando la imagen' });
      }

      if (!files.photo) {
        return res.status(400).json({ error: 'No se proporcionó archivo' });
      }

      const file = files.photo[0];
      const formData = new FormData();
      const fileStream = fs.createReadStream(file.filepath);
      
      formData.append('photo', fileStream, file.originalFilename);

      // Enviar a Flask
      const flaskResponse = await fetch('http://ec2-44-223-229-134.compute-1.amazonaws.com:5000/save-photo', {
        method: 'POST',
        body: formData
      });

      const responseData = await flaskResponse.json();
      
      // Limpiar archivo temporal
      fs.unlinkSync(file.filepath);

      res.status(flaskResponse.status).json(responseData);
    });

  } catch (error) {
    console.error('Error general:', error);
    res.status(500).json({ 
      error: 'Error interno del servidor',
      details: error.message 
    });
  }
}