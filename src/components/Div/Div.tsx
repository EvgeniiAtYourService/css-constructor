import React from 'react'
import { IDivProps } from '../../models/props/DivProps.model'
import styles from './Div.module.css'
import gear from '../../assets/gear.svg'

const Div = ({ children, divCreated, ...props}: IDivProps) => {

  return (
    <div className={styles['common']} {...props}>
      {children}
      <img src={gear} alt="Gear" className={styles['gear-icon']} />
    </div>
  )
}

export default Div