const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const route = require('@src/route.js');

dotenv.config({ path: `${__dirname}/.env` });

const location = `/${process.env.LOCATION}`;
const rootLocation = location == '/' ? '/' : `${location}/`;
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

console.log(rootLocation);

app.use('/', route);

app.listen(port, () => {
  console.log(`Server Berjalan pada port : ${port}`, location, rootLocation);
});
