import React, { useState } from 'react';
import SvgIcons from './svgIcons';

export default function TemplateConfig() {
  const inputCount = 10;  // Ajusta este número según lo necesites
  const defaultState = {};
  for (let i = 1; i <= inputCount; i++) {
    defaultState[`input${i}`] = "";
  }

  const [inputs, setInputs] = useState(defaultState);
  const [customStyles, setCustomStyles] = useState([{ label: '', value: '' }]);

  const handleChange = (id, value) => {
    setInputs(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleCustomStyleChange = (index, type, value) => {
    const newStyles = [...customStyles];
    newStyles[index][type] = value;
    setCustomStyles(newStyles);
  };
  const addCustomStyle = () => {
    // Verifica si hay algún campo "Custom Styles" que esté vacío
    const hasEmptyField = customStyles.some(style => !style.label || !style.value);
  
    // Si todos los campos están completos, agrega un nuevo campo
    if (!hasEmptyField) {
      setCustomStyles(prevStyles => [...prevStyles, { label: '', value: '' }]);
    } else {
      alert('Complete todos los campos antes de agregar más.');
    }
  };
  
  // Cálculo de cuántos campos por columna
  const inputsPerColumn = Math.ceil(inputCount / 2);

  return (
    <div className="modal" style={{ overflowY: 'auto', alignItems: 'center' }}>
      <div className="modal-content"
        style={{
          width: "40%",
          backgroundColor: "#080f25",
          maxHeight: '90vh',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px'
        }}>
        {/* Custom Styles section */}
        <div style={{ marginBottom: '20px', width: '100%' }}>
          <h2 style={{ textAlign: 'center', color: "#E0A900" }}> Custom Styles</h2>
          {customStyles.map((style, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
              <input
                placeholder="Label"
                value={style.label}
                onChange={(e) => handleCustomStyleChange(index, 'label', e.target.value)}
                style={{ marginRight: '10px', color: "white", backgroundColor: "#2c2c2c", maxWidth: '150px' }}
                className='w-input'
              />
              <input
                placeholder="Value"
                value={style.value}
                onChange={(e) => handleCustomStyleChange(index, 'value', e.target.value)}
                style={{ marginRight: '10px', color: "white", backgroundColor: "#2c2c2c", maxWidth: '150px' }}
                className='w-input'
              />
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SvgIcons onClick={addCustomStyle} type="plus"/>
          </div>        </div>
        <h2 style={{ textAlign: 'center', color: "#E0A900", marginTop: '5px' }}>Standard Styles</h2>

        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          {/* Llenado dinámico de las columnas */}
          {[...Array(2)].map((_, colIndex) => (
            <div key={colIndex}>
              {Object.keys(inputs).slice(colIndex * inputsPerColumn, (colIndex + 1) * inputsPerColumn).map((key, index) => (
                <div key={key} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                  <label className='w-form-label-2'>{`Label ${colIndex * inputsPerColumn + index + 1}`}</label>
                  <input
                    value={inputs[key]}
                    onChange={(e) => handleChange(key, e.target.value)}
                    style={{ marginLeft: '10px', color: "white", backgroundColor: "#2c2c2c", maxWidth: '150px' }}
                    className='w-input'
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
