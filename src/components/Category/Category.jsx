import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageInstance from './ImageInstance';
import styles from './category.module.css';

const Category = () => {
  const [pics, setPics] = useState([]);
  const params = useParams();

  const fetchPictures = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos/?_limit=10');
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const getImages = async () => {
      const fakePics = await fetchPictures();
      setPics((prev) => {
        return [...prev, ...fakePics];
      });
    };
    getImages();
  }, []);

  const formatCategoryName = () => {
    return params.name.split('-').join(' ');
  };

  return (
    <section className={styles.category_section}>
      <h3>{formatCategoryName()}</h3>
      <div className={styles.images_grid}>
        {pics.length
          ? pics.map(({ id, url, title }) => {
              return <ImageInstance key={id} url={url} title={title} />;
            })
          : null}
      </div>
    </section>
  );
};

export default Category;
