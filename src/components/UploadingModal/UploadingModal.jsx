import React, { useState } from 'react'
import { useGlobalStore } from '../../contexts/GlobalStore'
import styles from './UploadingModal.module.css'
import { BarLoader as Loader } from 'react-spinners'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'

const UploadingModal = () => {
  const [openModal, setOpenModal] = useState(false)

  const { localImages, uploading } = useGlobalStore()

  const handleModal = () => {
    setOpenModal(prev => !prev)
  }

  return (
    <div className={styles.uploading_modal}>
      <div className={styles.header}>
        <h3>Current Uploads</h3>
        {openModal ? (
          <SlArrowDown className={styles.arrow} onClick={handleModal} />
        ) : (
          <SlArrowUp className={styles.arrow} onClick={handleModal} />
        )}
      </div>
      <Loader
        loading={uploading}
        width={270}
        height={8}
        aria-label='Loading Spinner'
        data-testid='loader'
        speedMultiplier='0.8'
        color='#4042d0'
        className={styles.loader}
      />
      {openModal && (
        <div className={styles.imgUpModal}>
          {localImages.map(({ id, imageObj }) => {
            return (
              <div key={id} className={styles.rel}>
                <img src={URL.createObjectURL(imageObj)} alt={id} />
                <div className={styles.uploadloading}>
                  <h4>{imageObj.name}</h4>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default UploadingModal
