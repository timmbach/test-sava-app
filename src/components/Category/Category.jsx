import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageInstance from './ImageInstance'
import styles from './category.module.css'
import { Navigate } from 'react-router-dom'
import {useGlobalStore} from '../../contexts/GlobalStore'

const Category = () => {
  const [haveEndPoints, setHaveEndPoints] = useState(false)

  const [pics, setPics] = useState([])
  const params = useParams()
  
  const {getUserPicApi} = useGlobalStore();

  // This is just a mock. The comparison will be done on the backend,
  // we just need to pass in the id of the category to reequest for such data.
  // let species;
  // switch (params.name) {
  //   case 'you-and-pets':
  //     species = 'WithPets'
  //     break
  //   case 'just-you':
  //     species = 'SelfImage'
  //     break
  //   case 'you-and-friends':
  //     species = 'WithFriends'
  //     break
  //   case 'happy-moments':
  //     species = 'HappyMoments'
  //     break
  //   default:
  //     return
  // }
  
  let paramsName = params.name;
  
  console.log(paramsName)

  useEffect(() => {
    const fetchPictures = async () => {
      // const response = await fetch(`https://rickandmortyapi.com/api/character/?species=${species}`)
      const response = await fetch(getUserPicApi)
      const {UserImages: {paramsName}} = await response.json()
      
      console.log(paramsName)
      
      // const refinedData = data.results.slice(0, 10)
      // return refinedData
    }
    const getImages = async () => {
      const fakePics = await fetchPictures()
      setPics(prev => {
        return [...fakePics]
      })
    }
    getImages()
  }, [paramsName])

  const formatCategoryName = () => {
    return params.name.split('-').join(' ')
  }

  // if (!haveEndPoints) {
  //   return <Navigate to='/dashboard' />
  // }

  return (
    <section className={styles.category_section}>
      <h3>{formatCategoryName()}</h3>
      <div className={styles.images_grid}>
        {pics.length
          ? pics.map(({ id, image, name }) => {
              return <ImageInstance key={id} url={image} title={name} />
            })
          : null}
      </div>
    </section>
  )
}

export default Category
