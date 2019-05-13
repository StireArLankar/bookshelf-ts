import React from 'react'

export interface IBook {
  ISBN: string,
  author: string,
  cover?: string,
  description: string,
  rating?: number,
  title: string,
  year?: string,
  id?: number
}

interface IContext {
  books: IBook[],
  addBook: (data: IBook) => void,
  updateBook: (data: IBook, id: number) => void
}

const BookContext = React.createContext<IContext>({
  books: [
    {
      ISBN: '',
      author: '',
      cover: 'localhost:3000/img/1.jpg',
      description: '',
      rating: 3,
      title: '',
      year: '2000'
    },
    {
      ISBN: '',
      author: '',
      description: '',
      title: '',
      year: '2000'
    }
  ],
  addBook: () => undefined,
  updateBook: () => undefined
})

export default BookContext
