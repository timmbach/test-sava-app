import React, { useState } from 'react'
import hero from '../../../assets/no-profile-lady.png'
import { useGlobalStore } from '../../../contexts/GlobalStore'
import styles from './NoProfile.module.css'
import NoProfileUploadModal from './NoProfileUploadModal'

const NoProfileBody = () => {
  const [toggleModal, setToggleModal] = useState(false)

  const { uploadError } = useGlobalStore()

  const closeModal = () => {
    setToggleModal(prev => !prev)
  }

  return (
    <div className={styles.no_profile_body}>
      {uploadError.error && (
        <div className={styles.error} style={{ backgroundColor: uploadError.color }}>
          {uploadError.text}
        </div>
      )}
      <section>
        <img src={hero} alt='lady-avatar' />
        <aside>
          <h2>We need to identify you!</h2>
          <p>
            Please upload a profile picture to access all our features. This will help us with storing and automatically
            sorting your data into categories.
          </p>
          <div>
            <label className={styles.btn} onClick={() => setToggleModal(prev => !prev)}>
              Upload profile picture
            </label>
          </div>
        </aside>
      </section>

      {toggleModal && <NoProfileUploadModal closeModal={closeModal} />}
    </div>
  )
}

export default NoProfileBody
