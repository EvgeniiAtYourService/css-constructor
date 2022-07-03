import React from 'react'
import { ISuperButtonProps } from '../../../models/props/SuperButtonProps.model'
import styles from './SuperButton.module.css'   
import buildClassNames from 'classnames'

const SuperButton = ({ children, disabled, ...props }: ISuperButtonProps) => {

  const classNames = buildClassNames(styles['btn-grad'], {
    [styles['btn-disabled']]: disabled,
    'cursor-deafult': disabled,
  })

  return (
    <button className={classNames} {...props}>{children}</button>
  )
}

export default SuperButton