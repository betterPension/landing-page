/* eslint-disable max-len */

function text(de, en) {
  if (!de || !en) {
    throw new Error(`Missing translation for '${de || en}'`);
  }
  return { de, en };
}

// General
export const mailAddressPlaceholder = text('Deine e-Mail Adresse', 'Your mail address');
export const pageNotFound = text('Diese Seite existiert nicht, tut uns leid!', 'This page does not exist, we\'re sorry!');
export const anErrorOccured = text('Ein Fehler ist aufgetreten, tut uns leid!', 'An error occured, we\'re sorry!');

// Signup form
export const signupButtonTitle = text('Anmelden', 'Sign up');
export const signupInfo = text('Melde dich jetzt für unseren Newsletter an und wir informieren dich, sobald wir starten.', 'Sign up for our newsletter and we\'ll keep you posted.');
export const signupAccept = text(
  'Durch den Klick auf “Anmelden” erteile ich meine Einwilligung im Sinne der <a rel="prefetch" href="/newsletter/bedingungen">Newsletter Abonnementbedingungen</a>.',
  'By clicking “Sign up” i accept the <a rel="prefetch" href="/newsletter/bedingungen">Newsletter terms</a>'
);
export const signupError = text('Ein Fehler ist aufgetreten, bitte versuche es später erneut.', 'An error occured, please try again later.');
export const signupAlreadyAdded = text(
  mail => `Die e-Mail-Adresse ${mail} ist bereits registriert. Hast du die Mail schon bestätigt?`,
  mail => `${mail} is already registered. Did you confirm your mail yet?`,
);

// Home
export const homeTitle = text('Die unabhängige Pensionsplattform für Mitarbeiter und Selbstständige', 'The independent pension platform for employees and self-employed');

// Mission
export const missionTitle = text('Wir stellten uns eine einfache Frage:', 'We asked ourselves a simple question:');
export const missionSubtitle = text('Wie können wir es Menschen erleichtern, ihre Pension zu planen?', 'How can we help people plan for their pension more effectively?');

export const mission = [
  {
    image: 'mission/segmentation.svg',
    title: text('Wo stehst du heute? Hol dir den Überblick', 'Get full transparency'),
    text: text('Um für dein Alter vorsorgen zu können, musst du planen. Dein betterpension Dashboard ermöglicht es dir, alle Daten zu deiner staatlichen, betrieblichen und privaten Pension auf einen Blick zu sehen, und zeigt dir, wie sich dein Pensionsanspruch entwickeln wird.', 'We help you gather all your data on your state, company and private pension plan in one place, and give you a clear sense of how your pension accounts will evolve.'),
  },
  {
    image: 'mission/calculator.svg',
    title: text('Wo willst du hin? Setz dir dein persönliches Ziel', 'Define your target'),
    text: text('Du sagst uns, wie viel Geld du in deiner Pension monatlich zur Verfügung haben willst. Einfache Planungstools helfen dir dabei, einen Blick in die Zukunft zu werfen und dein persönliches Vorsorgeziel zu setzen. Intuitiv und flexibel.', 'Any retirement plan starts with setting your own goals. Tell us what monthly pension you are aiming for. Our tools assist you in defining a reasonable goal based on the information you provided.'),
  },
  {
    image: 'mission/high-five.svg',
    title: text('Wie kommst du dort hin? Plan mit uns deine Vorsorge', 'Make it happen'),
    text: text('Erstell deinen persönlichen Sparplan und triff mit Hilfe unserer flexiblen Plattform eine informierte Entscheidung darüber, mit welchem Produkt du dich für deine Pension absichern willst.', 'We help you come up with your personal pension and savings plan. We provide you with transparent products to help you make an informed decision on how to best save money for later.'),
  },
];
