import React, { SyntheticEvent, useMemo, ReactElement, useCallback } from 'react'
import iconEye from '../../assets/icon/icon-eye.svg'
import iconEyeOff from '../../assets/icon/icon-eye-off.svg'

type IInput = {
  type?: 'password' | 'email' | 'text' | 'search'
  onClickIcon?: () => void
  isVisible?: boolean
  required?: boolean
  customStyle?: string
  value: string
  onChange: (event: SyntheticEvent<HTMLInputElement, Event>) => void
  autoComplete?: string
  showIcon?: boolean
  onBlur?: () => void
  placeholder?: string
  onEnter?: () => void
}
export const Input = ({
  value,
  type = 'email',
  onClickIcon,
  onChange,
  isVisible = false,
  customStyle,
  required = false,
  autoComplete,
  showIcon,
  onBlur,
  placeholder,
  onEnter,
}: IInput): ReactElement => {
  const inputClass = useMemo(() => {
    return customStyle || 'py-2 px-6 rounded-md'
  }, [customStyle])

  const handleEnter = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onEnter && onEnter()
      }
    },
    [onEnter],
  )

  const showPassword = useMemo((): string => {
    return isVisible ? iconEye : iconEyeOff
  }, [isVisible])

  return (
    <div>
      <div
        className={`relative w-full flex items-center border overflow-hidden duration-300 ${inputClass}`}
      >
        <input
          type={type}
          className='focus:outline-none flex-1 text-center text-sm placeholder:italic'
          value={value}
          onChange={onChange}
          required={required}
          autoComplete={autoComplete}
          onBlur={onBlur}
          placeholder={placeholder}
          onKeyUp={handleEnter}
        ></input>
        {type === 'password' && (
          <div
            className='absolute right-1 top-1/2 bg-white -translate-y-1/2 px-2 cursor-pointer w-8 h-full'
            onClick={onClickIcon}
          >
            <img src={showPassword} className='w-full h-full' draggable={false} />
          </div>
        )}
        {showIcon &&
          (type === 'text' ? (
            <div
              className='absolute right-1 top-1/2 bg-white -translate-y-1/2 px-2 cursor-pointer w-8 h-full'
              onClick={onClickIcon}
            >
              <img src={showPassword} className='w-full h-full' draggable={false} />
            </div>
          ) : (
            ''
          ))}
      </div>
    </div>
  )
}

export default Input