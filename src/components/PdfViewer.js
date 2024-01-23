import React, { useRef, useEffect, useState } from 'react';
import * as pdfjs from 'pdfjs-dist/build/pdf';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.entry';

function PdfViewer({ url }) {
    const containerRef = useRef(null);
    const [scaleFactor, setScaleFactor] = useState(null); // Estado para almacenar el factor de escala

    // Función para manejar clics en el canvas
    const handleCanvasClick = (event) => {
        const canvas = event.target;
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        console.log('Coordenadas del clic:', x, y);
        console.log('Factor de escala:', scaleFactor); // Mostrar el factor de escala
        // Aquí puedes hacer algo con las coordenadas (x, y) y el factor de escala
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
                    const viewport = page.getViewport({ scale: scale });

                    const canvas = document.createElement('canvas');
                    canvas.addEventListener('click', handleCanvasClick);
                    containerRef.current.appendChild(canvas);

                    const context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    const renderContext = {
                        canvasContext: context,
                        viewport: viewport
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
