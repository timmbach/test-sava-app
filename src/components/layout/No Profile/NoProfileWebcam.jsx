import React, { useRef } from 'react'
import styles from './NoProfile.module.css'
import cameraIcon from '../../../assets/camera.png'
import { BsArrowLeftShort } from 'react-icons/bs'
import Webcam from 'react-webcam'

const NoProfileWebcam = ({ setProfileImg, toggleWebcam }) => {
  const webcamRef = useRef(null)

  const handleWebcam = () => {
    const userImg = webcamRef.current.getScreenshot()
    setProfileImg(prev => userImg)
    toggleWebcam()
  }

  return (
    <div className={styles.no_profile_webcam}>
      <BsArrowLeftShort className={styles.icon} onClick={toggleWebcam} />
      <Webcam audio={false} screenshotFormat='image/jpeg' className={styles.webcam} ref={webcamRef} />
      <button onClick={handleWebcam}>
        <img src={cameraIcon} alt='camera-icon' />
        Take a photo
      </button>
    </div>
  )
}

export default NoProfileWebcam
