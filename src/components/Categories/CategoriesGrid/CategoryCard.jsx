import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../categories.module.css';

const CategoryCard = ({ id, title, href, image }) => {
  return (
    <Link to={href} className={styles.category_card}>
      <div
        style={{
          background: `linear-gradient(0deg, rgba(115, 134, 152, 0.1), rgba(115, 134, 152, 0.1)), url(${image})`,
        }}
      ></div>
      <span>{title}</span>
    </Link>
  );
};

export default CategoryCard;
