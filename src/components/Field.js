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
  const setAllText=props.setAllText || null
  const allText=props.allText || ""

  const setIsImageModalOpen = props.setIsImageModalOpen;

  const [newValue, setNewValue] = useState(value);


  const deleteField=()=>{
    removeField(index);
    setAllText(allText + '\n\n' + value)
  }

  const handleSelectChange = (event) => {
    const newType = event.target.value;

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

    const range = document.createRange();
    const sel = window.getSelection();

    const cursorPosition = sel.anchorOffset;

    if (pRef.current) {
      let nodeToSet = pRef.current;
      let positionToSet = cursorPosition;

      if (pRef.current.childNodes[0]) {
        nodeToSet = pRef.current.childNodes[0];

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
    sb:"orange",
    li:"royalblue"
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
        <SvgIcons onClick={deleteField} type="trash" />
      {type!=="im" && props.showFieldType  &&
       <>
       <select 
            value={type} 
            onChange={handleSelectChange} 
            style={{ 
              marginLeft: '5px', 
              backgroundColor: '#2c2c2c',
              color: typeColors[type] || 'white', 
              borderColor: '#2c2c2c',
              borderBottom: ".1px solid white",
              fontSize:"15px"
            }}
            >
            <option value="ti" style={{ color: typeColors['ti'] }}>Title</option>
            <option value="sb" style={{ color: typeColors['sb'] }}>Subtitle</option>
            <option value="pa" style={{ color: typeColors['pa'] }}>Paragraph</option>
            <option value="li" style={{ color: typeColors['li'] }}>Literal</option>
            <option value="un" style={{ color: typeColors['un'] }}>Unknown</option>
        </select>
        <SvgIcons type="settings"/>
        </> 
        
        }

    </div>

</div>

  );
});

export default Field;
