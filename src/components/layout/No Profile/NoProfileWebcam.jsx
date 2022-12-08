import React, { useRef, useState } from 'react'
import styles from './NoProfile.module.css'
import cameraIcon from '../../../assets/camera.png'
import { BsArrowLeftShort } from 'react-icons/bs'
import Webcam from 'react-webcam'
import { useGlobalStore } from '../../../contexts/GlobalStore'
import { useAuth } from '../../../contexts/AuthContext'

const NoProfileWebcam = ({ toggleWebcam, changeLoading }) => {
  const { setUploadError, userProfilePicApi, getUserProfileImage } = useGlobalStore()
  const {currentUser, setCurrentUser} = useAuth()

  const webcamRef = useRef(null)

  const convertBaseToFile = async () => {
    toggleWebcam()
    changeLoading()
    const userImg = webcamRef.current.getScreenshot()
    const res = await fetch(userImg)
    const data = await res.blob()
    const blobFileImage = new File([data], 'userImage', { type: 'image/png' })
    handleWebcam(blobFileImage)
  }

  const handleWebcam = async imageFile => {
    setUploadError(prev => ({ ...prev, error: false, text: '', color: '' }))
    //code for backend call here
    try {
      const response = await fetch(userProfilePicApi, {
        method: 'POST',
        body: imageFile
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

  return (
    <div className={styles.no_profile_webcam}>
      <BsArrowLeftShort className={styles.icon} onClick={toggleWebcam} />
      <Webcam audio={false} screenshotFormat='image/jpeg' className={styles.webcam} ref={webcamRef} />
      <div className={styles.camera_text}>Make sure you are in a well lit enviroment</div>
      <button onClick={convertBaseToFile}>
        <img src={cameraIcon} alt='camera-icon' />
        Take a photo
      </button>
    </div>
  )
}

export default NoProfileWebcam
