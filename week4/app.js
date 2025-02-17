const express = require('express');
const app = express();
const port = 1234;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json());
app.post('/test', (req, res) => {
  console.log(req.body.test);
  res.send(req.body.test);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
