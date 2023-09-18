import { useReducer } from 'react';

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
    case UPDATE_FIELD:
      return state.map((field, index) => {
        if (index === action.index) {
          return { ...field, ...action.payload };
        }
        return field;
      });    case CHANGE_FIELD_TYPE:
      return state.map((field, index) => index === action.index ? { ...field, type: action.payload } : field);
    case SET_FIELDS:
      return action.payload;
    default:
      return state;
  }
};

const useFields = (initialFields = []) => {
  const [fields, dispatch] = useReducer(fieldReducer, initialFields);

  const addField = (field) => {
    dispatch({ type: ADD_FIELD, payload: field });
  };

  const removeField = (index) => {
    dispatch({ type: REMOVE_FIELD, payload: index });
  };

  const updateField = (index, updatedField) => {
    dispatch({ type: UPDATE_FIELD, index, payload: updatedField });
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
  };
};

export default useFields;
