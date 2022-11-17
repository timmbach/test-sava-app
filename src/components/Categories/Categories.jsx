import React from 'react';
import FolderAddIcon from '../../assets/svg/folder-add.svg';
import styles from './categories.module.css';
import CategoriesGrid from './CategoriesGrid/CategoriesGrid';

const Categories = () => {
  const handleCreateCategories = () => {
    alert('This functionality is still in the pipeline! Thanks for your patience.');
  };
  return (
    <section>
      <div className={styles.section_header}>
        <h3>Categories</h3>
        <button onClick={handleCreateCategories}>
          <span>Create new category</span>
          <img src={FolderAddIcon} alt="" />
        </button>
      </div>
      <CategoriesGrid />
    </section>
  );
};

export default Categories;
