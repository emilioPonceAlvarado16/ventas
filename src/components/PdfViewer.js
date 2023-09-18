import React, { useRef, useEffect, useState } from 'react';
import * as pdfjs from 'pdfjs-dist/build/pdf';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.entry';
function ResizeIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M7 14L3 14L3 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 10L3 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 10L21 10L21 14" stroke
            ="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 14L21 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}


function PdfViewer({ url }) {
    const containerRef = useRef(null);
    const [widthPercentage, setWidthPercentage] = useState(50);  // Valor por defecto


    useEffect(() => {
        const renderPDF = async () => {
            try {
                pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

                const loadingTask = pdfjs.getDocument(url);
                const pdf = await loadingTask.promise;

                // Limpiamos el contenedor antes de renderizar
                containerRef.current.innerHTML = "";

                const containerWidth = containerRef.current.clientWidth;

                for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                    const page = await pdf.getPage(pageNum);
                    const viewportOriginal = page.getViewport({ scale: 1 });
                    const scale = containerWidth / viewportOriginal.width;
                    const viewport = page.getViewport({ scale: scale });

                    const canvas = document.createElement('canvas');
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
    }, [url,widthPercentage]);

    return (
        <div>
            {/* <input 
                type="range" 
                min="0" 
                max="100" 
                value={widthPercentage} 
                onChange={(e) => setWidthPercentage(e.target.value)} 
            /> */}
            <div 
                ref={containerRef} 
                style={{ 
                    // width: `${widthPercentage}%`, 
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
