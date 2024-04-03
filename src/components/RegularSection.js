import React, { useState, useEffect } from 'react';
import useFile from '../hooks/useFile'; // Importa el hook useFile
import Loading from './Loading2';
import ProjectPencil from './projectPencil/ProjectPencil';

export default function RegularSection(props) {
  const { processFile, error, message, setError } = useFile(); // Usa el hook useFile
  const [isLoading1, setIsLoading1] = useState(false);
  const onOpenTemplateList = props.onOpenTemplateList || null;


  const handleFileUpload = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;
    setIsLoading1(true);
    try {
      const response = await processFile(file); // Usa processFile del hook
      console.log("File uploaded successfully:", response);
      if (props.setFields) {
        props.setFields(response.body[0]);
      }
    
    } catch (err) {
      console.error("Error uploading the file:", err);
    } finally {
      setIsLoading1(false); // Termina el estado de carga
      e.target.value = '';
    }
  };

  return (
    <div className="a-section-regular-2">
      {
        (isLoading1 || error) &&<Loading isLoading={isLoading1} message={message}setError={setError} error={error}  />
      }
        <ProjectPencil/>
      {JSON.stringify()}
      <div className="a-container-regular-2">
        <div className="w-layout-grid a-cta-grid">
          <div className="a-cta-grid-block">
            <div className="a-margin-bottom-35">
            </div>
            <div className="a-margin-bottom-34">
              <h6 className="a-h6-heading">Upload File</h6>
            </div>
            <div className="f-margin-bottom-24">
              <p className="f-paragraph-regular">
                Choose a file to upload and process.
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
                {isLoading1 ? <div className="spin"></div> : 'Select File'}
              </label>
            </div>
          </div>

          <div className="a-cta-grid-block">
            <div className="a-margin-bottom-35">
            </div>
            <div className="a-margin-bottom-34">
              <h6 className="a-h6-heading">Choose Template</h6>
            </div>

            <div className="f-margin-bottom-24">
              <p className="f-paragraph-regular">
                Choose a template to copy the format.
              </p>

            </div>
            <div className="w-file-upload">
              <button
                type="file"
                id="template"
                className="w-file-upload-input"
                // onChange={handleFileUpload}
                onClick={onOpenTemplateList}
              />
              <label htmlFor="template" className="w-file-upload-uploading-btn">
                <svg height="20" width="20" viewBox="0 0 24 24" fill="white">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 1l9.192 6.156c.24.153.437.34.588.556l3.02 5.22c1.564 2.703.364 6.254-2.68 7.962-1.206.677-2.6 1.015-4.04 1.015H6c-1.441 0-2.834-.338-4.04-1.015-3.044-1.708-4.244-5.259-2.68-7.962l3.02-5.22c.15-.216.347-.403.587-.556L12 1zm0 2.618L4.935 9.778a.53.53 0 00-.191.255L1.725 15.254c-.956 1.645-.12 3.703 1.856 4.604 1.053.48 2.261.724 3.419.724h11.999c1.158 0 2.366-.244 3.419-.724 1.976-.901 2.812-2.959 1.856-4.604l-3.019-5.221a.53.53 0 00-.192-.255L12 3.619zm1.451 9.103l-1.59 1.549-1.586-1.548c-.365-.357-.954-.353-1.316.01-.362.362-.366.951-.009 1.315l2.204 2.148c.18.176.416.265.652.265s.473-.089.653-.265l2.2-2.146c.358-.364.354-.953-.009-1.315-.362-.364-.951-.367-1.316-.011z" />
                </svg>


                {!props.selectedTemplate ? "Select Template" : "Switch to another Template"}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
