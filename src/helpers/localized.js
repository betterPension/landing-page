import queryString from 'query-string';

const languages = ['en', 'de'];

export const languageToUse = locale => (locale && locale.startsWith('en') ? 'en' : 'de');

export function getUserLanguage() {
  const inPath = queryString.parse(location.search).lang;
  if (inPath && ~languages.indexOf(inPath)) { return inPath; }
  return languageToUse(window.navigator.language);
}

export default function localized(lang, translations) {
  if (!translations[lang]) { throw new Error(`Missing translation for ${JSON.stringify(translations)}`) }
  return translations[lang];
}
