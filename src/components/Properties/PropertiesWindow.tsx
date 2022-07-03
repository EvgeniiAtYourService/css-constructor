import React from 'react'
import { IPropertiesWindowProps } from '../../models/props/PropertiesWindowProps.model'
import styles from './PropertiesWindow.module.css'

const PropertiesWindow = ({ propertiesWindowShown, showPropertiesWindow }: IPropertiesWindowProps) => {
  if (propertiesWindowShown) {
    return <div className={styles['properties-window']}>Properties</div>
  }
  return <>13</>
}

export default PropertiesWindow