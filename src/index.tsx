import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './constants/router/router';
import { I18nextProvider } from 'react-i18next';
import i18n from './constants/lang/langs';
import { ConfigProvider } from 'antd';
import { theme } from './constants/theme';
import './style.css';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <ConfigProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </ConfigProvider>
  </StrictMode>
);
