import axios from 'axios';

export const compileBlocksToPdf = async (payload) => {
    try {
        // Enviamos los bloques al servidor y esperamos un PDF como respuesta
        const response = await axios.post(`${process.env.NEXT_PUBLIC_URL_WEB}compile`, payload, {
            responseType: 'blob' // Indicamos que esperamos una respuesta binaria (blob)
        });

        // Convertimos el Blob a un objeto URL y lo retornamos
        const pdfUrl = URL.createObjectURL(response.data);
        return pdfUrl;
    } catch (error) {
        console.error('Error al compilar bloques a PDF:', error);
        throw error;
    }
};
