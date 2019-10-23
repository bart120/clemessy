import i18n from 'i18next';

import en from './translations/en';
import fr from './translations/fr';
import { initReactI18next } from 'react-i18next';

const resources = {
    en,
    fr
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'fr',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
