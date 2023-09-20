import React, { useState } from "react";
import SvgIcons from "./svgIcons";


const Field = React.forwardRef((props, ref) => {

  const type = props.type;
  const removeField = props.removeField;
  const value = props.value;
  const size = props.size;
  const index = props.index;
  const setImageSelected = props.setImageSelected
  const url = props.url || ""
  const updateField = props.updateField || null

  const setIsImageModalOpen = props.setIsImageModalOpen;

  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(value);


  const handleClick = () => setIsEditing(true);

  const sharedStyle = {
    width: "100%",
    backgroundColor: isEditing ? "#555" : "transparent",
    border: isEditing ? "1px solid #999" : "none",
    color: "white",
    overflow: "auto",
    minHeight: size || "10vh",
  };
  const handleSelectChange = (event) => {
    const newType = event.target.value;

    // Aquí puedes usar la función updateField para actualizar el tipo
    if (updateField) {
      updateField(index, { type: newType });
    }
  };
  const handleShowImage = () => {
    setIsImageModalOpen(true);
    setImageSelected(url);
  }
  const pRef = React.useRef(null); // Añadir un ref para el elemento <p>

  const handleChange = (event) => {
    const newText = event.target.innerText;

    if (updateField) {
      updateField(index, { "value": newText });
    }

    // Mantener el cursor en su posición original
    const range = document.createRange();
    const sel = window.getSelection();

    // Calcular la nueva posición del cursor
    const cursorPosition = sel.anchorOffset;

    if (pRef.current) {
      let nodeToSet = pRef.current;
      let positionToSet = cursorPosition;

      // Si hay un nodo hijo, actualizar el nodo y la posición
      if (pRef.current.childNodes[0]) {
        nodeToSet = pRef.current.childNodes[0];

        // Asegurarse de que la posición del cursor es válida
        positionToSet = Math.min(cursorPosition, nodeToSet.length);
      }

      range.setStart(nodeToSet, positionToSet);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  };
  const typeColors = {
    ti: 'orchid',
    un: 'royalblue',
    pa: 'mediumseagreen',
    im: 'darkorange',
  };
  

  return (
    <div
      ref={ref}
      {...props}

      className="field"
    >
      <p
        ref={pRef}

        contentEditable={type === "im" ? false : true}
        suppressContentEditableWarning={true}

        onInput={handleChange}
        style={{
          cursor: 'pointer',
          minHeight: size || "3vh"

        }}
        // value={newValue}
        onClick={() => { type === "im" ? handleShowImage() : null }}
      >
        {newValue}
      </p>
      {/* <div style={{ width: "1.7vw" }}> */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <SvgIcons onClick={() => removeField(index)} type="trash" />
      {type!=="im" && props.showFieldType  &&  <select 
            value={type} 
            onChange={handleSelectChange} 
            style={{ 
                marginLeft: '5px', 
                backgroundColor: '#2c2c2c',
                color: typeColors[type] || 'white', // establece el color basado en el tipo seleccionado
                borderColor: '#2c2c2c',
                borderBottom: ".1px solid white",
                fontSize:"15px"
            }}
        >
            <option value="ti" style={{ color: typeColors['ti'] }}>Title</option>
            <option value="un" style={{ color: typeColors['un'] }}>Unknown</option>
            <option value="pa" style={{ color: typeColors['pa'] }}>Paragraph</option>
        </select>}
    </div>

    </div>

  );
});

export default Field;
