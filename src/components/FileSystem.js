import React, { useState, useEffect } from "react";
import SvgIcons from "./svgIcons";
// import Modal from "./Modal";

const initialFolders = [
  {
    name: "Images",
    icon: "fa-envelope-open",
    type: "folder",
    children: [],
  },
];

function Folder({ data, level = 0,  setImageSelected}) {
  const [isOpen, setIsOpen] = useState(true);
  const indentation = 9;
  const style = {
    paddingLeft: `${level * indentation}px`
  };

  return (
    <li key={data.value} onClick={data.onClick} className="treeview-animated-items" style={style}>
      <a onClick={() => setIsOpen(!isOpen)} className={isOpen ? "open" : "closed"}>
      {/* <a onClick={()=>{data.type=="image"? setIsImageModalOpen(true) : setIsOpen(!isOpen)}} className={isOpen ? "open" : "closed"}> */}
        {data.type=="folder" ?  <SvgIcons type={isOpen ? "angleRight" : "angleLeft"} />: null}
        {data.type === "image" ? <SvgIcons type="image" /> : null}
        <span >
          {/* <i className={`fa ${data.icon} ic-w mx-1`} onClick={data.onClick}></i> */}
          <i className={`fa ${data.icon} ic-w mx-1`} ></i>
          {data.name}

        </span>
      </a>
      {isOpen && data.children && (
        <ul className="nested">
          {data.children.map((child) => (
            <>
            <Folder key={child.value} data={child} level={level + 1} />
            </>
            ))}

        </ul>
      )}

    </li>
  );
}
export default function FileSystem({ isCollapsed, setIsCollapsed, assetList ,isImageModalOpen,setImageSelected,setIsImageModalOpen}) {
  const [folders, setFolders] = useState(initialFolders);
  const handleShowImage = (url) => {
    setIsImageModalOpen(true);
    setImageSelected(url);
  }
  useEffect(() => {
    if (!assetList) {
      return;
    }
    // Suponemos que assetList contiene los hijos que deben ir en la carpeta "Assets"
    // Convertir el assetList para que coincida con la estructura del estado
    const updatedassetList = assetList.map(item => ({
      name: item.name,
      type: item.type,  // Este es un ejemplo, ajusta según lo necesario
      icon: item.name.endsWith('.png') ? 'fa-file' : 'fa-folder',
      onClick:()=>{item.type=="image"? handleShowImage(item.url) : null},
      url:item.url,
      children: []
    }));

    // Buscar la carpeta "Assets" y actualizar sus hijos
    const updatedFolders = folders.map(folder => {
      if (folder.name === "Images") {
        return {
          ...folder,
          children: updatedassetList
        };
      }
      return folder;
    });

    setFolders(updatedFolders);
  }, [assetList]);  // Se ejecuta cada vez que assetList cambia
  return (
    <div className={`treeview-animated ${isCollapsed ? 'collapsed' : ''}`}>
      <button
        className="collapse-btn"
        onClick={() => {
          console.log("Button clicked!");
          setIsCollapsed(!isCollapsed);
        }}>
        <SvgIcons type="angleLeft" />
      </button>
        
      <h6 className="pt-3 pl-3" style={{ fontWeight: "bold" }}>/Root</h6>
      <ul className="treeview-animated-list mb-3">
        {folders.map((folder) => (
          <Folder  key={folder.name} data={folder} setIsImageModalOpen={setIsImageModalOpen} isImageModalOpen={isImageModalOpen} />
        ))}
      </ul>

      {/* {isImageModalOpen && (
        <Modal
          title="Image Preview"
          details={selectedImageName}
          imageUrl="./images/image1.png"
        />
      )} */}
    </div>
  );
}
