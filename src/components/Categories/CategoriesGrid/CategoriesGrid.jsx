import React from 'react';
import { categoriesData } from '../categoriesData';
import CategoryCard from './CategoryCard';
import styles from '../categories.module.css';

const CategoriesGrid = () => {
  return (
    <div className={styles.categories_grid}>
      {categoriesData.length
        ? categoriesData.map(({ id, title, href, image }) => {
            return <CategoryCard key={id} title={title} href={href} image={image} />;
          })
        : null}
    </div>
  );
};

export default CategoriesGrid;
