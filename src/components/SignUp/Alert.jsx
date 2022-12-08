import React from 'react'
import styles from './signup.module.css'

const Alert = ({message}) => {
  return (
    <div className={styles.alert}>
        {message}
    </div>
  )
}

export default Alert