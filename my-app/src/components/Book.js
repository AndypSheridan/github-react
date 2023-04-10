import React from 'react'
import RenderingLists from './RenderingLists'

function Book() {

    const books = [
        {
            title: "to kill a mockingbird",
            author: "harper lee",
            pages: 281
        },
        {
            title: "the great gatsby",
            author: "f. scott fitzgerald",
            pages: 218
        },
        {
            title: "the catcher in the rye",
            author: "j.d. salinger",
            pages: 234
        }
    ]

    return (
        <div>
            {
                books.map(book => {
                    return <div>
                        <h5>Title: {book.title.toUpperCase()}</h5>
                        <p>Author: {book.author}</p>
                        <p>Number of pages: {book.pages}</p>
                    </div>

                })
            }
        </div>
    )
}

export default Book