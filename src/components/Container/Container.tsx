import React, { ReactElement } from 'react'
import { ContainerInterface } from './interface'
import './style.css'

const Container = ({ children, className }: ContainerInterface): ReactElement => {
  return (
    <div className={`relative ${className}`}>
      <div className='px-5'>
        { children }
      </div>
    </div>
  )
}

export default Container
