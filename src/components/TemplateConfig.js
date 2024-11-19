// src/components/TemplateConfig.js

import React, { useState, useMemo } from 'react';
import SvgIcons from './svgicons';
import { v4 as uuidv4 } from 'uuid'; 

export default function TemplateConfig() {
  const inputCount = 10; 
  const defaultState = {};
  for (let i = 1; i <= inputCount; i++) {
    defaultState[`input${i}`] = "";
  }

  const [inputs, setInputs] = useState(defaultState);
  const [customStyles, setCustomStyles] = useState([{ id: uuidv4(), label: '', value: '' }]);

  const handleChange = (id, value) => {
    setInputs(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleCustomStyleChange = (id, type, value) => {
    setCustomStyles(prevStyles =>
      prevStyles.map(style =>
        style.id === id ? { ...style, [type]: value } : style
      )
    );
  };

  const addCustomStyle = () => {
    // Verifica si hay algún campo "Custom Styles" que esté vacío
    const hasEmptyField = customStyles.some(style => !style.label || !style.value);

    // Si todos los campos están completos, agrega un nuevo campo con un ID único
    if (!hasEmptyField) {
      setCustomStyles(prevStyles => [...prevStyles, { id: uuidv4(), label: '', value: '' }]);
    } else {
      alert('Complete todos los campos antes de agregar más.');
    }
  };

  // Cálculo de cuántos campos por columna
  const inputsPerColumn = Math.ceil(inputCount / 2);

  // Generar claves únicas para las columnas una sola vez
  const columnIds = useMemo(() => [...Array(2)].map(() => uuidv4()), []);

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
          {customStyles.map((style) => (
            <div key={style.id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
              <input
                placeholder="Label"
                value={style.label}
                onChange={(e) => handleCustomStyleChange(style.id, 'label', e.target.value)}
                style={{ marginRight: '10px', color: "white", backgroundColor: "#2c2c2c", maxWidth: '150px' }}
                className='w-input'
              />
              <input
                placeholder="Value"
                value={style.value}
                onChange={(e) => handleCustomStyleChange(style.id, 'value', e.target.value)}
                style={{ marginRight: '10px', color: "white", backgroundColor: "#2c2c2c", maxWidth: '150px' }}
                className='w-input'
              />
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SvgIcons onClick={addCustomStyle} type="plus" />
          </div>
        </div>

        <h2 style={{ textAlign: 'center', color: "#E0A900", marginTop: '5px' }}>Standard Styles</h2>

        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          {/* Llenado dinámico de las columnas */}
          {[...Array(2)].map((_, colIndex) => (
            <div key={columnIds[colIndex]}>
              {Object.keys(inputs).slice(colIndex * inputsPerColumn, (colIndex + 1) * inputsPerColumn).map((key) => (
                <div key={key} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                  <label className='w-form-label-2'>{`Label ${parseInt(key.replace('input', ''))}`}</label>
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
