import React, {  useState } from 'react';
import RegularSection from '@/components/RegularSection';
import PdfViewer from '@/components/PdfViewer';
// import TextEditor from '@/components/TextEditor';
import TextEditor from '@/components/TextEditor2';
// import TextEditor2 from '@/components/TextEditor2';

export default function oli() {

  const [Fields, setFields] = useState([])
  const [assetList, setassetList] = useState([])
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageSelected, setImageSelected] = useState({});

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <RegularSection setFields={setFields} Fields={Fields} setassetList={setassetList}/>
      <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
          <TextEditor setEditorObjects={setFields} setIsImageModalOpen={setIsImageModalOpen} isImageModalOpen={isImageModalOpen}  assetList={assetList} editorObjects={Fields}/>
        <div style={{ flex: 4, width: '80%' }}>
          {/* {

            Fields.length? <PdfViewer url="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf" />:<></>

          } */}
        <PdfViewer url="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf" />
        </div>
    </div>
    </div>
  );
}
