const mongoose = require("mongoose");
const dbconnect = require("./dbconfig");
const Book = require("./book");


const insertBook = async () => {
    try {
        await dbconnect(); //connect db
        const newBook1 = new Book( 
            { title: "Nature",
             author: "janish", 
             price: 450 }
            );
        const newBook2 = new Book(
            { title: "friends", 
                author: "Naveen", 
                price: 350 }
        );

        await newBook1.save();
        await newBook2.save();

        console.log("Books added successfully");
    } catch (error) {
        console.log("Error adding books", error);
    } finally {
        mongoose.connection.close();
    }
};


const getAllBooks = async () => {
    try {
        await dbconnect();
        let books = await Book.find();

        
        books = books.sort((a, b) => b.price - a.price);

        const filteredBooks = books.filter((book) => book.price > 400);

        const bookTitles = filteredBooks.map((book) => book.title);

        console.log("All Books:", books);
        console.log("Filtered Books (Price > 400):", filteredBooks);
        console.log("Book Titles:", bookTitles);
    } catch (error) {
        console.log("Error fetching books", error);
    } finally {
        mongoose.connection.close();
    }
};


const getBookByTitle = async () => {
    try {
        await dbconnect();
        const book = await Book.findOne({ title: "Nature" }); //search by title
       
        console.log(book);
    } catch (error) {
        console.log("Error fetching book", error);
    } finally {
        mongoose.connection.close();
    }
};


const getBooksByAuthor = async () => {
    try {
        await dbconnect();
        const books = await Book.find({ author: "janish" }); //search by authorname
     
        console.log(books);
    } catch (error) {
        console.log("Error fetching books", error);
    } finally {
        mongoose.connection.close();
    }
};


const deleteBookById = async () => {
    try {
        await dbconnect();
        const book = await Book.findByIdAndDelete("67b5bbf0ff821863081da8c8");
        if (!book) console.log("Book not found");
        console.log("Book deleted successfully", book);
    } catch (error) {
        console.log("Error deleting book", error);
    } finally {
        mongoose.connection.close();
    }
};


//  insertBook();
getAllBooks();
// getBookByTitle();
// getBooksByAuthor();
// deleteBookById();
