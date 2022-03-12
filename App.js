

import React from 'react';
// import {AppProvider} from  './src/context/AppContext'
import Home from './src/Screens/Home';
import { Provider } from 'react-redux'
import mystore from './src/store';
import Quize from './src/Screens/quize';
import Result from './src/Screens/Result';
import HomeStack from './src/navigator/HomeStack';

const App = () => {
  return(
      <Provider store={mystore}>
        <HomeStack />
      </Provider>
)}


export default App;
