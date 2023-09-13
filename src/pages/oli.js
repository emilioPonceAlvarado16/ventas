
import React, { useState } from 'react';
import FileUploadSection from '../components/FileUploadSection';
import MyBlueComponent from '@/components/MyBlueComponent';
import RegularSection from '@/components/RegularSection';
import PdfViewer from '@/components/PdfViewer';
// import TextEditor from '@/components/TextEditor';
import TextEditor from '@/components/TextEditor2';
// import TextEditor2 from '@/components/TextEditor2';

export default function oli() {

  const [Fields, setFields] = useState([])

  const upload = () => {
    // Agrega un nuevo elemento al estado existente
    setFields(prevFields => {
      // Encuentra el ID más alto en el array 'prevFields'
      const highestId = Math.max(...prevFields.map(field => parseInt(field.id, 10)), 0);
    
      // Calcula el nuevo ID incrementando el ID más alto
      const newId = highestId + 1;
  
      // Crea el nuevo elemento
      const newElement = {
        "id": newId.toString(), // Asegúrate de que sea una cadena si los otros IDs también lo son
        "name": `Item-${newId}`, // Nombre generado dinámicamente
        "value": "Nuevo valor aquí", // Podrías poner cualquier valor predeterminado aquí
        "type": "tu_tipo_aquí" // Especifica el tipo que quieras
      };
    
      // Devuelve el nuevo array incluyendo el nuevo elemento
      return [...prevFields, newElement];
    });
  };
  
  
  return (
    <div>
      {/* <button onClick={upload}>hola</button> */}
      <RegularSection />
      <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
          <TextEditor fields={Fields}/>
        <div style={{ flex: 4, width: '80%' }}>
        <PdfViewer url="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf" />
        {/* <PdfViewer url="../../../pythonapi/labs.pdf" /> */}
        </div>
    </div>
    </div>
  );
}
