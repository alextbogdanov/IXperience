import React, { useState, useEffect } from 'react';

import bookService from '../services/book.service';

import Spinner from '../components/Spinner';
import Form from '../components/Form';
import Table from '../components/Table';

export default function BooksPage() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      getBooks();
    }, []);
  
    async function getBooks() {
      setLoading(true);
      try {
        const books = await bookService.readBooks()

        setBooks(books);
      } catch(err) {
        console.log(err);
      }
      setLoading(false);
    }
  
    async function createBook(book) {
      book = await bookService.createBook(book);
      let newBooks = [...books, book];
      setBooks(newBooks);
    }
  
    async function deleteBook(book) {
      await bookService.deleteBook(book);

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
        {loading ?
          <div className="text-center mt-4">
            <Spinner />
          </div>
          :
          <Table books={books} deleteBook={deleteBook} /> 
        }
      </div>
    </div>
  )
}
