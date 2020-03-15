import React, { useContext } from 'react'
import BookList from '../components/book-list'
import BookContext from 'Context/book-context'

const Main = () => {
  const context = useContext(BookContext)

  return (
    <div>
      <BookList books={context.books} />
    </div>
  )
}

export default Main
