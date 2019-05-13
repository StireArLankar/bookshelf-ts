import React, { useState, useEffect, ChangeEvent } from 'react'
import style from './text-input.module.scss'
import cn from 'classnames'

interface IProps {
  name: string,
  data: string | undefined,
  editing: boolean,
  onDataChange: (name: string, value: string) => void,
  valid: boolean,
  placeholder: string
}

const TextInput = (props: IProps) => {
  const { name, data, editing, onDataChange, valid, placeholder } = props
  const [ isValid, setIsValid ] = useState(true)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onDataChange(name, e.target.value)
    if (!isValid) setIsValid(true)
  }

  useEffect(() => {
    setIsValid(valid)
  }, [valid])

  return (
    <label className={ style.label }>
      <span className={ style.name }>{ name }</span>
      <input
        className={ cn(style.input, { [style.invalid]: !isValid, [style.active]: editing }) }
        type='text'
        name={ name }
        value={ data }
        disabled={ !editing }
        onChange={ onChange }
        placeholder={ placeholder }
        autoComplete='off'
      />
    </label>
  )
}

export default TextInput
