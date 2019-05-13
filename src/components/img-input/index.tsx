import React from 'react'
import style from './img-input.module.scss'
import cn from 'classnames'

interface IProps {
  name: string,
  editing: boolean,
  onDataChange: (name: string, url: any) => void,
  img: string | undefined
}

const ImgInput = (props: IProps) => {
  const { name, editing, onDataChange, img } = props
  const onImgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target
    const reader = new FileReader()

    reader.onload = () => {
      const url = reader.result
      onDataChange(name, url)
    }

    input.files && reader.readAsDataURL(input.files[0])
  }

  const noImage = process.env.PUBLIC_URL + '/no-img.svg'

  return (
    <div className={ style.wrapper }>
      <label className={ cn(style.label, { [style.active]: editing }) }>
        <input
          type='file'
          name='img'
          id='img-input'
          className={ style.input }
          onChange={ onImgUpload }
          disabled={ !editing }
        />
      </label>
      <img src={ img || noImage } alt={ name } className={ style.img }/>
    </div>
  )
}

export default ImgInput
