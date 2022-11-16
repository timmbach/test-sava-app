import React from 'react'
import styles from './Button.module.css'

export const Button = ({ text = 'Upload', manualStyle = styles.btn }) => {
  return (
    <div className={styles.button_shared}>
      <label htmlFor='upload' className={manualStyle}>
        {text}
      </label>
      <input type='file' id='upload' accept='image/*' />
    </div>
  )
}
