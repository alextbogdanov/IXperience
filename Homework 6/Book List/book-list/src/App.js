import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  const [books, setBooks] = useState([]);

  function createBook(book) {
    let newBooks = [...books, book];
    setBooks(newBooks);
  }

  function editBook(book) {
    
  }

  function deleteBook(book) {
    let newBooks = books.filter((b) => {
      return b.id !== book.id;
    })

    setBooks(newBooks);
  }

  return (
    <div className="container mt-5">
      <div className="card p-5">
        <h1>Add Book:</h1>
        <Form createBook={createBook} />
        <Table books={books} editBook={editBook} deleteBook={deleteBook} />
      </div>
    </div>
  );
}

export default App;
