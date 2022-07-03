import React from 'react'
import { IDivProps } from '../../models/props/DivProps.model'
import styles from './Div.module.css'
import gear from '../../assets/gear.svg'
import PropertiesWindow from '../Properties/PropertiesWindow'

const Div = ({ children, divCreated, propertiesWindowShown, showPropertiesWindow , ...props}: IDivProps) => {

  const handleTogglePropertiesWindow = () => {
    showPropertiesWindow(!propertiesWindowShown)
  }

  return (
    <div className={styles['common']} {...props}>
      {children}
      <img src={gear} alt="Gear" className={styles['gear-icon']} onClick={handleTogglePropertiesWindow} />
      { propertiesWindowShown && (
        <PropertiesWindow propertiesWindowShown={propertiesWindowShown} showPropertiesWindow={showPropertiesWindow} />
      ) }
    </div>
  )
}

export default Div