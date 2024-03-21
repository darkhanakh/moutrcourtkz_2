import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import I18NextHttpBackend from 'i18next-http-backend';
import translationEN from './languages/translationEN';
import translationRU from './languages/translationRU';
import translationKZ from './languages/translationKZ';

const resources = {
  en: { translation: translationEN },
  ru: { translation: translationRU },
  kz: { translation: translationKZ },
};
i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .use(I18NextHttpBackend)
  .init({
    lng: 'ru',
    fallbackLng: 'ru',
    detection: {
      order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      cache: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    debug: true,
    resources,
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
