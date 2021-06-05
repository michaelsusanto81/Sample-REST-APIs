const express = require('express');
const app = express();
const port = 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send({'response': 'Hello World'});
})

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
})