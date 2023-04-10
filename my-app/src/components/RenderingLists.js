import React from 'react'
import Book from './Book'

function RenderingLists() {

  const bookList = [
    "to kill a mockingbird",
    "the great gatsby",
    "the catcher in the rye"
  ]

  return (
    <div>
      {bookList.map(book => {
        return <h2>{book}</h2>
      })}
      <hr />
      <Book />
    </div>
  )
}

export default RenderingLists