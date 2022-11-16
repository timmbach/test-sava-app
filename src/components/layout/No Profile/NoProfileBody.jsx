import React from 'react'
import hero from '../../../assets/no-profile-lady.png'
import styles from './NoProfile.module.css'

const NoProfileBody = () => {
  return (
    <div className={styles.no_profile_body}>
      <section>
        <img src={hero} alt='lady-avatar' />
        <aside>
          <h2>We need to identify you!</h2>
          <p>
            Please upload a profile picture to access all our features. This will help us with storing and automatically
            sorting your data into categories.
          </p>
          <form>
            <label htmlFor='upload'>Upload profile picture</label>
            <input type='file' id='upload' accept='image/*' />
          </form>
        </aside>
      </section>
    </div>
  )
}

export default NoProfileBody
