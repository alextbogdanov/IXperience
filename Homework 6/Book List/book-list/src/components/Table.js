import React from 'react'
import TableRow from './TableRow'

export default function Table(props) {
  function onBookEdit(book) {
    props.editBook(book);
  }

  function onBookDelete(book) {
    props.deleteBook(book);
  }

  return (
    <table className="table mt-5">
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
          {props.books.map((book) => {
            return <TableRow key={book.id} book={book} onBookEdit={onBookEdit} onBookDelete={onBookDelete} />
          })}
        </tbody>
    </table>
  )
}
