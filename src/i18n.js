import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import AR from './lang/ar.json'
import EN from './lang/en.json'

const resources = {
    en: {
        translation: EN
    },
    ar: {
        translation: AR
    }
};

let lang = localStorage.getItem('Lang')
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: lang ? lang : "en",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;