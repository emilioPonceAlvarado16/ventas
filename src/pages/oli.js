import React, { useState } from 'react';
import RegularSection from '@/components/RegularSection';
import PdfViewer from '@/components/PdfViewer';
import TextEditor from '@/components/TextEditor2';
import useFields from '@/hooks/useFields';
import SvgIcons from '@/components/svgIcons';
import Prompt from '@/components/Prompt';


export default function oli() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageSelected, setImageSelected] = useState("");
  const [isPromptOpen, setisPromptOpen] = useState(false)
  const ClosePrompt=()=>{
    setisPromptOpen(false)
  }
  const {
    fields: Fields,
    setFields,
    removeField,
    updateField,
    assetList,
  } = useFields([]);

  return (
      
    <div>
      <RegularSection 
      isPromptOpen={isPromptOpen} onClose={ClosePrompt}
      setFields={setFields} Fields={Fields} />
      <div style={{ display: 'flex', height: '100vh', width: '100vw', position: "relative" }}>
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
        {
          !isImageModalOpen && (
            <>
              <div className='process_icon tooltip'>
                <SvgIcons type="lightning" />
                <span className="tooltip-text">Compilar</span>

              </div>
              <div className='process_icon-2 tooltip'>
                <SvgIcons onClick={()=>setisPromptOpen(true)} type="keyboard" />
                <span className="tooltip-text">Prompt</span>
              </div>
            </>
          )
        }
        <div style={{ flex: 4, width: '50vw' }}>
          <div style={{ padding: '17px', paddingBottom: "0px", backgroundColor: '#f1f1f1' }}>
            {/* <PdfViewer url="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf" /> */}
            <PdfViewer url="./nuevo.pdf" />
          </div>
        </div>

      </div>
      <div >
      { isPromptOpen && <Prompt onClose={ClosePrompt} />}
        
        </div>
    </div>
      );
}
