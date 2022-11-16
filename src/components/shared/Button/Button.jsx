import React from 'react'
import styles from './Button.module.css'

export const Button = ({ text, status }) => {
  return (
    <button type='button' disabled={status} className={styles.btn}>
      {text || 'Upload'}
    </button>
  )
}
