import React from 'react'
import { IButtonProps } from '../../../models/props/ButtonProps.model'
import styles from './SuperButton.module.css'   

const SuperButton = ({ children }: IButtonProps) => {
  return (
      <button className={styles['btn-grad']}>{children}</button>
  )
}

export default SuperButton