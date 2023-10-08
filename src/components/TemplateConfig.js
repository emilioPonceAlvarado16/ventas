import React, { useState } from 'react';

export default function TemplateConfig() {
  const inputCount = 100;  // Ajusta este número según lo necesites
  const defaultState = {};
  for (let i = 1; i <= inputCount; i++) {
    defaultState[`input${i}`] = "";
  }

  const [inputs, setInputs] = useState(defaultState);

  const handleChange = (id, value) => {
    setInputs(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  // Cálculo de cuántos campos por columna
  const inputsPerColumn = Math.ceil(inputCount / 2);

  return (
    <div className="modal" style={{ overflowY: 'auto', alignItems: 'center' }}>
      <div className="modal-content"
        style={{
          width: "40%",
          backgroundColor: "#080f25",
          maxHeight: '90vh',  // 90% de la altura de la ventana
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          // Elimina la siguiente línea:
          // justifyContent: 'center',
          alignItems: 'center',
          padding: '20px'
        }}>
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
                    style={{ marginLeft: '10px', color:"white",backgroundColor:"#2c2c2c", maxWidth: '150px' }}
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
