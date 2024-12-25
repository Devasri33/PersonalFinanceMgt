const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const accountRoutes = require('./server/routes/accountRoutes'); // Adjust path if necessary

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/accounts', accountRoutes);  // Adjust routes if necessary

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/finance-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error: ', err));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
