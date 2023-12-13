import React, { createContext, useState } from 'react';
import { uploadFile, extractDocument, classifyText } from '../services/fileService2'; // Asegúrate de tener las rutas correctas

export const FileProcessingContext = createContext();

export const FileProcessingProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  const processFile = async (file) => {
    try {
      setError(null);
      setMessage('Uploading file...');
      const fileUrl = await uploadFile(file);

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

  return (
    <FileProcessingContext.Provider value={{ processFile, error, message }}>
      {children}
    </FileProcessingContext.Provider>
  );
};
