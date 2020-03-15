import React from 'react'
import style from './book-form.module.scss'

interface IProps {
  editing: boolean
  creating: boolean
  setEditing: (arg: boolean) => void
  onAdd: () => void
  onUpdate: () => void
}

const Controls = (props: IProps) => {
  const { editing, creating, setEditing, onAdd, onUpdate } = props

  if (creating) {
    return (
      <button type='button' onClick={onAdd} className={style.btn}>
        Добавить книгу
      </button>
    )
  } else if (editing) {
    return (
      <button type='button' onClick={onUpdate} className={style.btn}>
        Сохранить изменения
      </button>
    )
  } else {
    const onSetEditing = () => setEditing(true)
    return (
      <button type='button' onClick={onSetEditing} className={style.btn}>
        Редактировать книгу
      </button>
    )
  }
}

export default Controls
