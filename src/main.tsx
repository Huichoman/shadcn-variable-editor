import React from 'react';
import ReactDOM from 'react-dom/client';
import { IntlayerProvider } from 'react-intlayer';
import App from './App.tsx';
import { ThemeProvider } from './components/theme-provider.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IntlayerProvider>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <App />
      </ThemeProvider>
    </IntlayerProvider>
  </React.StrictMode>
);
