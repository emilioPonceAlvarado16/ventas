import React, { useState } from 'react';
import { uploadFile } from '../services/fileService';
import Loading from './Loading';

export default function RegularSection(props) {
  const [isLoading1, setIsLoading1] = useState(false);

  const handleFileUpload = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;
    setIsLoading1(true);
    try {
      const response = await uploadFile(file);
      console.log("File uploaded successfully:", response);
      if (props.setFields) {
        props.setFields(response.body[0]);
      }
    

      // Llama a la función upload del padre y pasa el archivo y el tipo
      // upload(file, type);
    } catch (error) {
      console.error("Error uploading the file:", error);
    } finally {
      setIsLoading1(false); // Terminar el estado de carga
    }
  };

  return (
    <div className="a-section-regular-2">
      {
        isLoading1 && <Loading />
      }
      {JSON.stringify()}
      <div className="a-container-regular-2">
        <div className="w-layout-grid a-cta-grid">
          <div className="a-cta-grid-block">
            <div className="a-margin-bottom-35">
            </div>
            <div className="a-margin-bottom-34">
              <h6 className="a-h6-heading">Subir Archivo</h6>
            </div>
            <div className="f-margin-bottom-24">
              <p className="f-paragraph-regular">
                Elije un archivo para subir y procesar.
              </p>
            </div>
            <div className="w-file-upload">
              <input
                type="file"
                id="file"
                className="w-file-upload-input"
                onChange={handleFileUpload}
              />
              <label htmlFor="file" className="w-file-upload-uploading-btn">
                <svg height="20" width="20" fill="white">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
                </svg>
                {isLoading1 ? <div className="spin"></div> : 'Seleccionar Archivo'}
              </label>
            </div>
          </div>

          <div className="a-cta-grid-block">
            <div className="a-margin-bottom-35">
            </div>
            <div className="a-margin-bottom-34">
              <h6 className="a-h6-heading">Subir Plantilla</h6>
            </div>
            <div className="f-margin-bottom-24">
              <p className="f-paragraph-regular">
                Sube una plantilla para copiar el formato.
              </p>
            </div>
            <div className="w-file-upload">
              <input
                type="file"
                id="template"
                className="w-file-upload-input"
                onChange={handleFileUpload}
              />
              <label htmlFor="template" className="w-file-upload-uploading-btn">
                <svg height="20" width="20" fill="white">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
                </svg>
                Seleccionar Plantilla
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
