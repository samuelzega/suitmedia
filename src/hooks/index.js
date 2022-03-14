import React, {useReducer, createContext} from 'react';

export const UserContext = createContext();

const initialState = {
  myDetail: null,
  users: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_MY_DETAIL':
      return {
        ...state,
        myDetail: action.payload,
      };
    case 'ADD_USERS':
      console.log(action.payload[0], '=====context=====');
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };
    default:
      return state;
  }
};

export const UserContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={[state, dispatch]}>
      {props.children}
    </UserContext.Provider>
  );
};
