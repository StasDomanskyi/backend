const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const r1 = require('./payload/r1.js');
const r2 = require('./payload/r2.js');
const r3 = require('./payload/r3.js');
const r4 = require('./payload/r4.js');
const r5 = require('./payload/r5.js');
const r6 = require('./payload/r6.js');
const r7 = require('./payload/r7.js');
const r8 = require('./payload/r8.js');




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
/* app.get('/r2', r2.getAll); */
app.get('/r2/:status/:account', r2.getAccount);
app.post('/r2', jsonParser, r2.postAccount);
/* app.put('/r2/:key/:value', jsonParser, r2.updateAccount); */
/* app.delete('/r2/:key/:value', r2.deleteAccount); */

// R3 - TABLE
/* app.get('/r3', r3.getAll); */
app.get('/r3/:key/:value/:domain', r3.getService);
app.post('/r3', jsonParser, r3.postService);
/* app.put('/r3/:key/:value', jsonParser, r3.updateService); */
/* app.delete('/r3/:key/:value', r3.deleteService); */

// R4 - TABLE
/* app.get('/r4', r4.getAll); */
app.get('/r4/:key/:value/:status', r4.getSupport);
app.post('/r4', jsonParser, r4.postSupport);
/* app.put('/r4/:key/:value', jsonParser, r4.updateSupport); */
/* app.delete('/r4/:key/:value', r4.deleteSupport); */

// R5 - TABLE
/* app.get('/r5', r5.getAll); */
app.get('/r5/:key/:value/:status', r5.getAddon);
app.post('/r5', jsonParser, r5.postAddon);
/* app.put('/r5/:key/:value', jsonParser, r5.updateAddon); */
/* app.delete('/r5/:key/:value', r5.deleteAddon); */

// R6 - TABLE
/* app.get('/r6', r6.getAll); */
app.get('/r6/:status/:experience', r6.getEmployee);
app.post('/r6', jsonParser, r6.postEmployee);
/* app.put('/r6/:key/:value', jsonParser, r6.updateEmployee); */
/* app.delete('/r6/:key/:value', r6.deleteEmployee); */

// R7 - TABLE
/* app.get('/r7', r7.getAll); */
/* app.get('/r7/:key/:value/:status', r7.getServer); */
app.post('/r7', jsonParser, r7.postServer);
/* app.put('/r7/:key/:value', jsonParser, r7.updateServer); */
/* app.delete('/r7/:key/:value', r7.deleteServer); */

// R8 - TABLE
/* app.get('/r8', r8.getAll); */
/* app.get('/r8/:key', r8.getDomain); */
app.post('/r8', jsonParser, r8.postDomain);
/* app.put('/r8/:key/:value', jsonParser, r8.updateDomain); */
/* app.delete('/r8/:key/:value', r8.deleteDomain); */

app.listen( port, () => console.log(`"Hosting Company" listening at http://localhost:${port}`));