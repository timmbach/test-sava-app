import React from 'react'
import styles from "./NotFound.module.css";
import NotFoundImg from "../../assets/svg/notFound.svg"

const NotFound = () => {
  return (
    <div className={styles.notFound_wrapper}>
      <div className={styles.img_wrapper}>
        <img src={NotFoundImg} alt="" />
      </div>
      <div className={styles.notFound_text_wrapper}>
        <h2>404</h2>
        <p className={styles.text_big}>Looks like you're lost</p>
        <p className={styles.text_small}>The page you're looking for is unavailable!</p>

        <a href="/" className={styles.notFound_btn}>GO TO HOME -{">"}</a>
      </div>
    </div>
  )
}

export default NotFound