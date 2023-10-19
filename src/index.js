import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
// import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { extendTheme } from '@chakra-ui/react';
import 'modern-normalize';
import './styles.css';

const colors = {
  brand: {
    900: '#a2b4fb',
    800: '#fefcbf',
    // 700: '#2a69ac',
    // #a2b4fb, #fefcbf
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
