import React from 'react'
import { IPropertiesWindowProps } from '../../models/props/PropertiesWindowProps.model'
import styles from './PropertiesWindow.module.css'

const PropertiesWindow = ({ propertiesWindowShown, showPropertiesWindow }: IPropertiesWindowProps) => {
  if (propertiesWindowShown) {
    return (
      <div className={styles['properties-window']}>
        <div className={styles['search-field-wrapper']}>
          <span className={styles['x']}>&#10005;</span>
          <input type="text" className={styles['search-field']} />
        </div>
      </div>
    )
  }
  return <>13</>
}

export default PropertiesWindow