import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import BookContext, { IBook } from 'Context/book-context'
import Nav from '../components/nav'
import Main from '../pages/main'
import AddBook from '../pages/add-book'
import Book from '../pages/book'
import style from './app.module.scss'

const App = () => {
  const [ books, setBooks ] = useState<IBook[] | []>([])
  const [ currentId, setCurrentId ] = useState(0)

  const fetchBooks = async () => {
    const url = process.env.PUBLIC_URL + '/books.json'
    const { newBooks } = await fetch(url).then((res) => res.json())
    return newBooks
  }

  const getLocalBooks = () => {
    const cachedHits = localStorage.getItem(`books`)
    const temp = cachedHits ? JSON.parse(cachedHits) : null
    return temp
  }

  const addBook = (data: IBook) => {
    const temp = [ ...books ]
    const newBook = { ...data, id: currentId }
    temp.push(newBook)
    setCurrentId(currentId + 1)
    setBooks(temp)
    localStorage.setItem(`books`, JSON.stringify(temp))
  }

  const updateBook = (data: IBook, id: number) => {
    const index = books.findIndex((book) => book.id === id)
    const temp = [
      ...books.slice(0, index),
      data,
      ...books.slice(index + 1)
    ]
    setBooks(temp)
    localStorage.setItem(`books`, JSON.stringify(temp))
  }

  useEffect(() => {
    const getBooks = async () => {
      let newBooks = getLocalBooks()
      if (!newBooks) {
        newBooks = await fetchBooks()
      }

      setBooks(newBooks)
      const idx = newBooks[newBooks.length - 1].id + 1
      setCurrentId(idx)
    }

    getBooks()
  }, [])

  return (
    <BookContext.Provider value={ {
      books,
      updateBook,
      addBook
    } }>
      <div className={ style.wrapper }>
        <header className={ style.header }>
          <Nav />
        </header>
        <main>
          <Switch>
            <Route exact={ true } path='/' component={ Main } />
            <Route path='/add-book' component={ AddBook } />
            <Route path='/:id' component={ Book } />
          </Switch>
        </main>
      </div>
    </BookContext.Provider>
  )
}

export default App
