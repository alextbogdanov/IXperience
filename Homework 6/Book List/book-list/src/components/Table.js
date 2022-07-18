import React from 'react'
import TableRow from './TableRow'

export default function Table() {
  return (
    <table className="table mt-5">
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <TableRow title="How to Javascript" author="Mr Anonymous" isbn="92187392387409283308" />
        </tbody>
    </table>
  )
}
