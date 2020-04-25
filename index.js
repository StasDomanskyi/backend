const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const r1 = require('./payload/r1.js');
const r2 = require('./payload/r2.js');
const r3 = require('./payload/r3.js');
const r4 = require('./payload/r4.js');



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
app.get('/r1/:key/:status/:value', r1.getClient);
app.post('/r1', jsonParser, r1.postClient);
app.put('/r1/:key/:value', jsonParser, r1.updateClient);
app.delete('/r1/:key/:value', r1.deleteClient);

// R2 - TABLE
app.get('/r2/:status/:account', r2.getAccount);

// R3 - TABLE
app.get('/r3/:key/:value/:domain', r3.getService);

// R4 - TABLE
app.get('/r4/:key/:value/:status', r4.getService);

app.listen( port, () => console.log(`"Hosting Company" listening at http://localhost:${port}`));