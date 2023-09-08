
import React from 'react';
import FileUploadSection from '../components/FileUploadSection';
import MyBlueComponent from '@/components/MyBlueComponent';
import RegularSection from '@/components/RegularSection';
import PdfViewer from '@/components/PdfViewer';
import TextEditor from '@/components/TextEditor';

export default function oli() {
  return (
    <div>
      <RegularSection />
      <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
          <TextEditor/>
        <div style={{ flex: 4, width: '80%' }}>
        <PdfViewer url="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf" />
        {/* <PdfViewer url="../../../pythonapi/labs.pdf" /> */}
        </div>
    </div>
    </div>
  );
}
