import React from 'react'
import { Outlet } from 'react-router-dom'
import { Button } from '../../shared/Button/Button'
import { SearchInput } from '../../shared/Search/SearchInput'
import styles from './Dash.module.css'

export const Dash = ({ children }) => {
  return (
    <div className={styles.dash_wrapper}>
      <div className={styles.dash_header}>
        <SearchInput />
        <Button text='Upload' />
      </div>

      {/* <div className={styles.dash_body}>
        <Outlet />
      </div> */}
      {/* i don't know how the outlet stuff works outside of a private route component, so i made a temp patch with the children prop */}
      {children}
    </div>
  )
}
