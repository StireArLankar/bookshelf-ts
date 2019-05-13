import React from 'react'
import BookForm from '../components/book-form'
import { History } from 'history'

interface IProps {
  history: History
}

const AddBook = (props: IProps) => {
  return <BookForm creating={ true } history={ props.history } />
}

export default AddBook
