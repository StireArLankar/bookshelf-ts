import React, { useState, useContext, useEffect } from 'react'
import BookForm from '../components/book-form'
import BookContext, { IBook } from 'Context/book-context'
import { RouteComponentProps } from 'react-router'

interface IProps extends RouteComponentProps<MatchParams> {}

type MatchParams = {
  id: string
}

const Book = (props: IProps) => {
  const [book, setBook] = useState<IBook | null>(null)
  const context = useContext(BookContext)
  const id = props.match.params.id

  useEffect(() => {
    const temp = context.books.find((item) => Number(item.id) === Number(id))
    temp && setBook(temp)
  }, [context.books, id])

  return book && <BookForm data={book} history={props.history} />
}

export default Book
