import React, { useState } from 'react';
import RegularSection from '@/components/RegularSection';
import PdfViewer from '@/components/PdfViewer';
import TextEditor from '@/components/TextEditor2';
import useFields from '@/hooks/useFields';
import SvgIcons from '@/components/svgIcons';
import Prompt from '@/components/Prompt';
import TemplateModal from '@/components/TemplateModal';
import { ChatProvider } from '@/contexts/ChatContext';
import Plagiarism from '@/components/Plagiarism';
import App from '@/components/App'
import { compileBlocksToPdf } from '@/services/CompileService';
import Loading from '@/components/Loading2';

export default function oli() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageSelected, setImageSelected] = useState("");
  const [isPromptOpen, setisPromptOpen] = useState(false);
  const [showFieldType, setshowFieldType] = useState(true);
  const [showTemplates, setshowTemplates] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  
  const [showPlagiarismModal, setShowPlagiarismModal] = useState(false)
  
  const [carouselPosition, setCarouselPosition] = useState(0);

  const [isCompiling, setisCompiling] = useState(false)
  const [error, setError] = useState("")
  const [allText, setAllText] = useState(``);
  
  const [pdfUrl, setPdfUrl] = useState(null);
  
  const [isFullScreen, setIsFullScreen] = useState(false);//fullScreen
  
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch((e) => {
            console.error(`Error attempting to enable full-screen mode: ${e.message} (${e.name})`);
        });
        setIsFullScreen(true);
    } else {
        document.exitFullscreen().catch((e) => {
            console.error(`Error attempting to disable full-screen mode: ${e.message} (${e.name})`);
        });
        setIsFullScreen(false);
    }

};

  const compileAndRenderPdf = async () => {
    try {
    
      setisCompiling(true);
      if (carouselPosition !== 1) { setCarouselPosition(1) }
      const newPdfUrl = await compileBlocksToPdf(Fields);  // Suponiendo que Fields son los bloques que necesitas compilar
      setPdfUrl(newPdfUrl);
    } catch (error) {
      setError(error);
      console.error("Error al compilar y renderizar PDF:", error);
    }
    finally {
      setisCompiling(false);  // Asegurarse de que isLoading se establece en false incluso si hay un error
    }
  };
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
    addField,


    currentFields,
    currentPage,
    itemsPerPage,
    paginate,
    changeItemsPerPage,
  } = useFields([]);

  return (

    <div>
     {(isCompiling|| error) &&<Loading isLoading={isCompiling} message="compilando" setError={setError} error={error}/>}
      <div style={{ position: 'relative' }}>

        {/* {JSON.stringify(Fields)} */}
        <RegularSection
          onCloseTemplateList={CloseTemplateList}
          showTemplates={showTemplates}
          onOpenTemplateList={OpenTemplateList}
          isPromptOpen={isPromptOpen} onClose={ClosePrompt}
          setFields={setFields} Fields={Fields}
          selectedTemplate={selectedTemplate}
        />

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

          setAllText={setAllText}
          allText={allText}
         
          totalItems={Fields.length}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          paginate={paginate}
        />
        {carouselPosition === 0 && (


          <div style={{ flex: 4, width: '50vw' }}>
            <App fields={Fields} setFields={setFields} addField={addField}
              allText={allText} setAllText={setAllText}
            />
          </div>
        )}
        {
          (!isImageModalOpen && !showTemplates) && (
            <>
              <div className='process_icon tooltip'>
                <SvgIcons type="lightning" isCompiling={isCompiling} onClick={compileAndRenderPdf} />
                <span className="tooltip-text">Compile</span>
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
                <span className="tooltip-text">Show</span>
              </div>
              <div className='process_icon-4 tooltip'>
                {/* <SvgIcons onClick={() => setShowPlagiarismModal(true)} type="plagiarism" /> */}
                <SvgIcons onClick={toggleFullScreen} type={isFullScreen ? 'collapse' : 'expand'} />
                <span className="tooltip-text">{isFullScreen ? 'Collapse' : 'Expand'}</span>
              </div>
            </>

          )
        }
        {carouselPosition === 1 && (
          <>


            <div style={{ flex: 4, width: '50vw' }}>
              <div style={{ padding: '17px', paddingBottom: "0px", backgroundColor: '#f1f1f1' }}>
                <PdfViewer url={pdfUrl} />

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

        {(showTemplates || false) && <TemplateModal selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} onClose={CloseTemplateList} />}

      </div>

      {showPlagiarismModal && <Plagiarism onClose={() => setShowPlagiarismModal(false)} />}

    </div>
  );
}
