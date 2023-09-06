import React from 'react';

export default function RegularSection() {
  return (
    <div className="a-section-regular-2">
      <div className="a-container-regular-2">
        <div className="w-layout-grid a-cta-grid">
          <div className="a-cta-grid-block">
            <div className="a-margin-bottom-35">
              {/* Tu icono aquí */}
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
              />
              <label htmlFor="file" className="w-file-upload-uploading-btn">
                <svg height="20" width="20" fill="#FFC107">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
                </svg>
                Seleccionar Archivo
              </label>
            </div>
          </div>

          <div className="a-cta-grid-block">
            <div className="a-margin-bottom-35">
              {/* Tu icono aquí */}
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
              />
              <label htmlFor="template" className="w-file-upload-uploading-btn">
                <svg height="20" width="20"fill="#FFC107">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
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
