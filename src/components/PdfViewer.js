import React, { useRef, useEffect, useState } from 'react';
import * as pdfjs from 'pdfjs-dist/build/pdf';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.entry';
import axios from 'axios'; // Importando axios para realizar solicitudes HTTP

function PdfViewer({ url,setFoundedField, setTextFoundedField, setShowText }) {
    const containerRef = useRef(null);
    const [scaleFactor, setScaleFactor] = useState(null); // Estado para almacenar el factor de escala

    // Función para manejar doble clics en el canvas
    const handleCanvasClick = async (event, pageNumber) => {
        const canvas = event.target;
        const rect = canvas.getBoundingClientRect();
        const x = parseFloat((event.clientX - rect.left).toFixed(4));
        const y = parseFloat((event.clientY - rect.top).toFixed(4));
        console.log('Coordenadas del clic:', x, y);
        console.log('Factor de escala:', scaleFactor); // Mostrar el factor de escala

        // Realizar la petición GET
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_URL_WEB}get-line`, {
                params: {
                    page: pageNumber,
                    x,
                    y
                }
            });
            console.log('Respuesta del servidor:', response.data);
            // Actualizar foundedField con el id de la respuesta
            if(response.data && response.data.id !== undefined) {
                setFoundedField(response.data.id);
                setShowText(false)
            }
            if(response.data && response.data.linea_texto !== undefined) {
                setTextFoundedField(response.data.linea_texto)
            }

        } catch (error) {
            console.error('Error al realizar la petición GET:', error);
        }
    };

    useEffect(() => {
        const renderPDF = async () => {
            try {
                pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;
                const loadingTask = pdfjs.getDocument(url);
                const pdf = await loadingTask.promise;
                containerRef.current.innerHTML = "";

                const containerWidth = containerRef.current.clientWidth;

                for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                    const page = await pdf.getPage(pageNum);
                    const viewportOriginal = page.getViewport({ scale: 1 });
                    const scale = containerWidth / viewportOriginal.width;
                    if (pageNum === 1) {
                        setScaleFactor(scale); // Guardar el factor de escala
                    }
                    const viewport = page.getViewport({ scale });

                    const canvas = document.createElement('canvas');
                    canvas.addEventListener('dblclick', (event) => handleCanvasClick(event, pageNum));
                    containerRef.current.appendChild(canvas);

                    const context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    const renderContext = {
                        canvasContext: context,
                        viewport
                    };

                    page.render(renderContext);
                }
            } catch (error) {
                console.error("Error al renderizar el PDF:", error);
            }
        };
        renderPDF();
    }, [url]);

    return (
        <div>
            <div
                ref={containerRef}
                style={{
                    width: "100%",
                    height: 'calc(100vh - 17px)',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    margin: '0 auto 0 0'
                }}
            />
        </div>
    );
}
export default PdfViewer;