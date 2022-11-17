import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../categories.module.css';

const CategoryCard = ({ id, title, href, image }) => {
  return (
    <Link to={href} className={styles.category_card}>
      <div
        style={{
          background: `url(${image})`,
        }}
      ></div>
      <span>{title}</span>
    </Link>
  );
};

export default CategoryCard;
