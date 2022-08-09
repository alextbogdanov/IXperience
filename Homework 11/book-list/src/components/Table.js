import React from 'react';

import TableRow from './TableRow';

export default function Table(props) {
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
            return <TableRow key={book.id} book={book} onBookDelete={props.deleteBook} />
          })}
        </tbody>
    </table>
  )
}
