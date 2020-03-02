const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API Running')); //send data to browser

const PORT = process.env.PORT || 5000; // look for an environment variable called PORT

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
