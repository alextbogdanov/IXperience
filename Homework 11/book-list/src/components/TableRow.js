import React, { useState } from 'react';

import Spinner from './Spinner';

export default function TableRow(props) {
  const [loading, setLoading] = useState(false);

  async function deleteBook(book) {
    setLoading(true);
    try {
      await props.onBookDelete(book);
    } catch(err) {
      console.log(err);
    }
    setLoading(false);
  }

  return (
    <tr>
        <td>{props.book.title}</td>
        <td>{props.book.author}</td>
        <td>{props.book.isbn}</td>
        <td>
            <button className="btn btn-danger" onClick={(e) => deleteBook(props.book)}>
              {loading ?
                <Spinner />
                :
                <>
                  Delete
                </>
              }
            </button>
        </td>
    </tr>
  );
}
