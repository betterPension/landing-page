import { init } from 'sapper/runtime.js';
import { routes } from './manifest/client.js'; // eslint-disable-line import/no-unresolved
import App from './App.html';

init({
  target: document.querySelector('#sapper'),
  routes,
  App,
});
