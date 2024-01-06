import { useEffect, useState } from 'react'
import Porlet from '../../components/Porlet/Porlet'
import styles from './Home.module.css'

const Home = () => {

  const [ data, setData ] = useState([])

  useEffect(() => {
    
  },[])

  return (
    <div>
        <Porlet data={data[0]}></Porlet>
    </div>
  )
}

export default Home