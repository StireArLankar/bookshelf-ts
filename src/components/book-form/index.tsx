import React, { useEffect, useState, useContext } from 'react'
import TextInput from '../text-input'
import ImgInput from '../img-input'
import BookContext, { IBook } from 'Context/book-context'
import Rating from '../rating'
import Controls from './controls'
import style from './book-form.module.scss'
import {
  authorValidation,
  descValidation,
  ISBNValidation,
  titleValidation,
  yearValidation
} from './validations'

import { History } from 'history'

interface IProps {
  data?: IBook,
  creating?: boolean,
  history: History
}

const nullData = {
  title: '',
  description: '',
  author: '',
  ISBN: '',
  year: '',
  cover: undefined,
  id: 0,
  rating: undefined
}

const BookForm = (props: IProps) => {
  const { data = nullData, creating = false, history } = props

  const [editing, setEditing] = useState(creating)
  const [state, setState] = useState(data)
  const [valid, setValid] = useState({
    title: true,
    description: true,
    ISBN: true,
    author: true,
    year: true
  })
  const context = useContext(BookContext)

  useEffect(() => {
    setState(data)
  }, [data])

  const onDataChange = (name: string, value: string | number) => {
    const temp = { ...state, [name]: value }
    setState(temp)
  }

  const validateFields = () => {
    return {
      author: authorValidation(state.author),
      description: descValidation(state.description),
      ISBN: ISBNValidation(state.ISBN),
      title: titleValidation(state.title),
      year: state.year ? yearValidation(state.year) : true
    }
  }

  const onAdd = () => {
    const checkObj = validateFields()
    const error = Object.values(checkObj).some((check) => check === false)
    if (!error) {
      context.addBook(state)
      history.push(`/`)
    } else {
      setValid(checkObj)
    }
  }

  const onUpdate = () => {
    const checkObj = validateFields()
    const error = Object.values(checkObj).some((check) => check === false)
    if (!error) {
      state.id && context.updateBook(state, state.id)
      history.push(`/`)
    } else {
      setValid(checkObj)
    }
  }

  return (
    <form className={ style.form }>
      <ImgInput
        img={ state.cover }
        name='cover'
        editing={ editing }
        onDataChange={ onDataChange }
      />
      <TextInput
        name='title'
        data={ state.title }
        editing={ editing }
        onDataChange={ onDataChange }
        valid={ valid.title }
        placeholder='Title'
      />
      <TextInput
        name='description'
        data={ state.description }
        editing={ editing }
        onDataChange={ onDataChange }
        valid={ valid.description }
        placeholder='Description'
      />
      <TextInput
        name='author'
        data={ state.author }
        editing={ editing }
        onDataChange={ onDataChange }
        valid={ valid.author }
        placeholder='Author'
      />
      <TextInput
        name='ISBN'
        data={ state.ISBN }
        editing={ editing }
        onDataChange={ onDataChange }
        valid={ valid.ISBN }
        placeholder='1234'
      />
      <TextInput
        name='year'
        data={ state.year }
        editing={ editing }
        onDataChange={ onDataChange }
        valid={ valid.year }
        placeholder='2000'
      />
      <Rating
        value={ state.rating }
        editing={ editing }
        onDataChange={ onDataChange }
      />
      <Controls
        creating={ creating }
        editing={ editing }
        setEditing={ setEditing }
        onAdd={ onAdd }
        onUpdate={ onUpdate }
      />
    </form>
  )
}

export default BookForm
