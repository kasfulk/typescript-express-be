import 'module-alias/register';
import dotenv from 'dotenv';
import App from './app';
import QuotesController from './handlers/quotes/quotes.controller';
import JalanController from './handlers/jalan/jalan.controller';
import Handler from './handlers/handler';

dotenv.config({ path: './.env' });
const port = parseInt(process.env.PORT, 10);

const app = new App(
  [
    new Handler(),
    new QuotesController(),
    new JalanController(),
  ],
  port,
);

app.listen();
