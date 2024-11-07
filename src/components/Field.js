import React, { useState, useEffect } from "react";
import SvgIcons from "./svgIcons";


const Field = React.forwardRef((props, ref) => {

  const {
    type,
    removeField,
    value,
    size,
    index,
    setImageSelected,
    updateField = null,
    setAllText = null,
    allText = "",
    imageObj = {},
    setIsImageModalOpen,
    showFieldType,
    id,
    shouldHighlight
  } = props;

  const [isHighlighted, setIsHighlighted] = useState(shouldHighlight);
  useEffect(() => {
    setIsHighlighted(shouldHighlight);

    if (shouldHighlight) {
      const timer = setTimeout(() => {
        setIsHighlighted(false);
      }, 3000); // Resalta durante 3 segundos, ajusta según sea necesario
      return () => clearTimeout(timer);
    }
  }, [shouldHighlight]); // Añadir shouldHighlight a las dependencias

  const deleteField = () => {
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
    setImageSelected(imageObj);
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

  const typeColors2 = {
    abstract: 'orchid',
    abstract_keywords: 'royalblue',
    authors: 'mediumseagreen',
    bibliografia: 'darkorange',
    detalle: 'orange',
    ecuacion: 'royalblue',
    enumeracion: 'lightcoral',
    image_title: 'mediumpurple',
    parrafo: 'goldenrod',
    programacion: 'lightskyblue',
    subseccion: 'palevioletred',
    text: 'olivedrab',
    titulo: 'sandybrown',
    im: 'steelblue' // Nueva etiqueta y color añadidos
  };



  return (
    <div
      ref={ref}
      {...props}

      className="field"
      style={isHighlighted ? { backgroundColor: 'rgba(255, 193, 7, 0.5)' } : null}
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
        // value={value}
        onClick={() => { type === "im" ? handleShowImage() : null }}
      >
        {value}
      </p>
      {/* <div style={{ width: "1.7vw" }}> */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <SvgIcons onClick={deleteField} type="trash" />
        {type !== "im" && showFieldType &&
          <>
            <select
              value={type}
              onChange={handleSelectChange}
              style={{
                marginLeft: '5px',
                backgroundColor: '#2c2c2c',
                color: typeColors2[type] || 'white',
                borderColor: '#2c2c2c',
                borderBottom: ".1px solid white",
                fontSize: "15px"
              }}
            >
              {Object.entries(typeColors2)
                .filter(([key]) => key !== 'im') // Excluyendo la opción 'im'
                .map(([key, value]) => (
                  <option key={key} value={key} style={{ color: value }}>
                    {key.charAt(0).toUpperCase() + key.slice(1)} {/* Capitalizando la primera letra */}
                  </option>
                ))
              }
            </select>
            <SvgIcons type="settings" />
          
          </>

        }
  #{id}
      </div>

    </div>

  );
});

export default Field;
