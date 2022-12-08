import React, { useRef, useState } from 'react'
import styles from './NoProfile.module.css'
import { GrFormClose } from 'react-icons/gr'
import pencil from '../../../assets/ph_pencil-simple.png'
import trash from '../../../assets/camera2.png'
import NoProfileWebcam from './NoProfileWebcam'
import { useGlobalStore } from '../../../contexts/GlobalStore'
import { useNavigate } from 'react-router-dom'
import { BsArrowRightCircle } from 'react-icons/bs'
import { RingLoader as Loader } from 'react-spinners'
import { useAuth } from '../../../contexts/AuthContext'


const NoProfileUploadModal = ({ closeModal }) => {
  const [webcam, setWebcam] = useState(false)
  const [loading, setLoading] = useState(false)
  const {currentUser, setCurrentUser} = useAuth()


  const { profileImg, setUploadError, userProfilePicApi, getUserProfileImage } = useGlobalStore()

  const inputRef = useRef(null)

  const navigate = useNavigate()

  const handleInput = () => {
    inputRef.current.click()
  }

  const toggleWebcam = () => {
    setWebcam(prev => !prev)
  }

  const changeLoading = () => setLoading(prev => !prev)

  const handleServerProfile = async e => {
    changeLoading()
    setUploadError(prev => ({ ...prev, error: false, text: '', color: '' }))
    const userImg = e.target.files[0]
    //code for backend call here
    try {
      const response = await fetch(userProfilePicApi, {
        method: 'POST',
        body: userImg
      })
      const data = await response.json()
      if (data.staus === 'file Successfully uploaded') {
        const newUserDetails = {
          ...currentUser, 
          ProfilePixPresent: true,
        }
        setCurrentUser(newUserDetails)
        localStorage.setItem('user', JSON.stringify(newUserDetails))
        getUserProfileImage()
        changeLoading()
      } else {
        setUploadError(prev => ({
          ...prev,
          error: true,
          text: 'Please upload a different profile image',
          color: 'red'
        }))
        changeLoading()
      }
    } catch (error) {
      changeLoading()
      setUploadError(prev => ({ ...prev, error: true, text: 'Unable to connect to server', color: 'red' }))
    }
  }

  const handleRequest = () => {
    setUploadError(prev => ({ ...prev, error: false, text: '', color: '' }))
    if (profileImg) {
      navigate('/dashboard')
    } else {
      setUploadError(prev => ({ ...prev, error: true, text: 'please upload your picture', color: 'red' }))
    }
  }

  const override = {
    display: 'block',
    margin: '0 auto'
  }

  return (
    <div className={styles.no_profile_modal}>
      {webcam ? (
        <NoProfileWebcam toggleWebcam={toggleWebcam} changeLoading={changeLoading} />
      ) : (
        <section>
          {loading && (
            <div className={styles.loading}>
              <div>
                <Loader
                  loading={loading}
                  cssOverride={override}
                  size={50}
                  aria-label='Loading Spinner'
                  data-testid='loader'
                  speedMultiplier='0.8'
                  color='#4042d0'
                />
                <div>Please wait...</div>
              </div>
            </div>
          )}
          <GrFormClose onClick={closeModal} className={styles.close_icon} />
          <h2>Update profile picture</h2>
          {profileImg && <BsArrowRightCircle onClick={handleRequest} className={styles.request} />}
          <div className={styles.profileImg}>{profileImg && <img src={profileImg} alt='user_profile_pic' />}</div>
          <div className={styles.btn_div}>
            <button onClick={handleInput}>
              <input type='file' ref={inputRef} accept='image/*' onChange={handleServerProfile} />
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
