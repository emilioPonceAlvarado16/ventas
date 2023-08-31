import React from 'react'
function ButtonPanel() {
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Procesa el archivo aquí (por ejemplo, puedes convertirlo a texto y mostrarlo en el área de edición)
        }
    };

    return (
        <div>
            <input type="file" accept=".doc, .docx" onChange={handleFileUpload} />
            {/* Otros botones aquí */}
        </div>
    );
}
export default function DocumentEditor() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <ButtonPanel />
        <div style={{ display: 'flex', flexGrow: 1}}>
            <div 
                style={{
                    border: "1px solid #333",
                    width: "50%",
                    height: "100%",
                    fontSize: "18px",
                    overflow: "auto",
                    backgroundColor: "white",
                }}
            >
                {/* Documento 1 */}
            </div>
            <div 
                style={{
                    border: "1px solid #333",
                    width: "50%",
                    height: "100%",
                    fontSize: "18px",
                    overflow: "auto",
                    backgroundColor: "white",
                }}
            >
                {/* Documento 2 */}
            </div>
        </div>
    </div>
    )
  }
  