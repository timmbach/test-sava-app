import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import styles from './Upload.module.css'
import hero from '../../assets/pana.png'
import { Modal } from '../shared/Modal/Modal'
import { useGlobalStore } from '../../contexts/GlobalStore'
import { SlClose } from 'react-icons/sl'
import filter from '../../assets/arrow-3.png'
import { BarLoader as Loader } from 'react-spinners'
import UploadingModal from '../UploadingModal/UploadingModal'
// import uuid from 'react-uuid'

const Upload = () => {
  const [access, setAccess] = useState(false)
  const [open, setOpen] = useState(false)
  const [currImg, setCurrImg] = useState(null)
  // const [allImg, setAllImg] = useState([])

  const { images, location, setLocation, inputRef, handleInput, handleImageChange, uploading } = useGlobalStore()

  const handleImageClick = image => {
    setOpen(prev => !prev)
    setCurrImg(image)
  }

  // useEffect(() => {
  //   if (!images.length) return
  //   console.log(images)
  //   const [{ HappyMoments }, { SelfImage }, { WithFriends }, { WithPets }] = images
  //   setAllImg([...HappyMoments, ...SelfImage, ...WithFriends, ...WithPets])
  // }, [images])

  // const navigate = useNavigate()

  if (images.length) {
    return (
      <div className={styles.uploadMore}>
        {open && (
          <div className={styles.openImg}>
            <div>
              <SlClose
                className={styles.closeImg}
                onClick={() => {
                  setOpen(prev => !prev)
                  setCurrImg(null)
                }}
              />
              <img src={currImg} alt='openImg' />
            </div>
          </div>
        )}
        <div className={styles.imageDiv}>
          <UploadingModal />
          <div className={styles.image_header}>
            {/* Get Date Stamp from server */}
            <h2>Today</h2>
            <div>
              <h4>Most recent</h4>
              <img src={filter} alt='filter' />
            </div>
          </div>
          {uploading && (
            <Loader
              loading={uploading}
              width={200}
              height={8}
              aria-label='Loading Spinner'
              data-testid='loader'
              speedMultiplier='0.8'
              color='#4042d0'
              className={styles.loader}
            />
          )}
          <div className={styles.serverImg}>
            {images.map((imageSrc, index) => {
              return (
                <div key={index} className={styles.rel}>
                  <img src={imageSrc} alt={imageSrc} onClick={() => handleImageClick(imageSrc)} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.upload}>
      <div>
        {uploading && (
          <Loader
            loading={uploading}
            width={200}
            height={8}
            aria-label='Loading Spinner'
            data-testid='loader'
            speedMultiplier='0.8'
            color='#4042d0'
            className={styles.loader}
          />
        )}
        <div>
          <img src={hero} alt='lady_image' />
        </div>
        <h2>Oops! No memories yet</h2>
        <p>
          Start the journey of safe keeping your memories and data with us today, create folders and auto sort your
          images without stress
        </p>
        <div className={styles.upload_button}>
          <label onClick={() => setAccess(prev => !prev)} className={styles.btn}>
            Start uploading
          </label>
          {/*multiple='multiple'*/}
          <input type='file' ref={inputRef} accept='image/*' onChange={handleImageChange} />
        </div>
        {access && (
          <Modal
            title='Permission to access your files?'
            text='We need permission to access your gallery, images and upload your files.'
            action1='Cancel'
            action2='Grant Permmission'
            onClick1={() => setAccess(prev => !prev)}
            onClick2={() => {
              setAccess(prev => !prev)
              setLocation(prev => !prev)
            }}
          />
        )}

        {location && (
          <Modal
            title='Allow Sava use your Location?'
            text='We would use your location in sorting
            and organizing your images and
            memories.'
            action1="Don't allow"
            action2='allow'
            onClick1={() => setLocation(prev => !prev)}
            onClick2={() => {
              handleInput()
            }}
            input_type
          />
        )}
      </div>
    </div>
  )
}

export default Upload
