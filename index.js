require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const app = express();


// Routers
const mediaRoutes = require('./routes/media')

// Parse the body for incoming post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Routes
app.use('/api/media', mediaRoutes)

// Application
app.use('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
