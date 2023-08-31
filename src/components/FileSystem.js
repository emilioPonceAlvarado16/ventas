import React, { useState } from "react";
import SvgIcons from "./svgIcons";

const initialFolders = [
  {
    name: "Mail",
    icon: "fa-envelope-open",
    children: [
      {
        name: "Offers",
        icon: "fa-bell",
      },
      {
        name: "Contacts",
        icon: "fa-address-book",
      },
      {
        name: "Calendar",
        icon: "fa-calendar-alt",
        children: [
          {
            name: "Deadlines",
            icon: "fa-clock",
          },
          {
            name: "Meetings",
            icon: "fa-users",
          },
        ],
      },
    ],
  },
];

function Folder({ data, level = 0 }) {  
  const [isOpen, setIsOpen] = useState(false);
  const indentation = 20;  
  const style = {
    paddingLeft: `${level * indentation}px`
  };

  return (
    <li className="treeview-animated-items" style={style}> 
      <a onClick={() => setIsOpen(!isOpen)} className={isOpen ? "open" : "closed"}>
        <SvgIcons type={isOpen ? "angleRight" : "angleLeft"} />
        <span>
          <i className={`fa ${data.icon} ic-w mx-1`}></i>
          {data.name}
        </span>
      </a>
      {isOpen && data.children && (
        <ul className="nested">
          {data.children.map((child) => (
            <Folder key={child.name} data={child} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}
export default function FileSystem({ isCollapsed, setIsCollapsed }) {
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
          
          <h6 className="pt-3 pl-3">Folders</h6>
          <ul className="treeview-animated-list mb-3">
              {initialFolders.map((folder) => (
                  <Folder key={folder.name} data={folder} />
              ))}
          </ul>
      </div>
  );
}
