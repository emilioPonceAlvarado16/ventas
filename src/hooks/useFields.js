import { useReducer, useState } from 'react';

const ADD_FIELD = 'ADD_FIELD';
const REMOVE_FIELD = 'REMOVE_FIELD';
const UPDATE_FIELD = 'UPDATE_FIELD';
const CHANGE_FIELD_TYPE = 'CHANGE_FIELD_TYPE';
const SET_FIELDS = 'SET_FIELDS';

const fieldReducer = (state, action) => {
  switch (action.type) {
    case ADD_FIELD:
      return [...state, action.payload];
    case REMOVE_FIELD:
      return state.filter((_, index) => index !== action.payload);
    // case UPDATE_FIELD:
    //   return state.map((field, index) => {
    //     if (index === action.index) {
    //       return { ...field, ...action.payload };
    //     }
    //     return field;
    //   });
    case UPDATE_FIELD:
      return state.map((field) => {
        if (field.id === action.id) { // Busca por ID
          return { ...field, ...action.payload };
        }
        return field;
      });

    case CHANGE_FIELD_TYPE:
      return state.map((field, index) => index === action.index ? { ...field, type: action.payload } : field);
    case SET_FIELDS:
      return action.payload;
    default:
      return state;
  }
};

const useFields = (initialFields = []) => {
  const [fields, dispatch] = useReducer(fieldReducer, [// cambiar por initialFields
  {
    "id": 0,
    "type": "titulo",
    "value": "Experiencia Laboral"
  },
  {
    "id": 1,
    "type": "programacion",
    "value": "Desarrollador FullStack\nDesarrollo Backend: A cargo del desarrollo backend del módulo de caracterización del proyecto para una empresa chilena de consultoría de software - Arkho."
  },
  {
    "id": 2,
    "type": "parrafo",
    "value": "Trabajar con nodos de preguntas y respuestas en un formulario, gestionando eficazmente la integración con la base de datos."
  },
  {
    "id": 5,
    "type": "im",
    "url": "./images/image1.png",
    "value": "image1.png"
  },
  {
    "id": 6,
    "type": "image_title",
    "value": "Figura 1: Firma de Isaias"
  },
  {
    "id": 8,
    "type": "im",
    "url": "./images/image2.png",
    "value": "image2.png"
  },
  {
    "id": 9,
    "type": "programacion",
    "value": "Procesando nuevos texto:"
  },
  {
    "id": 10,
    "type": "parrafo",
    "value": "Enumeracion claro que si"
  },
  {
    "id": 11,
    "type": "image_title",
    "value": "Enumeracion numero 2"
  },
  {
    "id": 12,
    "type": "parrafo",
    "value": "Lista ordenada de objetos."
  },
  {
    "id": 13,
    "type": "titulo",
    "value": "Experiencia Laboral"
  },
  {
    "id": 14,
    "type": "programacion",
    "value": "Desarrollador FullStack\nDesarrollo Backend: A cargo del desarrollo backend del módulo de caracterización del proyecto para una empresa chilena de consultoría de software - Arkho."
  },
  {
    "id": 15,
    "type": "parrafo",
    "value": "Trabajar con nodos de preguntas y respuestas en un formulario, gestionando eficazmente la integración con la base de datos."
  },
  {
    "id": 18,
    "type": "im",
    "url": "./images/image3.png",
    "value": "image3.png"
  },
  {
    "id": 19,
    "type": "image_title",
    "value": "Figura 1: Firma de Isaias"
  },
  {
    "id": 21,
    "type": "im",
    "url": "./images/image4.png",
    "value": "image4.png"
  },
  {
    "id": 22,
    "type": "programacion",
    "value": "Procesando nuevos texto:"
  },
  {
    "id": 23,
    "type": "parrafo",
    "value": "Enumeracion claro que si"
  },
  {
    "id": 24,
    "type": "image_title",
    "value": "Enumeracion numero 2"
  },
  {
    "id": 25,
    "type": "parrafo",
    "value": "Lista ordenada de objetos."
  },
  {
    "id": 26,
    "type": "titulo",
    "value": "Experiencia Laboral"
  },
  {
    "id": 27,
    "type": "programacion",
    "value": "Desarrollador FullStack\nDesarrollo Backend: A cargo del desarrollo backend del módulo de caracterización del proyecto para una empresa chilena de consultoría de software - Arkho."
  },
  {
    "id": 28,
    "type": "parrafo",
    "value": "Trabajar con nodos de preguntas y respuestas en un formulario, gestionando eficazmente la integración con la base de datos."
  },
  {
    "id": 31,
    "type": "im",
    "url": "./images/image5.png",
    "value": "image5.png"
  },
  {
    "id": 32,
    "type": "image_title",
    "value": "Figura 1: Firma de Isaias"
  },
  {
    "id": 34,
    "type": "im",
    "url": "./images/image6.png",
    "value": "image6.png"
  },
  {
    "id": 35,
    "type": "programacion",
    "value": "Procesando nuevos texto:"
  },
  {
    "id": 36,
    "type": "parrafo",
    "value": "Enumeracion claro que si"
  },
  {
    "id": 37,
    "type": "image_title",
    "value": "Enumeracion numero 2"
  },
  {
    "id": 38,
    "type": "parrafo",
    "value": "Lista ordenada de objetos."
  },
  {
    "id": 39,
    "type": "titulo",
    "value": "Experiencia Laboral"
  },
  {
    "id": 40,
    "type": "programacion",
    "value": "Desarrollador FullStack\nDesarrollo Backend: A cargo del desarrollo backend del módulo de caracterización del proyecto para una empresa chilena de consultoría de software - Arkho."
  },
  {
    "id": 41,
    "type": "parrafo",
    "value": "Trabajar con nodos de preguntas y respuestas en un formulario, gestionando eficazmente la integración con la base de datos."
  },
  {
    "id": 44,
    "type": "im",
    "url": "./images/image7.png",
    "value": "image7.png"
  },
  {
    "id": 45,
    "type": "image_title",
    "value": "Figura 1: Firma de Isaias"
  },
  {
    "id": 47,
    "type": "im",
    "url": "./images/image8.png",
    "value": "image8.png"
  },
  {
    "id": 48,
    "type": "programacion",
    "value": "Procesando nuevos texto:"
  },
  {
    "id": 49,
    "type": "parrafo",
    "value": "Enumeracion claro que si"
  },
  {
    "id": 50,
    "type": "image_title",
    "value": "Enumeracion numero 2"
  },
  {
    "id": 51,
    "type": "parrafo",
    "value": "Lista ordenada de objetos."
  },
  {
    "id": 52,
    "type": "titulo",
    "value": "Experiencia Laboral"
  },
  {
    "id": 53,
    "type": "programacion",
    "value": "Desarrollador FullStack\nDesarrollo Backend: A cargo del desarrollo backend del módulo de caracterización del proyecto para una empresa chilena de consultoría de software - Arkho."
  },
  {
    "id": 54,
    "type": "parrafo",
    "value": "Trabajar con nodos de preguntas y respuestas en un formulario, gestionando eficazmente la integración con la base de datos."
  },
  {
    "id": 57,
    "type": "im",
    "url": "./images/image9.png",
    "value": "image9.png"
  },
  {
    "id": 58,
    "type": "image_title",
    "value": "Figura 1: Firma de Isaias"
  },
  {
    "id": 60,
    "type": "im",
    "url": "./images/image10.png",
    "value": "image10.png"
  },
  {
    "id": 61,
    "type": "programacion",
    "value": "Procesando nuevos texto:"
  },
  {
    "id": 62,
    "type": "parrafo",
    "value": "Enumeracion claro que si"
  },
  {
    "id": 63,
    "type": "image_title",
    "value": "Enumeracion numero 2"
  },
  {
    "id": 64,
    "type": "parrafo",
    "value": "Lista ordenada de objetos."
  },
  {
    "id": 65,
    "type": "titulo",
    "value": "Experiencia Laboral"
  },
  {
    "id": 66,
    "type": "programacion",
    "value": "Desarrollador FullStack\nDesarrollo Backend: A cargo del desarrollo backend del módulo de caracterización del proyecto para una empresa chilena de consultoría de software - Arkho."
  },
  {
    "id": 67,
    "type": "parrafo",
    "value": "Trabajar con nodos de preguntas y respuestas en un formulario, gestionando eficazmente la integración con la base de datos."
  },
  {
    "id": 70,
    "type": "im",
    "url": "./images/image11.png",
    "value": "image11.png"
  },
  {
    "id": 71,
    "type": "image_title",
    "value": "Figura 1: Firma de Isaias"
  },
  {
    "id": 73,
    "type": "im",
    "url": "./images/image12.png",
    "value": "image12.png"
  },
  {
    "id": 74,
    "type": "programacion",
    "value": "Procesando nuevos texto:"
  },
  {
    "id": 75,
    "type": "parrafo",
    "value": "Enumeracion claro que si"
  },
  {
    "id": 76,
    "type": "image_title",
    "value": "Enumeracion numero 2"
  },
  {
    "id": 77,
    "type": "parrafo",
    "value": "Lista ordenada de objetos."
  },
  {
    "id": 78,
    "type": "bibliografia",
    "value": "1. Doe, J. (2020). Introducción a la Inteligencia Artificial. Editorial ABC."
  },
  {
    "id": 79,
    "type": "bibliografia",
    "value": "[2] Pérez, L. (2019). Avances en Robótica Móvil. Ediciones Técnicas"
  }
]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(13); // Ajusta este valor según tus necesidades
  
  const [foundedField, setFoundedField] = useState(0);
  const [textFoundedField, setTextFoundedField] = useState("");

    // Calcula los elementos para la página actual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentFields = fields.slice(indexOfFirstItem, indexOfLastItem);
  
    // Funciones para manejar la paginación
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const changeItemsPerPage = (number) => setItemsPerPage(number);


  const addField = (field) => {
    dispatch({ type: ADD_FIELD, payload: field });
  };

  const removeField = (index) => {
    dispatch({ type: REMOVE_FIELD, payload: index });
  };


  const updateField = (id, updatedField) => {
    // Encuentra el índice del campo basado en el id
    const fieldIndex = fields.findIndex(field => field.id === id);
    if (fieldIndex !== -1) {
      dispatch({ type: UPDATE_FIELD, id, payload: updatedField }); 
    } else {
      console.log("Campo no encontrado para actualizar");
    }
  };
  

  const changeFieldType = (index, newType) => {
    dispatch({ type: CHANGE_FIELD_TYPE, index, payload: newType });
  };

  const setFields = (newFields) => {
    dispatch({ type: SET_FIELDS, payload: newFields });
  };

  return {
    fields,
    addField,
    removeField,
    updateField,
    changeFieldType,
    setFields,

    currentFields,
    currentPage,
    itemsPerPage,
    paginate,
    changeItemsPerPage,

     // Para el foundedField
     foundedField,
     setFoundedField,
     textFoundedField, 
     setTextFoundedField
  };
};

export default useFields;
