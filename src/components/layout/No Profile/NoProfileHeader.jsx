import React from 'react'
import cloudLogo from '../../../assets/cloud-logo.png'
import savaLogo from '../../../assets/SAVA-logo.png'
import { SearchInput } from '../../shared/Search/SearchInput'
import { Button } from '../../shared/Button/Button'
import styles from './NoProfile.module.css'

const NoProfileHeader = () => {
  return (
    <div className={styles.no_profile_header}>
      <div className={styles.logo_div}>
        <img src={cloudLogo} alt='cloud-logo' />
        <img src={savaLogo} alt='sava-logo' />
      </div>
      <div className={styles.actions_div}>
        <SearchInput />
        <Button />
      </div>
    </div>
  )
}

export default NoProfileHeader
