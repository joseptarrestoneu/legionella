import { useState, useEffect } from 'react'
import styles from './Footer.module.css'

const Footer = () => {

    const [ year, setYear ] = useState()
    useEffect(() => {
        let actualYear = new Date().getFullYear()
        setYear(actualYear)
    },[])

    return (
        <footer className={styles.footer}>
            <a href="https://joseptarrestoneu.es" target='blank'><span>Made by Josep Tarrés Toneu &copy; {year}</span></a>
        </footer>
    )
}

export default Footer