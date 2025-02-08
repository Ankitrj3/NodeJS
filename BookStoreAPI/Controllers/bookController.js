const Book = require("../models/Book");

const getAllBooks = async (req, res)=>{
    try{
        const books = await Book.find();
        res.status(200).json({
            message: "All books fetched successfully",
            data: books
        })
    }catch(err){
        console.log("Error in getting books", err);
        res.status(500).json({
            message: "Error in getting books",
            error: err.message
        })
    }
}
const getBookById = async (req, res)=>{
    try{
        const book = await Book.findById(req.params.id);
        if(book){
            res.status(200).json({
                message: "Book fetched successfully",
                data: book
            })
        }
    }catch(err){
        console.log("Error in getting book by id", err);
        res.status(500).json({
            message: "Error in getting book by id",
            error: err.message
        })
    }
    
}
const createBook = async (req, res) => {
    try {
      const newBookFormData = req.body;
      const newBook = await Book.create(newBookFormData);
      
      if (newBook) {
        res.status(201).json({
          message: "New book created successfully",
          data: newBook
        });
      }
  
    } catch (err) {
      console.log("Error in creating book", err);
      res.status(500).json({ message: "Error creating book", error: err.message });
    }
  };
  
const updateBook = async (req, res)=>{
    try {
        const updatedBookFormData = req.body;
        const getCurrentBookID = req.params.id;
        const updatedBook = await Book.findByIdAndUpdate(
          getCurrentBookID,
          updatedBookFormData,
          {
            new: true,
          }
        );
    
        if (!updatedBook) {
          res.status(404).json({
            success: false,
            message: "Book is not found with this ID",
          });
        }
    
        res.status(200).json({
          success: true,
          message: "Book updated successfully",
          data: updatedBook,
        });
    }catch(err){
        console.log("Error in updating book", err);
        res.status(500).json({
            message: "Error in updating book",
            error: err.message
        })
    }
}
const deleteBook = async (req, res)=>{
    try {
        const getCurrentBookID = req.params.id;
        const deletedBook = await Book.findByIdAndDelete(getCurrentBookID);
    
        if (!deletedBook) {
          res.status(404).json({
            success: false,
            message: "Book is not found with this ID",
          });
        }
    
        res.status(200).json({
          success: true,
          data: deletedBook,
        });
      } catch (e) {
        console.log(e);
        res.status(500).json({
          success: false,
          message: "Something went wrong! Please try again",
        });
      }
    };
module.exports = {getAllBooks, getBookById, createBook, updateBook, deleteBook};