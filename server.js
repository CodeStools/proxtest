const express = require('express');
const proxy = require('express-http-proxy');
const app = express();

const TARGET_URL = 'https://example.com'; // CHANGE THIS

app.use('/', proxy(TARGET_URL));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
