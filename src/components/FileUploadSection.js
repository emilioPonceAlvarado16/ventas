
import React from 'react';

const FileUploadSection = () => {
  return (
    <div className="blue-container">
      <div className="w-row">
        <div className="w-col w-col-5 upload-col">
          <h2 className="upload-heading">Sube tu archivo</h2>
          <div className="w-file-upload upload-icon-container">
            <label htmlFor="pdf-docx-file" className="w-file-upload-label">
              <i className="material-icons w-icon-file-upload-icon">cloud_upload</i>
            </label>
            <input id="pdf-docx-file" className="w-file-upload-input" type="file" accept=".pdf, .docx" />
          </div>
        </div>
        <div className="w-col w-col-1 separator">
        <svg className="shining-line" viewBox="0 0 100 100">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path
              d="M50 0 L50 100"
              stroke="white"
              strokeWidth="2"
              fill="transparent"
              filter="url(#glow)"
            />
          </svg>
        </div>
        <div className="w-col w-col-5 upload-col">
          <h2 className="upload-heading">Subir template</h2>
          <div className="w-file-upload upload-icon-container">
            <label htmlFor="template-file" className="w-file-upload-label">
              <i className="material-icons w-icon-file-upload-icon">cloud_upload</i>
            </label>
            <input id="template-file" className="w-file-upload-input" type="file" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploadSection;
