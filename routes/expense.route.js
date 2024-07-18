const express = require('express')
const router = express.Router()
const { addExpense, getAllExpenses, getExpense, updateExpense, deleteExpense, getCategory, getType, getByUser } = require('../controllers/expense.controller')

//add a Expense
router.post('/', addExpense)

//get all Expense
router.get('/', getAllExpenses)

//get single Expense
router.get('/:id', getExpense)

//update a Expense
router.put('/:id', updateExpense)

//delete a Expense
router.delete('/:id', deleteExpense)

//get all user data
router.get('/user/:userId', getByUser)

//filter by category
router.get('/user/:userId/category/:querydata', getCategory)

//filter by type
router.get('/user/:userId/type/:querydata', getType)



module.exports = router