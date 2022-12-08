import React from 'react'
import ArchiveIcon from '../../assets/svg/archive.svg'
import { useGlobalStore } from '../../contexts/GlobalStore'
import { formatDayAndMonth, formatMonth } from '../../utils/formatDate'
import ComingSoon from '../ComingSoon/ComingSoon'
import styles from './archive.module.css'
import { archiveData } from './archiveData'
import ArchiveItem from './ArchiveItem'

const Archive = () => {
  const { stress } = useGlobalStore()

  const date = new Date()

  const handleUnarchiveImages = () => {
    alert('This functionality is still in the pipeline! Thanks for your patience.')
  }

  if (!stress) {
    return <ComingSoon />
  }

  return (
    <section className={styles.archive_section}>
      <div className={styles.archive_header}>
        <h3>{formatMonth(date)}</h3>
        <span>Archived items will remain archived</span>
        <button onClick={handleUnarchiveImages}>
          <span>Unarchive</span>
          <img src={ArchiveIcon} alt='' />
        </button>
      </div>
      <p>Today, {formatDayAndMonth(date)}</p>
      <div className={styles.images_grid}>
        {archiveData.length
          ? archiveData.map(({ id, image, title }) => {
              return <ArchiveItem key={id} url={image} title={title} />
            })
          : null}
      </div>
    </section>
  )
}

export default Archive
