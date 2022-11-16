import React from 'react'
import { Outlet } from 'react-router-dom'
import { Button } from '../../shared/Button/Button'
import { SearchInput } from '../../shared/Search/SearchInput'
import styles from './Dash.module.css'

export const Dash = () => {
  return (
    <div className={styles.dash_wrapper}>
      <div className={styles.dash_header}>
        <SearchInput />
        <Button text='Upload' />
      </div>

      <div className={styles.dash_body}>
        <Outlet />
      </div>
    </div>
  )
}
