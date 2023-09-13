import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_URL_WEB;

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(`${apiUrl}/file`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading the file:", error);
    throw error;
  }
};
