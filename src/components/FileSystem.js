import React, { useState, useEffect } from "react";
import SvgIcons from "./svgIcons";

const initialFolders = [
  {
    value: "Images",
    icon: "fa-envelope-open",
    type: "folder",
    children: [],
  },
];

function Folder({ data, level = 0, setIsImageModalOpen, setImageSelected }) {
  const [isOpen, setIsOpen] = useState(true);
  const indentation = 9;
  const style = {
    paddingLeft: `${level * indentation}px`
  };

  return (
    <li key={data.value} onClick={data.onClick} className="treeview-animated-items" style={style}>
      <a onClick={() => data.type === "folder" ? setIsOpen(!isOpen) : null} className={isOpen ? "open" : "closed"}>
        {data.type === "folder" && <SvgIcons type={isOpen ? "angleRight" : "angleLeft"} />}
        {data.type === "im" && <SvgIcons type="image" />}
        <span>
          <i className={`fa ${data.icon} ic-w mx-1`}></i>
          {data.value}
          {/* {JSON.stringify(data)} */}
        </span>
      </a>
      {isOpen && data.children && (
        <ul className="nested">
          {data.children.map((child) => (
            <Folder  data={child} level={level + 1} setIsImageModalOpen={setIsImageModalOpen} setImageSelected={setImageSelected} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function FileSystem({ isCollapsed, imageSelected , setIsCollapsed, assetList, isImageModalOpen, setImageSelected, setIsImageModalOpen }) {
  const [folders, setFolders] = useState(initialFolders);
  const handleShowImage = (item) => {
    setIsImageModalOpen(true);
    setImageSelected(item);
  }

  useEffect(() => {
    if (!assetList) {
      return;
    }
    const updatedassetList = assetList.map(item => ({
      type: item.type,
      value:item.value,
      icon: item.value.endsWith('.png') ? 'fa-file' : 'fa-folder',
      onClick: () => item.type === "im" ? handleShowImage(item) : null,
      url: item.url,
      children: []
    }));

    const updatedFolders = folders.map(folder => {
      if (folder.value === "Images") {
        return {
          ...folder,
          children: updatedassetList
        };
      }
      return folder;
    });

    setFolders(updatedFolders);
  }, [assetList]);

  return (
    <div className={`treeview-animated ${isCollapsed ? 'collapsed' : ''}`}>
      {JSON.stringify(imageSelected)}
      <button
        className="collapse-btn"
        onClick={() => setIsCollapsed(!isCollapsed)}>
        <SvgIcons type="angleLeft" />
      </button>
      <h6 className="pt-3 pl-3" style={{ fontWeight: "bold" }}>/Root</h6>
      <ul className="treeview-animated-list mb-3">
        {folders.map((folder) => (
          <Folder key={folder.value} data={folder} setIsImageModalOpen={setIsImageModalOpen} setImageSelected={setImageSelected} />
        ))}
      </ul>
    </div>
  );
}
