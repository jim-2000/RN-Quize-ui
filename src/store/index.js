import { configureStore,combineReducers } from "@reduxjs/toolkit";
import counterReducer from './counterStore';
import themeReducer from './themeSlice';
 import {compose } from 'redux';
 //
 const rootReducer = combineReducers({
      counter: counterReducer,
      theme: themeReducer,
 });
 const mystore = configureStore({
  reducer: rootReducer,
 });
 export default mystore;

