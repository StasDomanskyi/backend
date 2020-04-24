const express = require('express');
const app = express();
const cors = require('cors');
const r1 = require('./payload/r1.js');
const port = 3000;


var corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}

const jsonParser = express.json();

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({
    text: "Hello World!"
  });
});
// R1 - TABLE
app.get('/r1', r1.getAll);
app.get('/r1/:key/:value', r1.getClient);
app.post('/r1', jsonParser, r1.postClient);
app.put('/r1/:key/:value', jsonParser, r1.updateClient);
app.delete('/r1/:key/:value', r1.deleteClient);

app.listen( port, () => console.log(`"Hosting Company" listening at http://localhost:${port}`));