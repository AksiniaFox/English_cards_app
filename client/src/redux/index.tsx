// import { applyMiddleware } from 'redux'; 
// import { legacy_createStore as createStore} from 'redux'
import { thunk } from 'redux-thunk';

import { configureStore} from '@reduxjs/toolkit';

import {rootReducer} from './indexReducer';



//export const store = createStore(rootReducer, applyMiddleware(thunk))

// const store = configureStore({
//     reducer: {auth:authReducer,form:formReducer}
//   });
  
  // export type RootState = ReturnType<typeof store.getState>;
  // export type AppDispatch = typeof store.dispatch;

 const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
export type AppDispatch = typeof store.dispatch

export default store
  
  