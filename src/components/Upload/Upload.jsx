import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import styles from './Upload.module.css'
import hero from '../../assets/pana.png'

const Upload = () => {
  const [access, setAccess] = useState(false)
  const [location, setLocation] = useState(false)

  // const navigate = useNavigate()

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
          <label htmlFor='upload' onClick={() => setAccess(prev => !prev)}>
            Start uploading
          </label>
          {/* i still don't know how to implement the file with permission */}
          {/* <input type='file' id='upload' accept='image/*' /> */}
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
                <button
                  onClick={() => {
                    setLocation(prev => !prev)
                    // use navigate here... i dont know where to tho
                  }}
                >
                  Allow
                </button>
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  )
}

export default Upload
