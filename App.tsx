import React from 'react';
import { NativeBaseProvider } from "native-base";
import { Router } from './src/router';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

function App(): JSX.Element {

  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <Router />
      </Provider>
    </NativeBaseProvider>
  );
}


export default App;
