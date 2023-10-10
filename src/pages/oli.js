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
import Plagiarism from '@/components/Plagiarism';


export default function oli() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageSelected, setImageSelected] = useState("");
  const [isPromptOpen, setisPromptOpen] = useState(false);
  const [showFieldType, setshowFieldType] = useState(false);
  const [showTemplates, setshowTemplates] = useState(false);

  const [showPlagiarismModal, setShowPlagiarismModal] = useState(false)

  const [carouselPosition, setCarouselPosition] = useState(1);

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
      <div style={{ position: 'relative' }}>

        {/* {JSON.stringify(Fields)} */}
        <RegularSection
          onCloseTemplateList={CloseTemplateList}
          showTemplates={showTemplates}
          onOpenTemplateList={OpenTemplateList}
          isPromptOpen={isPromptOpen} onClose={ClosePrompt}
          setFields={setFields} Fields={Fields} />

  {/* Indicadores del carrusel */}
  <div style={{ position: "absolute", bottom: 10, right: "49.6%", transform: "translateX(50%)", display: "flex", gap: "8px", alignItems: "center" }}>
      {[0, 1].map(index => (
        <div
          key={index}
          onClick={() => setCarouselPosition(index)}
          style={{
            width: 30, // Más ancho
            height: 10, // Mantener el mismo alto
            borderRadius: 5, // Esquinas redondeadas, pero no completamente circulares
            backgroundColor: carouselPosition === index ? "#F1F1F1" : "#555", // Gris claro para el activo, gris más oscuro para el inactivo
            cursor: "pointer",
            border: "1px solid #888", // Borde medio gris
            transition: "background-color 0.3s ease" // Transición suave al cambiar el color
          }}
        />
      ))}
    </div>

      </div>
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
          showFieldType={showFieldType}
        />
        {carouselPosition === 0 && (
          <div
            style={{
              padding: '10px',
              overflowY: 'auto',
              flex: 1,
              overflowWrap: 'break-word',
              whiteSpace: 'pre-wrap',
              color: '#e5e5e5',
              fontSize: '16px',
              fontFamily: 'Arial, sans-serif',
              background: '#2c2c2c',
              borderLeft: "1px solid white"
            }}
          />
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

              <div className='process_icon-4 tooltip'>
                <SvgIcons onClick={()=>setShowPlagiarismModal(true)} type="plagiarism" />
                <span className="tooltip-text">Plagio</span>

              </div>

            </>
          )
        }
        {carouselPosition === 1 && (
          <>


            <div style={{ flex: 4, width: '50vw' }}>
              <div style={{ padding: '17px', paddingBottom: "0px", backgroundColor: '#f1f1f1' }}>
                {/* <PdfViewer url="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf" /> */}
                <PdfViewer url="./nuevo.pdf" />

              </div>
            </div>
          </>
        )}


      </div>


      <div >
        {/* <DynamicChatProvider> */}
        <ChatProvider>

          {isPromptOpen && <Prompt onClose={ClosePrompt} />}
          {/* </DynamicChatProvider> */}
        </ChatProvider>

        {(showTemplates || false) && <TemplateModal onClose={CloseTemplateList} />}

      </div>

      {showPlagiarismModal && <Plagiarism onClose={()=>setShowPlagiarismModal(false)}/>}

    </div>
  );
}
