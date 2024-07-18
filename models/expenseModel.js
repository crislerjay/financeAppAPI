const mongoose = require('mongoose')

const ExpenseSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, "Please enter ID"]
    },
    description: {
      type: String,
      required: [true, "Please enter product description"]
    },
    type: {
      type: String,
      required: [true, "Please select type"]
    },
    category: {
      type: String,
      required: [true, "Please select category"]
    },
    amount: {
      type: Number,
      required: true,
      default: 0
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
      get: v => v.toISOString().split('T')[0]
    },
  },
  {
    timestamps: true
  },
)

ExpenseSchema.set('toJSON', { getters: true });
ExpenseSchema.set('toObject', { getters: true });

const Expense = mongoose.model("Expense", ExpenseSchema)

module.exports = Expense