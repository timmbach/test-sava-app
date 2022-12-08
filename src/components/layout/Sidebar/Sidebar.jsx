import React from 'react'
import styles from './Sidebar.module.css'
import Logo from '../../../assets/svg/logo.svg'
import { navData } from './sidebarData'
import { NavMenu } from './NavMenu'
import { ProgressBar } from './ProgressBar'
import { useGlobalStore } from '../../../contexts/GlobalStore'
import { FaBars } from 'react-icons/fa'
import { CiSettings } from 'react-icons/ci'
import { BiLogOut } from 'react-icons/bi'
import { useAuth } from '../../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export const Sidebar = ({ show }) => {
  const URL = window.location.pathname
  const { profileImg } = useGlobalStore()
  const { signout, currentUser } = useAuth()
  const navigate = useNavigate()

  const getStatus = url => {
    // eslint-disable-next-line array-callback-return
    navData.map(item => {
      if (url === item.href) {
        item.status = 'active'
      } else {
        item.status = 'inactive'
      }
    })
  }

  const showBar = () => {
    var bar = document.querySelector('#user_details')
    if (bar.style.display === 'none') {
      bar.style.display = 'block'
    } else {
      bar.style.display = 'none'
    }
  }

  const handleLogout = () => {
    signout()
    navigate('/')
  }

  getStatus(URL)

  return (
    <div className={styles.sidebar_wrapper}>
      <nav className={styles.nav_wrapper}>
        <div className={styles.logo_heading}>
          <a href='/' className={styles.logo}>
            <img src={Logo} alt='logo' className={styles.logo_img} />
          </a>
          {/* <FaBars className={styles.menu} onClick={() => show()} /> */}
        </div>
        <ul className={styles.nav_list_wrapper}>
          {navData.map(({ status, id, Icon, title, href, subnav }) => (
            <NavMenu show={show} key={id} status={status} Icon={Icon} title={title} href={href} subnav={subnav} />
          ))}
        </ul>
      </nav>

      <div className={styles.user_wrapper} onClick={() => showBar()}>
        <div className={styles.user_details}>
          <span className={styles.user_img}>
            <img src={profileImg} alt='' />
          </span>
        </div>

        <div className={styles.storage_details}>
          <small className={styles.storage_text}>500mb of 5GB used</small>

          <ProgressBar progress={30} />
        </div>
        <div id='user_details' className={styles.user_details_Container}>
          <div className={styles.user_details_wrapper}>
            <div className={styles.user_edit}>
              <button>Edit</button>
            </div>
            <div className={styles.user_details}>
              <span className={styles.user_img}>
                <img src={profileImg} alt='' />
              </span>
              <div></div>
            </div>
            <div className={styles.storage_details}>
              <small className={styles.storage_text}>500mb of 5GB used</small>
              <ProgressBar progress={30} />
            </div>
            <div className={styles.settings}>
              <CiSettings size='24px' className={styles.settingsIcon} />
              <span>Settings</span>
            </div>
            <div className={styles.user_logout_wrapper}>
              <button className={styles.user_logout} onClick={handleLogout}>
                <BiLogOut color='red' className={styles.logoutIcon} size='24px' />
                <span>Signout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
