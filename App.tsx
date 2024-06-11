import React from 'react';
import { Router } from './src/router';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { AuthProvider } from './src/global/auth';
import { PersistGate } from 'redux-persist/integration/react';

function App(): JSX.Element {

  return (
    <AuthProvider>
      <GluestackUIProvider config={config}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router />
          </PersistGate>
        </Provider>
      </GluestackUIProvider>
    </AuthProvider>
  );
}


export default App;
