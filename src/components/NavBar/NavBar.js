import { NavLink } from 'react-router-dom'

import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav>

            <NavLink className={({isActive})=> isActive ? styles.active : styles.link} to="/">Home</NavLink>
            <NavLink className={({isActive})=> isActive ? styles.active : styles.link} to="/empreses">Empreses</NavLink>
            <NavLink className={({isActive})=> isActive ? styles.active : styles.link} to="/centres">Centres</NavLink>
            <NavLink className={({isActive})=> isActive ? styles.active : styles.link} to="/inspeccions">Inspeccions</NavLink>
            <NavLink className={({isActive})=> isActive ? styles.active : styles.link} to="/elements">Elements</NavLink>
            <NavLink className={({isActive})=> isActive ? styles.active : styles.link} to="/mesures">Mesures</NavLink>
            <NavLink className={({isActive})=> isActive ? styles.active : styles.link} to="/unitats">Unitats</NavLink>
            <NavLink className={({isActive})=> isActive ? styles.active : styles.link} to="/usuaris">Usuaris</NavLink>
        </nav>
    )
}

export default NavBar