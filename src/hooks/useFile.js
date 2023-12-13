import { useState } from 'react';
import { uploadFile, extractDocument, classifyText } from '../services/fileService2'; // Asegúrate de que las rutas sean correctas

const useFile = () => {
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  const processFile = async (file) => {
    try {
      setError(null);
      setMessage('Uploading file...');
      const uploadResponse = await uploadFile(file);

      if (!uploadResponse.url) {
        throw new Error('File upload did not return a valid URL.');
      }

      setMessage(uploadResponse.message);
      const fileUrl = uploadResponse.url;
      setMessage('Extracting text from document...');
      const documentData = await extractDocument(fileUrl);

      setMessage('Classifying text...');
      const classificationResult = await classifyText(documentData);

      setMessage('Process completed successfully.');
      return classificationResult;
    } catch (err) {
      setError(err);
      setMessage(`Error: ${err.message}`);
    }
  };

  return { processFile, error, message };
};

export default useFile;
