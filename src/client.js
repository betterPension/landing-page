import { Store } from 'svelte/store';
import * as sapper from '../__sapper__/client.js';
import { getUserLanguage } from './helpers/localized.js';

sapper.start({
  target: document.querySelector('#sapper'),
  store: data => new Store({
    ...data,
    lang: getUserLanguage(),
  }),
});

if ('serviceWorker' in navigator) {
  // eslint-disable-next-line compat/compat
  navigator.serviceWorker.register('/service-worker.js');
}
