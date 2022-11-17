import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import styles from './Upload.module.css'
import hero from '../../assets/pana.png'

const Upload = () => {
  const [access, setAccess] = useState(false)
  const [location, setLocation] = useState(false)
  const [images, setImages] = useState([])

  // const navigate = useNavigate()

  if (images.length) {
    return (
      <div className={styles.uploadMore}>
        <div className={styles.imageDiv}>
          {images.map((image, index) => {
            return <img key={index} src={image} alt={image} />
          })}
        </div>
        <div>
          <label htmlFor='local-upload' className={styles.btn}>
            upload more stuffs
          </label>
          <input
            type='file'
            id='local-upload'
            accept='image/*'
            onChange={e => setImages(prev => [...prev, URL.createObjectURL(e.target.files[0])])}
          />
        </div>
      </div>
    )
  }

  return (
    <div className={styles.upload}>
      <div>
        <div>
          <img src={hero} alt='lady_image' />
        </div>
        <h2>Oops! No memories yet</h2>
        <p>
          Start the journey of safe keeping your memories and data with us today, create folders and auto sort your
          images without stress
        </p>
        <div>
          {/* <label onClick={() => setAccess(prev => !prev)}>Start uploading</label> */}
          <label htmlFor='local-upload' className={styles.btn}>
            Start uploading
          </label>
          <input
            type='file'
            id='local-upload'
            accept='image/*'
            onChange={e => setImages(prev => [...prev, URL.createObjectURL(e.target.files[0])])}
          />
        </div>
        {access && (
          <aside>
            <div>
              <h4>Permission to access your files?</h4>
              <p>We need permission to access your gallery, images and upload your files.</p>
              <div className={styles.btn_div}>
                <button onClick={() => setAccess(prev => !prev)}>Cancel</button>
                <button
                  onClick={() => {
                    setAccess(prev => !prev)
                    setLocation(prev => !prev)
                  }}
                >
                  Grant Permmission
                </button>
              </div>
            </div>
          </aside>
        )}
        {location && (
          <aside>
            <div>
              <h4>Allow Sava use your Location?</h4>
              <p>We would use your location in sorting and organizing your images and memories.</p>
              <div className={styles.btn_div}>
                <button onClick={() => setLocation(prev => !prev)}>Don't allow</button>
                <div>
                  <label
                    htmlFor='local-upload'
                    className={styles.btn}
                    onClick={() => {
                      setTimeout(() => {
                        setLocation(prev => !prev)
                      }, 2000)
                      // use navigate here... i dont know where to tho
                    }}
                  >
                    allow
                  </label>
                  <input type='file' id='local-upload' accept='image/*' />
                </div>
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  )
}

export default Upload
