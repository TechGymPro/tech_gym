import React from 'react';
import { Router } from './src/router';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { AuthProvider } from './src/global/auth';

function App(): JSX.Element {

  return (
    <AuthProvider>
      <GluestackUIProvider config={config}>
        <Provider store={store}>
          <Router />
        </Provider>
      </GluestackUIProvider>
    </AuthProvider>
  );
}


export default App;
