const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Welcome to Eden Cloud Tech! This is my second devops project. Thanks for visiting our page and have a wonderful week... Designed by Samuel Marshall'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
