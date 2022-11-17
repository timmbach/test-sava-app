import React, { useRef, useState } from 'react'
import styles from './NoProfile.module.css'
import { GrFormClose } from 'react-icons/gr'
import profile from '../../../assets/profile.jpg'
import pencil from '../../../assets/ph_pencil-simple.png'
import trash from '../../../assets/camera2.png'
import NoProfileWebcam from './NoProfileWebcam'

const NoProfileUploadModal = ({ closeModal }) => {
  const [profileImg, setProfileImg] = useState(profile)
  const [webcam, setWebcam] = useState(false)

  const inputRef = useRef(null)

  const handleInput = () => {
    inputRef.current.click()
  }

  const toggleWebcam = () => {
    setWebcam(prev => !prev)
  }

  return (
    <div className={styles.no_profile_modal}>
      {webcam ? (
        <NoProfileWebcam toggleWebcam={toggleWebcam} setProfileImg={setProfileImg} />
      ) : (
        <section>
          <GrFormClose onClick={closeModal} className={styles.close_icon} />
          <h2>Update profile picture</h2>
          <div>
            <img src={profileImg} alt='user_profile_pic' />
          </div>
          <div className={styles.btn_div}>
            <button onClick={handleInput}>
              <input
                type='file'
                ref={inputRef}
                accept='image/*'
                onChange={e => setProfileImg(prev => URL.createObjectURL(e.target.files[0]))}
              />
              <img src={pencil} alt='pencil-icon' /> Upload from your computer
            </button>
            <button onClick={() => setWebcam(prev => !prev)}>
              <img src={trash} alt='trash-icon' /> Take a photo
            </button>
          </div>
        </section>
      )}
    </div>
  )
}

export default NoProfileUploadModal
