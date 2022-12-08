import React from 'react'
import styles from './category.module.css'

const ImageInstance = ({ id, url, title }) => {
  const handleDoubleClick = () => {
    window.open(url, '_self')
  }
  return (
    <div className={styles.image_card}>
      <img src={url} alt={title} onDoubleClick={handleDoubleClick} />
    </div>
  )
}

export default ImageInstance
