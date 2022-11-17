import React from 'react';
import { categoriesData } from '../sidebarData';
import styles from './SubNav.module.css';
import { Link } from 'react-router-dom';

export const SubNav = () => {
  return (
    <ul className={styles.sub_nav_wrapper}>
      {categoriesData.map((items) => (
        <Link to={items.href} key={items.id} className={styles.sub_nav_items}>
          <li className={styles.sub_nav_title}>
            <h6>{items.title}</h6>
          </li>
        </Link>
      ))}
    </ul>
  );
};
