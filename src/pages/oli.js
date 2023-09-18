import React, { useState } from 'react';
import RegularSection from '@/components/RegularSection';
import PdfViewer from '@/components/PdfViewer';
import TextEditor from '@/components/TextEditor2';
import useFields from '@/hooks/useFields';
import SvgIcons from '@/components/svgIcons';

export default function oli() {
  const [assetList, setassetList] = useState([]);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageSelected, setImageSelected] = useState("");

  const {
    fields: Fields,
    setFields,
    removeField,
    updateField
  } = useFields([]);

  return (
    <div>
      {JSON.stringify(Fields)}
      <SvgIcons type="lightning"/>
      <RegularSection setFields={setFields} Fields={Fields} setassetList={setassetList} />
      <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
        <TextEditor setEditorObjects={setFields}
          setIsImageModalOpen={setIsImageModalOpen}
          isImageModalOpen={isImageModalOpen}
          assetList={assetList}
          editorObjects={Fields}
          setImageSelected={setImageSelected}
          imageSelected={imageSelected}
          removeField={removeField}
          updateField={updateField}
        />
        <div style={{ flex: 4, width: '80%' }}>
          <div style={{ padding: '17px', backgroundColor: '#f1f1f1' }}>
            <PdfViewer url="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf" />
          </div>
        </div>
      </div>
    </div>
  );
}
