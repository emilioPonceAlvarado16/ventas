import React, { useState } from "react";

const Field = React.forwardRef((props, ref) => {
  const type = props.type;
  const value = props.value;
  const size = props.size;
  const deleteField = props.deleteField;
  const index = props.index;
  const setImageSelected = props.setImageSelected
  const url = props.url || ""

  const setIsImageModalOpen = props.setIsImageModalOpen;

  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(value);


  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleClick = () => setIsEditing(true);

  const sharedStyle = {
    width: "100%",
    backgroundColor: isEditing ? "#555" : "transparent",
    border: isEditing ? "1px solid #999" : "none",
    color: "white",
    overflow: "auto",
    minHeight: size || "10vh",
  };
  const handleShowImage = () => {
    setIsImageModalOpen(true);
    setImageSelected(url);
  }

  return (
    <div
      ref={ref}
      {...props}
    >
      <p
        contentEditable={true}
        suppressContentEditableWarning={true}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ 
          backgroundColor: isHovered ? '#444' : 'transparent',
          cursor: 'pointer',
          minHeight:size || "10vh"
          
        }}
        // value={newValue}
        onClick={() => { type === "im" ? handleShowImage() : null }}
     
     
     >
        {newValue}
      </p>
      <button
        className="button is-small is-danger"
        onClick={(event) => deleteField(
          index, event
        )}
      >
        x
      </button>
    </div>

  );
});

export default Field;
