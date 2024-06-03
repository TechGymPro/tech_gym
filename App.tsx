import React from 'react';
import { Router } from './src/router';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import 'react-native-gesture-handler';

function App(): JSX.Element {

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}


export default App;
