import React from 'react';
import MenuHover from '../../assets/svg/menu_hover.svg'
import styles from './archive.module.css';

const ArchiveItem = ({ id, url, title}) => {
  return (
    <div className={styles.image_card} style={{background: `url(${url})`}}>
        <div className={styles.image_options}>
            <input type="checkbox" name='select'/>
            <button>
                <img src={MenuHover} alt="" />
            </button>
        </div>
    </div>
  );
};

export default ArchiveItem;
