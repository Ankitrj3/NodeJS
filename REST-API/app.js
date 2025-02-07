const express = require('express');
const app = express();

//Middleware
app.use(express.json());

let books = [
    {
        id: 1,
        title: "Book 1",    
    },
    {
        id: 2,
        title: "Book 2",    
    },
    {
        id: 3,
        title: "Book 3",    
    }
];



app.get('/',(req,res)=>{
    res.json({
        message: "Welcome to our Bookstore"
    })
});
//get all books
app.get('/books',(req,res)=>{
    res.json(books);
})
//get single book
app.get('/books/:id',(req,res)=>{
    const book = books.find((item)=> item.id === parseInt(req.params.id));
    if(book){
        res.status(200).json(book);
    }else{
        res.status(404).json({
            message: "Book not found"
        })
    }
});

//create book
app.post('/add-book',(req,res)=>{
    const book = {
        id: Math.floor(Math.random()*1000),
        title: req.body.title
    }
    books.push(book);
    res.status(201).json({
        data: book,
        message: "Book created"
    });

});

//update book
app.put('/update-book/:id',(req, res)=>{
    const CurrentBook = books.find((item)=>item.id === parseInt(req.params.id));
    if(CurrentBook){
        CurrentBook.title = req.body.title || CurrentBook.title;
        res.status(200).json({
            message: `Book updated ID ${req.params.id} updated successfully`,
            data : CurrentBook
        })
    }else{
        res.status(404).json({
            message: "Book not found"
        })
    }
});

//delete book
app.delete('/delete-book/:id',(req,res)=>{
    const CurrentBook = books.find((item)=>item.id === parseInt(req.params.id));
    if(CurrentBook){
        const deleteBook = books.splice(CurrentBook,1);
        //splice means remove argument is index, and 1 is how many elements to remove
        res.status(200).json({
            message: `Book ID ${req.params.id} deleted successfully`,
            data : deleteBook
        })
    }else{
        res.status(404).json({
            message: "Book not found"
        })
    }
})

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
