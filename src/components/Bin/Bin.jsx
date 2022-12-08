import React from 'react'
import { formatDayAndMonth, formatMonth } from '../../utils/formatDate'
import styles from './bin.module.css'
import TrashIcon from '../../assets/svg/trash.svg'
// Use the same mock data from bin since the images are the same in design
import { archiveData } from '../Archive/archiveData'
import BinItem from './BinItem'
import { useGlobalStore } from '../../contexts/GlobalStore'
import ComingSoon from '../ComingSoon/ComingSoon'

const Bin = () => {
  const { stress } = useGlobalStore()

  const date = new Date()

  const handleRestoreImages = () => {
    alert('This functionality is still in the pipeline! Thanks for your patience.')
  }

  if (!stress) {
    return <ComingSoon />
  }

  return (
    <section className={styles.bin_section}>
      <div className={styles.bin_header}>
        <h3>{formatMonth(date)}</h3>
        <button>Restore all items</button>
        <button onClick={handleRestoreImages}>
          <span>Empty Bin</span>
          <img src={TrashIcon} alt='' />
        </button>
      </div>
      <p>Today, {formatDayAndMonth(date)}</p>
      <div className={styles.images_grid}>
        {archiveData.length
          ? archiveData.map(({ id, image, title }) => {
              return <BinItem key={id} url={image} title={title} />
            })
          : null}
      </div>
    </section>
  )
}

export default Bin
