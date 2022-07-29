import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Table from './components/Table';

import bookService from './services/book.service';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, [])

  async function getBooks() {
    try {
      const books = await bookService.readBooks()

      setBooks(books);
    } catch(err) {
      console.log(err);
    }
  }

  async function createBook(book) {
    try {
      book = await bookService.createBook(book);

      let newBooks = [...books, book];
      setBooks(newBooks);
    } catch(err) {
      console.log(err);
    }
  }

  async function deleteBook(book) {
    try {
      await bookService.deleteBook(book);

      let newBooks = books.filter((b) => {
        return b.id !== book.id;
      })

      setBooks(newBooks);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="container mt-5">
      <div className="card p-5">
        <h1>Add Book:</h1>
        <Form createBook={createBook} />
        <Table books={books} deleteBook={deleteBook} />
      </div>
    </div>
  );
}

export default App;