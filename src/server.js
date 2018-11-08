import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import { Store } from 'svelte/store';
import * as sapper from '../__sapper__/server.js';
import { languageToUse } from './helpers/localized.js';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const sapperMiddleware = sapper.middleware({
  store: request => new Store({
    lang: languageToUse(request.query.lang || request.headers['accept-language']),
  }),
});

polka() // You can also use Express
  /* .use('/de',
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    (req, res, next) => {
      req.query.lang = 'de';

      return sapperMiddleware(req, res, next);
    })
  .use('/en',
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    (req, res, next) => {
      req.query.lang = 'en';

      return sapperMiddleware(req, res, next);
    }) */
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapperMiddleware)
  .listen(PORT, err => {
    // eslint-disable-next-line no-console
    if (err) console.log('error', err);
  });
