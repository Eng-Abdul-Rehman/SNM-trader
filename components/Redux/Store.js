// store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  datafav: [],
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        datafav: [...state.datafav, action.payload],
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer);

export default store;