import React from 'react'
import BookPrewiew from '../book-preview'
import { IBook } from 'Context/book-context'

interface IProps {
  books: IBook[]
}

const BookList = (props: IProps) => {
  const { books } = props

  const renderList = () =>
    books.map((book) => (
      <li key={book.id}>
        <BookPrewiew book={book} />
      </li>
    ))

  return <ul className='list'>{renderList()}</ul>
}

export default BookList
