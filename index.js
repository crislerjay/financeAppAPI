const express = require('express')
const mongoose = require('mongoose')
const expenseRoute = require('./routes/expense.route')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes
app.use('/api/expenses', expenseRoute)

// connect to mongoose
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    })
  })
  .catch(() => {
    console.log('connection failed!');
  })
