import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'



i18n.use(initReactI18next)
.use(LanguageDetector)
.use(HttpApi)
.init({
  supportedLngs: ['en', 'ru'],
  fallbackLng: 'en',
  detection: {
    order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
    caches: ['cookie'],
  },
  backend: {
    loadPath: '/assets/locales/{{lng}}/translation.json'
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>

);

