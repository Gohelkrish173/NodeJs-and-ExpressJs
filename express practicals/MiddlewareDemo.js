const express = require('express');
const app = express();
const PORT = 3000;

// Middleware function to log request details
const Demo = (req, res, next) => {
  console.log(`msg`);
  next(); // Pass control to the next middleware function
};

// Use the middleware function in the app
app.use('/xyz',Demo);

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/xyz', (req, res) => {
  res.send('Hello, World! 2');
});

app.get('/xyz/abc', (req, res) => {
  res.send('Hello, World! 3');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
