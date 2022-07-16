//import liraries
import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import createstore from './src/redux'
import HomeScreen from './src/screens/homescreen';


export const {store,persistor}=createstore();

export default function App() {


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HomeScreen/>
      </PersistGate>
    </Provider>
  );
}

