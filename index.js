const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
dotenv.config();

const app = express();

const errorHandler = require('./src/middleware/errorHandler');
const notFound = require('./src/middleware/notFound');
const tasksRoutes = require('./src/routes/tasksRoutes');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/tasks', tasksRoutes);

app.use(notFound);
app.use(errorHandler);

const _PORT = process.env.PORT || 4000;

// Database connection
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose
  .connect(DB)
  .then(() => console.log('Database connection successful!'))
  .catch((err) => console.log(err));

// Server
app.listen(_PORT, () => {
  console.log(`Server running at http://localhost:${_PORT}`);
});

module.exports = app;
