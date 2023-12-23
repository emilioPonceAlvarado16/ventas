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
      // return uploadResponse
      setMessage('Extracting text from document...');
      const documentData = await extractDocument(fileUrl);
      // return documentData
      setMessage('Classifying text...');
      const classificationResult = await classifyText(documentData[0]);
      // return classificationResult
      setMessage('Process completed successfully.');
      // return documentData[1];
      return classificationResult
    } catch (err) {
      setError(err);
      setMessage(` ${err.Error}`);
    }
  };

  return { processFile, error, message, setError };
};

export default useFile;
