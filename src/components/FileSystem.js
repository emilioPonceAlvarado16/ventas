// src/componentes/FileSystem.js

import React, { useState, useEffect } from "react";
import SvgIcons from "./svgIcons";

// Inicialización de carpetas
const initialFolders = [
  {
    value: "Images",
    icon: "fa-envelope-open",
    type: "folder",
    children: [],
  },
];

// Componente Folder mejorado para accesibilidad y cumplimiento de buenas prácticas
function Folder({ data, level = 0, setIsImageModalOpen, setImageSelected }) {
  const [isOpen, setIsOpen] = useState(true);
  const indentation = 16; // Aumentado para mejor visibilidad
  const style = {
    paddingLeft: `${level * indentation}px`
  };

  // Función para manejar el clic en el botón de carpeta
  const handleFolderClick = () => {
    if (data.type === "folder") {
      setIsOpen(!isOpen);
    } else if (data.onClick) {
      data.onClick();
    }
  };

  return (
    <li key={data.value} className="treeview-animated-items" style={style}>
      {/* Reemplazo de <a> por <button> */}
      <button
        onClick={handleFolderClick}
        className={isOpen ? "open" : "closed"}
        style={{
          display: "flex",
          alignItems: "center",
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          font: "inherit",
          color: "inherit",
        }}
        aria-expanded={isOpen}
      >
        {/* Icono de carpeta o imagen */}
        {data.type === "folder" && <SvgIcons type={isOpen ? "angleRight" : "angleLeft"} />}
        {data.type === "im" && <SvgIcons type="image" />}
        <span style={{ marginLeft: "5px" }}>
          <i className={`fa ${data.icon} ic-w mx-1`} aria-hidden="true"></i>
          {data.value}
        </span>
      </button>
      {/* Renderizado de hijos si la carpeta está abierta */}
      {isOpen && data.children && data.children.length > 0 && (
        <ul className="nested">
          {data.children.map((child) => (
            <Folder
              key={child.value}
              data={child}
              level={level + 1}
              setIsImageModalOpen={setIsImageModalOpen}
              setImageSelected={setImageSelected}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

// Componente principal FileSystem corregido
export default function FileSystem({
  isCollapsed,
  fields,
  setIsCollapsed,
  isImageModalOpen,
  setImageSelected,
  setIsImageModalOpen, // Eliminada la duplicación
}) {
  const [folders, setFolders] = useState(initialFolders);

  // Función para mostrar la imagen seleccionada
  const handleShowImage = (item) => {
    setIsImageModalOpen(true);
    setImageSelected(item);
  };

  useEffect(() => {
    // Filtra los fields por el tipo "im" para trabajarlos como activos de imágenes
    const imageFields = fields
      .filter(field => field.type === "im")
      .map(item => ({
        ...item,
        onClick: () => handleShowImage(item),
      }));

    // Actualiza el folder "Images" para incluir las imágenes filtradas
    const updatedFolders = folders.map(folder => {
      if (folder.value === "Images") {
        return {
          ...folder,
          children: imageFields,
        };
      }
      return folder;
    });

    setFolders(updatedFolders);
  }, [fields, folders]); // Añadido 'folders' a las dependencias para evitar advertencias

  return (
    <div className={`treeview-animated ${isCollapsed ? 'collapsed' : ''}`}>
      {/* Botón de colapso mejorado */}
      <button
        className="collapse-btn"
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-label={isCollapsed ? "Expandir árbol de archivos" : "Colapsar árbol de archivos"}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "5px",
        }}
      >
        <SvgIcons type="angleLeft" />
      </button>
      <h6 className="pt-3 pl-3" style={{ fontWeight: "bold" }}>/Root</h6>
      <ul className="treeview-animated-list mb-3">
        {folders.map((folder) => (
          <Folder
            key={folder.value}
            data={folder}
            setIsImageModalOpen={setIsImageModalOpen}
            setImageSelected={setImageSelected}
          />
        ))}
      </ul>
    </div>
  );
}
