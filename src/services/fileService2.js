import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_URL_WEB;

// Función para subir archivos
export const uploadFile = async (file) => {
  // Validar la extensión del archivo
  const validExtensions = ['.docx', '.txt'];
  const fileExtension = file.name.split('.').pop();
  if (!validExtensions.includes(`.${fileExtension}`)) {
    throw new Error("Invalid file type. Only .docx and .txt files are accepted.");
  }

  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(`${apiUrl}upload_file`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log("File upload successful.");
    return response.data; // Asumiendo que la API devuelve la URL en response.data.url
  } catch (error) {
    console.error("Error uploading the file:", error);
    throw error;
  }
};

// Función para extraer texto de imágenes
export const extractDocument = async (fileUrl) => {
  try {
    const response = await axios.post(`${apiUrl}extract_document`, { file_path: fileUrl });
    console.log("Document extraction successful.");
    return response.data;
  } catch (error) {
    console.error("Error in document extraction:", error);
    throw error;
  }
};

// Función para clasificar texto
export const classifyText = async (documentData) => {
  try {
    const response = await axios.post(`${apiUrl}classify`, documentData);
    console.log("Text classification successful.");
    return response.data;
  } catch (error) {
    console.error("Error in text classification:", error);
    throw error;
  }
};
