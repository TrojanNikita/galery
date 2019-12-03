import React, { createContext, useReducer, useContext } from "react";
import {photoInitialState, photoReducer} from './photo-reducer';
import { userInitialState, userReducer} from "./user-reducer";


// пока оставим это пустым
const initialState = {
    ...photoInitialState,
    ...userInitialState
}

const StoreContext = createContext(initialState);

// это будет мапингом actions, которые будут инициировать мутации state
const Reducers = {
    ...photoReducer,
    ...useReducer
};

// reducer вызывается всякий раз, когда action совершается через функцию dispatch
// action.type - это строка, которая соответствует функции в Actions
// мы применяем update к текущему state и возвращаем его новую копию
const reducer = (state, action) => {
    const act = Reducers[action.type];
    const update = act(state, action.payload);
    return { ...state, ...update };
  };


export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};


// useStore будет использоваться в React компонентах для извлечения и мутации состояния
export const useStore = (store) => {
    const { state, dispatch } = useContext(StoreContext);
    return { state, dispatch };
  };



