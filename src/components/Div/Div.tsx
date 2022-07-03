import React from 'react'
import { IDivProps } from '../../models/props/DivProps.model'
import styles from './Div.module.css'

const Div = ({ children, divCreated, ...props}: IDivProps) => {

  return (
      <div className={styles['common']} {...props}>{children}</div>
  )
}

export default Div