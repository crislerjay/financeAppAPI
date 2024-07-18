const Expense = require('../models/expenseModel')

//add a expense
const addExpense = async (req, res) => {
  try {
    const expense = await Expense.create(req.body)
    res.status(200).json(expense)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

//get all expense
const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({})
    res.status(200).json(expenses)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

//get single expense
const getExpense = async (req, res) => {
  try {
    const { id } = req.params
    const expense = await Expense.findById(id)
    res.status(200).json(expense)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

//update a expense
const updateExpense = async (req, res) => {
  try {
    const { id } = req.params
    const expense = await Expense.findByIdAndUpdate(id, req.body)

    if (!expense) {
      return res.status(404).json({message: 'item not found!'})
    }

    const updatedExpense = await Expense.findById(id)
    res.status(200).json(updatedExpense)

  } catch (error) {
    res.status(500).json({message: error.message})
  }
}


//delete a expense
const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params
    const expense = await Expense.findByIdAndDelete(id)

    if (!expense) {
      return res.status(404).json({message: 'item not found!'})
    }

    res.status(200).json({message: 'item deleted successfully!'})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

//get by user
const getByUser = async (req, res) => {
  let query = req.params.userId 
  try {
    const expenses = await Expense.find({ userId: query, }).sort({createdAt:'desc'});
    if (expenses.length === 0) {
      return res.status(404).send('no records found')
    }
    res.status(200).json(expenses)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//filter by category
const getCategory = async (req, res) => {
  let queryId = req.params.userId 
  let query = req.params.querydata 
  try {
    const expenses = await Expense.find({ userId: queryId, category: query });
    if (expenses.length === 0) {
      return res.status(404).send('no records found')
    }
    res.status(200).json(expenses)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//filter by type
const getType = async (req, res) => {
  let queryId = req.params.userId 
  let query = req.params.querydata 
  try {
    const expenses = await Expense.find({ userId: queryId, type: query });
    res.status(200).json(expenses)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


//get by user with pagi
// const getByUser = async (req, res) => {
//   let query = req.params.userId
//   const page = parseInt(req.query.page) || 1;
//   const limit = parseInt(req.query.limit) || 1;

//   const startIndex = (page - 1) * limit;
//   const endIndex = page * limit;

//   const results = {};

//   if (endIndex < await Expense.countDocuments().exec()) {
//     results.next = {
//         page: page + 1,
//         limit: limit
//     };
//   }

//   if (startIndex > 0) {
//       results.previous = {
//           page: page - 1,
//           limit: limit
//       };
//   }

//   try {
//     const expenses = await Expense.find({ userId: query, }).limit(limit).skip(startIndex).exec();
//     if (expenses.length === 0) {
//       return res.status(404).send('no records found')
//     }
//     res.status(200).json(expenses)
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }

module.exports = {
  addExpense,
  getAllExpenses,
  getExpense,
  updateExpense,
  deleteExpense,
  getCategory,
  getType,
  getByUser,
}