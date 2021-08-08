import App from 'app';
import QuotesController from './handlers/quotes/quotes.controller';

const app = new App(
  [
    new QuotesController(),
  ],
  5000,
);

app.listen();
