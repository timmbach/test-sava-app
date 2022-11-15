import React, { useState } from 'react'
import { Dash } from './Dash/Dash'
import { Sidebar } from './Sidebar/Sidebar'
import styles from './Layout.module.css'
import NoProfileHeader from './No Profile/NoProfileHeader'
import NoProfileBody from './No Profile/NoProfileBody'

const Layout = () => {
  // There is gonna be a divide here, when its an existing user, the normal dashboard would be displayed and when its a new user the upload profile would be displayed

  //i think the new user is gonna be gotten from a context or a useeffect...

  //usestate to manage user state
  const [newUser, setNewUser] = useState(true)

  if (newUser) {
    return (
      <div style={{ position: 'relative' }}>
        <NoProfileHeader />
        <NoProfileBody />
      </div>
    )
  }

  return (
    <div className={styles.layout_wrapper}>
      <Sidebar />
      <Dash />
    </div>
  )
}

export default Layout
