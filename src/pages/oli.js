import React, { useState } from 'react';
import RegularSection from '@/components/RegularSection';
import PdfViewer from '@/components/PdfViewer';
import TextEditor from '@/components/TextEditor2';
import useFields from '@/hooks/useFields';
import SvgIcons from '@/components/svgIcons';
import Prompt from '@/components/Prompt';
import TemplateModal from '@/components/TemplateModal';
import dynamic from 'next/dynamic';
import { ChatProvider } from '@/contexts/ChatContext';


export default function oli() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageSelected, setImageSelected] = useState("");
  const [isPromptOpen, setisPromptOpen] = useState(false);
  const [showFieldType, setshowFieldType] = useState(false);
  const [showTemplates, setshowTemplates] = useState(false)

  const [carouselPosition, setCarouselPosition] = useState(0);

  const ClosePrompt = () => {
    setisPromptOpen(false)
  }
  const CloseTemplateList = () => {
    setshowTemplates(false)
  }
  const OpenTemplateList = () => {
    setshowTemplates(true)
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

      {/* {JSON.stringify(Fields)} */}
      <RegularSection
        onCloseTemplateList={CloseTemplateList}
        showTemplates={showTemplates}
        onOpenTemplateList={OpenTemplateList}
        isPromptOpen={isPromptOpen} onClose={ClosePrompt}
        setFields={setFields} Fields={Fields} />
      <div style={{ display: 'flex', height: '100vh', width: '100vw', position: "relative" }}>
        {carouselPosition === 0 && (
          <>
            <TextEditor setEditorObjects={setFields}
              setIsImageModalOpen={setIsImageModalOpen}
              isImageModalOpen={isImageModalOpen}
              assetList={assetList}
              editorObjects={Fields}
              setImageSelected={setImageSelected}
              imageSelected={imageSelected}
              removeField={removeField}
              updateField={updateField}
              showFieldType={showFieldType}
            />
           <div
              style={{
                padding: '10px',
                overflowY: 'auto',
                flex: 1,
                overflowWrap: 'break-word',
                whiteSpace: 'pre-wrap',
                color: '#e5e5e5',
                fontSize: '16px',
                fontFamily: 'Arial, sans-serif'
              }}
            />
          </>
        )}
        {
          (!isImageModalOpen && !showTemplates) && (
            <>
              <div className='process_icon tooltip'>
                <SvgIcons type="lightning" />
                <span className="tooltip-text">Compilar</span>

              </div>
              <div className='process_icon-2 tooltip'>
                <SvgIcons onClick={() => setisPromptOpen(true)} type="keyboard" />
                <span className="tooltip-text">Prompt</span>
              </div>
              <div className='process_icon-3 tooltip'>
                <SvgIcons
                  onClick={() => setshowFieldType(!showFieldType)}
                  type={`${Fields && Fields[0] === undefined ? 'eyeOffIcon' : (showFieldType ? 'eyeIcon' : 'eyeOffIcon')}`}
                  isTool={true}
                  disabled={Fields && Fields[0] === undefined}
                />
                <span className="tooltip-text">Mostrar</span>
              </div>

            </>
          )
        }
        {carouselPosition === 1 && (
          <>
            <TextEditor setEditorObjects={setFields}
              setIsImageModalOpen={setIsImageModalOpen}
              isImageModalOpen={isImageModalOpen}
              assetList={assetList}
              editorObjects={Fields}
              setImageSelected={setImageSelected}
              imageSelected={imageSelected}
              removeField={removeField}
              updateField={updateField}
              showFieldType={showFieldType}
            />

            <div style={{ flex: 4, width: '50vw' }}>
              <div style={{ padding: '17px', paddingBottom: "0px", backgroundColor: '#f1f1f1' }}>
                {/* <PdfViewer url="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf" /> */}
                <PdfViewer url="./nuevo.pdf" />
                hola
              </div>
            </div>
          </>
        )}

      </div>

      {/* 3. Establecer puntos (o indicadores) que permitan a los usuarios cambiar la posición del carrusel */}
      <div style={{ position: "absolute", top: 10, right: "50%", transform: "translateX(50%)", display: "flex", gap: "8px" }}>
        {[0, 1].map(index => (
          <div
            key={index}
            onClick={() => setCarouselPosition(index)}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: carouselPosition === index ? "black" : "gray",
              cursor: "pointer"
            }}
          />
        ))}
      </div>
      <div >
        {/* <DynamicChatProvider> */}
        <ChatProvider>

          {isPromptOpen && <Prompt onClose={ClosePrompt} />}
          {/* </DynamicChatProvider> */}
        </ChatProvider>

        {(showTemplates || false) && <TemplateModal onClose={CloseTemplateList} />}

      </div>
    </div>
  );
}
