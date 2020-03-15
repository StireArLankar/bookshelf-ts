import React, { useState, useEffect } from 'react'
import Star from '../star'
import style from './rating.module.scss'

interface IProps {
  value: number | undefined
  editing?: boolean
  onDataChange?: (name: string, value: number) => void
}

const Rating = (props: IProps) => {
  const { value = 0, editing, onDataChange } = props
  const [hoverRating, setHoverRating] = useState(value)

  useEffect(() => {
    setHoverRating(value)
  }, [value])

  const onClick = (newValue: number) => {
    onDataChange && onDataChange(`rating`, newValue)
  }

  const onMouseEnter = (newValue: number) => {
    if (!editing) {
      return
    }
    setHoverRating(newValue)
  }

  const onMouseLeave = () => {
    if (!editing) {
      return
    }
    setHoverRating(value)
  }

  const renderStars = () => {
    const arr = [1, 2, 3, 4, 5]
    return arr.map((num) => (
      <Star
        key={num}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        value={num}
        active={hoverRating >= num}
        disabled={!editing}
      />
    ))
  }

  return <div className={style.wrapper}>{renderStars()}</div>
}

export default Rating
