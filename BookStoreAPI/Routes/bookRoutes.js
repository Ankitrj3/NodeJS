const express = require('express');
const { getAllBooks, getBookById, createBook, updateBook, deleteBook } = require('../Controllers/bookController');
const { get } = require('mongoose');
//create express router
const router = express.Router();

//all the routes related to books will be here
router.get('/get', getAllBooks);
router.get('/get/:id', getBookById);
router.post('/add', createBook);
router.put('/update/:id', updateBook);
router.delete('/delete/:id', deleteBook);

module.exports = router;
