import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import uuid from 'react-uuid'
import { useAuth } from './AuthContext'

const globalContext = createContext()

export const GlobalStore = ({ children }) => {
  const [images, setImages] = useState([])
  const [profileImg, setProfileImg] = useState(null)
  const [location, setLocation] = useState(false)
  const [localImages, setLocalImages] = useState([])
  const [uploadError, setUploadError] = useState({
    error: false,
    text: '',
    color: ''
  })
  const [uploading, setUploading] = useState(false)
  const [username, setUsername] = useState(null)

  //archive and bin functionality control
  const [stress, setStress] = useState(false)

  //AccessToken-IdToken
  const { currentUser } = useAuth()

  //dummy user
  //john.toriola.tj@gmail.com
  //password Password-123

  const userProfilePicApi = `https://0b4lmfk5yl.execute-api.us-east-1.amazonaws.com/upload-profile-pic?user=${username}`

  const postUserPicApi = `https://0b4lmfk5yl.execute-api.us-east-1.amazonaws.com/upload-pic?user=${username}`

  const getUserPicApi = `https://m2k5r0csf5.execute-api.us-east-1.amazonaws.com/dev/categories?user=${username}`

  const inputRef = useRef(null)

  const handleInput = () => {
    inputRef.current.click()
    setLocation(prev => !prev)
  }

  useEffect(() => {
    if (!currentUser) return
    if (currentUser.Token) {
      const {
        Token: { UserID }
      } = currentUser
      setUsername(UserID)
    } else {
      const {
        data: { UserID }
      } = currentUser
      setUsername(UserID)
    }
  }, [currentUser])

  const getUserProfileImage = useCallback(async () => {
    setUploadError(prev => ({ ...prev, error: false, text: '', color: '' }))
    try {
      const res = await fetch(getUserPicApi)
      const {
        UserImages: { ProfilePics }
      } = await res.json()
      // if(profileImg.length < 1) throw new Error("Please upload another profile image")
      
      setProfileImg(prev => ProfilePics)
      setUploadError(prev => ({ ...prev, error: true, text: 'profile picture uploaded', color: '#4042d0' }))
    } catch (error) {
      setUploadError(prev => ({ ...prev, error: true, text: 'Unable to get profile from server', color: 'red' }))
    }
  }, [getUserPicApi])

  const getImages = useCallback(async () => {
    setUploading(true)
    try {
      const response = await fetch(getUserPicApi)
      // {
      //   UserImages: { Uploads }
      // } 
      const data = await response.json()
      // setImages([...Uploads])
      console.log(data)
    } catch (error) {
      console.log(error)
    }
    setUploading(false)
  }, [getUserPicApi])

  const handleImageChange = async e => {
    //function to upload to backend here
    setUploading(true)
    const imageObj = e.target.files[0]
    setLocalImages(prev => [...prev, { id: uuid(), imageObj }])
    try {
      const response = await fetch(postUserPicApi, {
        method: 'POST',
        body: imageObj
      })
      const data = await response.json()
      if (data.staus === 'file Successfully uploaded') {
        getImages()
      } else {
        alert('Image Upload Failed')
      }
    } catch (error) {
      console.log(error)
    }
  }

  // if (!profileImg) {
  //   setTimeout(() => {
  //     getImages()
  //     getUserProfileImage()
  //     console.log('render')
  //   }, 5000)
  // }

  useEffect(() => {
    console.log('enter')
    if (!profileImg) {
      const time = setTimeout(() => {
        getUserProfileImage()
        getImages()
        console.log('render')
      }, 0)
      return () => clearTimeout(time)
    }
  }, [getUserProfileImage, getImages, profileImg])

  useEffect(() => {
    setTimeout(() => {
      setUploadError(prev => ({ ...prev, error: false, text: '', color: '' }))
    }, 12000)
  }, [uploadError])

  const store = {
    images,
    setImages,
    profileImg,
    setProfileImg,
    location,
    setLocation,
    inputRef,
    handleInput,
    handleImageChange,
    uploadError,
    setUploadError,
    stress,
    userProfilePicApi,
    getUserProfileImage,
    localImages,
    uploading,
    getUserPicApi
  }

  return <globalContext.Provider value={store}>{children}</globalContext.Provider>
}

export const useGlobalStore = () => {
  return useContext(globalContext)
}
