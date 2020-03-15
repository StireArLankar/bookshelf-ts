import React from 'react'
import style from './star.module.scss'
import cn from 'classnames'

interface IProps {
  value: number
  onClick: (value: number) => void
  onMouseEnter: (value: number) => void
  onMouseLeave: () => void
  active: boolean
  disabled: boolean
}

const Star = (props: IProps) => {
  const { value, onClick, onMouseEnter, onMouseLeave, active, disabled } = props

  const onButtonClick = () => onClick(value)
  const onButtonEnter = () => onMouseEnter(value)
  const onButtonLeave = () => onMouseLeave()

  return (
    <button
      type='button'
      value={value}
      onClick={onButtonClick}
      className={cn(style.button, { [style.active]: active })}
      disabled={disabled}
      onMouseEnter={onButtonEnter}
      onMouseLeave={onButtonLeave}
    >
      <svg height='25' width='23' viewBox='0 0 20 19' className={style.star}>
        <polygon
          points='9.9, 0, 3.3, 20.7, 19.8, 7.5, 0, 7.5, 16.5, 20.7'
          style={{ fillRule: `nonzero` }}
        />
      </svg>
    </button>
  )
}

export default Star
