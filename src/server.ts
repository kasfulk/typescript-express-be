import App from './app';
import QuotesController from './handlers/quotes/quotes.controller';
import Handler from './handlers/handler';

const app = new App(
  [
    new Handler(),
    new QuotesController(),
  ],
  5000,
);

app.listen();
