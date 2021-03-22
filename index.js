require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const port = process.env.PORT || 3000;

const app = express();


// Routers
const apiRoutes = require('./routes/api')

// Parse the body for incoming post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors())

app.use(express.static('client/dist'));

// API Routes
app.use('/api', require('./middleware/invalidBody'), apiRoutes)

// Application
app.use('/', (req, res) => {
  res.status(200).sendFile('client/dist/index.html', {root: __dirname })
});

app.use((error, req, res, next) => {
  const { errorResponse } = require('./util/responses');
  errorResponse(error.statusCode, error.message, res);
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
