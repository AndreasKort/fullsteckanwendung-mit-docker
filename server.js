const express = require('express');
const app = express();
const port = 3001; // Wähle einen Port für dein Backend

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
