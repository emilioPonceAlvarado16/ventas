import React, { createContext, useState } from 'react';
import { uploadFile, extractDocument, classifyText } from './fileService'; // Asegúrate de tener las rutas correctas

export const FileProcessingContext = createContext();

export const FileProcessingProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  const processFile = async (file) => {
    try {
      setError(null);
      setMessage('Uploading file...');
      const uploadResponse = await uploadFile(file);

      // Asegurándonos de que la URL se recibe correctamente
      if (!uploadResponse.url) {
        throw new Error('File upload did not return a valid URL.');
      }

      setMessage(uploadResponse.message); // Mensaje de éxito de la carga
      const fileUrl = uploadResponse.url; // URL del archivo subido
      return fileUrl;
    //   setMessage('Extracting text from document...');
    //   const documentData = await extractDocument(fileUrl);

    //   setMessage('Classifying text...');
    //   const classificationResult = await classifyText(documentData);

    //   setMessage('Process completed successfully.');
    //   return classificationResult;
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
