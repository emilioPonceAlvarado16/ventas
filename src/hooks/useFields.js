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
  const [fields, dispatch] = useReducer(fieldReducer, initialFields);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(13); // Ajusta este valor según tus necesidades
  
  const [foundedField, setFoundedField] = useState(0);

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
    const fieldToRemove = fields[index];
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
     setFoundedField
  };
};

export default useFields;
