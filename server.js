const express = require('express')
const app = express()
const dns2 = require('dns2');
const dns = new dns2({dns:"1.1.1.1"});
app.get('/', function (req, res) {
  res.send('Hi')
});

app.get('/resolve', async (req, res) => {
  res.json(await dns.resolve(req.query.host || "example.com"));
});

app.get('/resolveA', async (req, res) => {
  res.json(await dns.resolveA(req.query.host || "example.com"));
});
 
app.listen(process.env.PORT)
