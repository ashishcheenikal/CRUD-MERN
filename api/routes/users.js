const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')
const paginatedResults = require('../middleware/middleware')
const Book = require('../models/books')


router.get('/getAllBooks',paginatedResults.paginatedResults(Book),userController.getAllBooks)
router.post('/addBook',userController.addBook)
router.get('/detailBook/:id',userController.detailBook)
router.post('/editBook/:id',userController.editBook)
router.post('/changeStatus/:id',userController.changeStatus)

module.exports = router;  