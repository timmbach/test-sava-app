import React from 'react'
import styles from './Button.module.css'

export const Button = ({ text = 'Upload', onChange, manualStyle = styles.btn }) => {
  return (
    <div className={styles.button_shared}>
      <label htmlFor='server-upload' className={manualStyle}>
        {text}
      </label>
      {/* multiple='multiple' */}
      <input type='file' id='server-upload' accept='image/*' onChange={onChange} />
    </div>
  )
}
