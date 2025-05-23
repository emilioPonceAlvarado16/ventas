import React, { useState } from "react";
import RegularSection from "@/components/RegularSection";
import PdfViewer from "@/components/PdfViewer";
import TextEditor from "@/components/TextEditor2";
import useFields from "@/hooks/useFields";
import SvgIcons from "@/components/svgIcons";
import Prompt from "@/components/Prompt";
import TemplateModal from "@/components/TemplateModal";
import { ChatProvider } from "@/contexts/ChatContext";
import Plagiarism from "@/components/Plagiarism";
import App from "@/components/App";
import { compileBlocksToPdf } from "@/services/CompileService";
import Loading from "@/components/Loading2";
import Footer from "@/components/Footer";
import Alerts from "@/components/alerts";

export default function Oli() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageSelected, setImageSelected] = useState({ url: "", id: "" });
  const [visualizePrompt, setVisualizePrompt] = useState({ isPromptOpen: false, isMinimized: false });
  const [showFieldType, setShowFieldType] = useState(true);
  const [showTemplates, setShowTemplates] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [alertInfo, setAlertInfo] = useState({ visible: false, message: "" });
  const [showPlagiarismModal, setShowPlagiarismModal] = useState(false);

  const [carouselPosition, setCarouselPosition] = useState(0);

  const [isCompiling, setIsCompiling] = useState(false);
  const [error, setError] = useState("");
  const [allText, setAllText] = useState(``);

  const [pdfUrl, setPdfUrl] = useState(null);

  const [isFullScreen, setIsFullScreen] = useState(false); //fullScreen
  const [showText, setShowText] = useState(false); // show text del editor de texto

  const [selectedText, setSelectedText] = useState("");

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((e) => {
        console.error(
          `Error attempting to enable full-screen mode: ${e.message} (${e.name})`
        );
      });
      setIsFullScreen(true);
    } else {
      document.exitFullscreen().catch((e) => {
        console.error(
          `Error attempting to disable full-screen mode: ${e.message} (${e.name})`
        );
      });
      setIsFullScreen(false);
    }
  };

  const compileAndRenderPdf = async () => {
    try {
      if (Fields.length === 0) {
        setAlertInfo({ visible: true, message: "No hay campos a compilar!" });
        return;
      } else {
        setAlertInfo({ visible: false, message: "" });
      }
      setIsCompiling(true);
      if (carouselPosition !== 1) {
        setCarouselPosition(1);
      }
      const newPdfUrl = await compileBlocksToPdf({
        fields: Fields,
        documentClass: selectedTemplate,
      });
      setPdfUrl(newPdfUrl);
    } catch (error) {
      setError(error);
      console.error("Error al compilar y renderizar PDF:", error);
    } finally {
      setIsCompiling(false); // Asegurarse de que isLoading se establece en false incluso si hay un error
    }
  };
  const handleAlertClose = () => {
    setAlertInfo({ ...alertInfo, visible: false });
  };
  const ClosePrompt = () => {
    setVisualizePrompt({...visualizePrompt, isPromptOpen:false})
  };
  const CloseTemplateList = () => {
    setShowTemplates(false);
  };
  const OpenTemplateList = () => {
    setShowTemplates(true);
  };
  const {
    fields: Fields,
    setFields,
    removeField,
    updateField,
    addField,
    currentFields,
    currentPage,
    itemsPerPage,
    paginate,
    foundedField,
    setFoundedField,
    textFoundedField,
    setTextFoundedField,
  } = useFields([]);

    // **Función para determinar el tipo de icono**
    const determineShowIconType = () => {
      if (Fields && Fields[0] === undefined) {
        return "eyeOffIcon";
      } else if (showFieldType) {
        return "eyeIcon";
      } else {
        return "eyeOffIcon";
      }
    };

  return (
    <div>
      {alertInfo.visible && (
        <Alerts
          type="warning"
          message={alertInfo.message}
          above={true}
          onClose={handleAlertClose} // Pasar handleAlertClose como prop
        />
      )}
      {(isCompiling || error) && (
        <Loading
          isLoading={isCompiling}
          message="compilando"
          setError={setError}
          error={error}
        />
      )}
      <div style={{ position: "relative" }}>
        <RegularSection
          onCloseTemplateList={CloseTemplateList}
          showTemplates={showTemplates}
          onOpenTemplateList={OpenTemplateList}
          visualizePrompt={visualizePrompt}
          onClose={ClosePrompt}
          setFields={setFields}
          Fields={Fields}
          selectedTemplate={selectedTemplate}
        />

        {/* Indicadores del carrusel */}
        <div
          style={{
            position: "absolute",
            bottom: 10,
            right: "49.6%",
            transform: "translateX(50%)",
            display: "flex",
            gap: "8px",
            alignItems: "center",
          }}
        >
          {[0, 1].map((index) => (
            <button
              key={index}
              onClick={() => setCarouselPosition(index)}
              style={{
                width: 30, // Más ancho
                height: 10, // Mantener el mismo alto
                borderRadius: 5, // Esquinas redondeadas, pero no completamente circulares
                backgroundColor:
                  carouselPosition === index ? "#F1F1F1" : "#555", // Gris claro para el activo, gris más oscuro para el inactivo
                cursor: "pointer",
                border: "1px solid #888", // Borde medio gris
                transition: "background-color 0.3s ease", // Transición suave al cambiar el color
              }}
            />
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          position: "relative",
        }}
      >
        <TextEditor
          textFoundedField={textFoundedField}
          setEditorObjects={setFields}
          setIsImageModalOpen={setIsImageModalOpen}
          isImageModalOpen={isImageModalOpen}
          allFields={Fields}
          editorObjects={currentFields}
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
          foundedField={foundedField}
          showTemplates={showTemplates}
          showText={showText}
          visualizePrompt={visualizePrompt}
          setVisualizePrompt={setVisualizePrompt}
          selectedText={selectedText} // para textviewer
          setSelectedText={setSelectedText}
        />
        {carouselPosition === 0 && (
          <div style={{ flex: 4, width: "50vw" }}>
            <App
              fields={Fields}
              setFields={setFields}
              addField={addField}
              allText={allText}
              setAllText={setAllText}
            />
          </div>
        )}
        {!isImageModalOpen && !showTemplates && (
          <>
            <div className="process_icon tooltip">
              <SvgIcons
                type="lightning"
                isCompiling={isCompiling}
                onClick={compileAndRenderPdf}
              />
              <span className="tooltip-text">Compile</span>
            </div>
            <div className=" process_icon process_icon-2  tooltip">
              <SvgIcons onClick={() => setVisualizePrompt({ isMinimized:false, isPromptOpen: !visualizePrompt.isPromptOpen})} type="keyboard" />
              <span className="tooltip-text">Prompt</span>
            </div>
            <div className="process_icon process_icon-3 tooltip">
              <SvgIcons
                onClick={() => setShowFieldType(!showFieldType)}
                type={determineShowIconType()}
                isTool={true}
                disabled={Fields && Fields[0] === undefined}
              />
              <span className="tooltip-text">Show</span>
            </div>
            <div className="process_icon process_icon-4 tooltip">
              <SvgIcons
                onClick={toggleFullScreen}
                type={isFullScreen ? "collapse" : "expand"}
              />
              <span className="tooltip-text">
                {isFullScreen ? "Collapse" : "Expand"}
              </span>
            </div>
            <div className="process_icon process_icon-5 tooltip">
              <SvgIcons onClick={() => setShowText(!showText)} type="text" />
              <span className="tooltip-text">Convertir a Texto</span>
            </div>
          </>
        )}
        {carouselPosition === 1 && (
            <div style={{ flex: 4, width: "50vw" }}>
              <div
                style={{
                  padding: "17px",
                  paddingBottom: "0px",
                  backgroundColor: "#f1f1f1",
                }}
              >
                <PdfViewer
                  url={pdfUrl}
                  setShowText={setShowText}
                  setFoundedField={setFoundedField}
                  setTextFoundedField={setTextFoundedField}
                />
              </div>
            </div>
        )}
      </div>

      <div>
        {/* <DynamicChatProvider> */}
        <ChatProvider>
          {visualizePrompt.isPromptOpen && (
            <Prompt
              selectedText={selectedText}
              setSelectedText={setSelectedText}
              onClose={ClosePrompt}
              visualizePrompt={visualizePrompt}
              setVisualizePrompt={setVisualizePrompt}
            />
          )}
          {/* </DynamicChatProvider> */}
        </ChatProvider>

        {(showTemplates || false) && (
          <TemplateModal
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
            onClose={CloseTemplateList}
          />
        )}
      </div>

      {showPlagiarismModal && (
        <Plagiarism onClose={() => setShowPlagiarismModal(false)} />
      )}

      <Footer />
    </div>
  );
}
