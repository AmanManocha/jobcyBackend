const { authRoutes } = require('../jobcyBackend/src/routes/userRoute');
const cors = require('cors')

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3001;
const db = require('../jobcyBackend/src/config/mongoConnection');
// Middleware
app.use(cors())
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
