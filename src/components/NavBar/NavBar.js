import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <NavLink className={({isActive})=> isActive ? styles.active : styles.link} to="/">Home</NavLink>
            <NavLink className={({isActive})=> isActive ? styles.active : styles.link} to="/elements">Elements</NavLink>
        </nav>
    )
}

export default NavBar