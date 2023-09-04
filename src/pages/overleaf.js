import React from 'react'
import TextEditor from "../components/TextEditor"
import PdfViewer from '@/components/PdfViewer'
export default function overleaf() {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
          <TextEditor/>
        <div style={{ flex: 4, width: '80%' }}>
        <PdfViewer url="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf" />
        </div>
    </div>
)
}

