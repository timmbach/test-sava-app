import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageInstance from './ImageInstance';
import styles from './category.module.css';

const Category = () => {
  const [pics, setPics] = useState([]);
  const params = useParams();

  // This is just a mock. The comparison will be done on the backend,
  // we just need to pass in the id of the category to reequest for such data.
  let species = 'human';
  switch (params.name) {
    case 'you-and-pets':
    case 'just-you':
      species = 'human';
      break;
    default:
      species = 'alien';
      break;
  }

  useEffect(() => {
    const fetchPictures = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?species=${species}`);
      const data = await response.json();
      const refinedData = data.results.slice(0, 10);
      return refinedData;
    };
    const getImages = async () => {
      const fakePics = await fetchPictures();
      setPics((prev) => {
        return [...fakePics];
      });
    };
    getImages();
  }, [species]);

  const formatCategoryName = () => {
    return params.name.split('-').join(' ');
  };

  return (
    <section className={styles.category_section}>
      <h3>{formatCategoryName()}</h3>
      <div className={styles.images_grid}>
        {pics.length
          ? pics.map(({ id, image, name }) => {
              return <ImageInstance key={id} url={image} title={name} />;
            })
          : null}
      </div>
    </section>
  );
};

export default Category;
