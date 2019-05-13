import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../rating'
import style from './book-preview.module.scss'
import { IBook } from 'Context/book-context'

interface IProps {
  book: IBook
}

const BookPreview = (props: IProps) => {
  const { book: { id, rating, title } } = props
  return (
    <Link to={ `/${id}` } className={ style.link }>
      <h3 className={ style.title }>{ title }</h3>
      { rating && <Rating value={ rating } /> }
    </Link>
  )
}

export default BookPreview
