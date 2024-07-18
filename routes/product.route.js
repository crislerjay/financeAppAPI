const express = require('express')
const router = express.Router()
const { addProduct, getProducts, getProduct, updateProduct, deleteProduct } = require('../controllers/product.controller.js')

//add a product
router.post('/', addProduct)

//get all product
router.get('/', getProducts)

//get single product
router.get('/:id', getProduct)

//update a product
router.put('/:id', updateProduct)

//delete a product
router.delete('/:id', deleteProduct)

module.exports = router