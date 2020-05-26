import React from 'react';

export const ContextApp = React.createContext();
export const initialState = {
  sellers: [],
  user: { name: '' },
  menu: false,
};

export const appReducer = (state, action) => {
  // eslint-disable-next-line no-console
  // console.log('Reducer', action, state);
  switch (action.type) {
    case 'set_sellers': {
      return {
        ...state,
        sellers: action.payload,
      };
    }
    case 'set_user': {
      return {
        ...state,
        user: action.payload,
      };
    }
    case 'set_menu': {
      return {
        ...state,
        menu: action.payload,
      };
    }
    default:
      return state;
  }
};
