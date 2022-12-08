import React from 'react'
import styles from './Modal.module.css'

export const Modal = ({ title, text, action1, action2, onClick1, onClick2, input_type, onChange, refItem }) => {
  return (
    <aside className={styles.modal_wrapper}>
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
        <div className={styles.btn_div}>
          <button onClick={onClick1}>{action1}</button>

          <div>
            <button onClick={onClick2}>{action2}</button>
            {input_type && (
              <input
                type='file'
                id='local-upload'
                accept='image/*'
                style={{ display: 'none' }}
                ref={refItem}
                onChange={onChange}
              />
            )}
          </div>
        </div>
      </div>
    </aside>
  )
}
