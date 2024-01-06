import { NavLink } from 'react-router-dom'

import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav>
            <NavLink className={({isActive})=> isActive ? styles.active : styles.link} to="/">Home</NavLink>
            <NavLink className={({isActive})=> isActive ? styles.active : styles.link} to="/inspeccions">Inspeccions</NavLink>
            <NavLink className={({isActive})=> isActive ? styles.active : styles.link} to="/elements">Elements</NavLink>
            <NavLink className={({isActive})=> isActive ? styles.active : styles.link} to="/empreses">Empreses</NavLink>
            <NavLink className={({isActive})=> isActive ? styles.active : styles.link} to="/centres">Centres</NavLink>
            <NavLink className={({isActive})=> isActive ? styles.active : styles.link} to="/manteniments">Manteniments</NavLink>
            <NavLink className={({isActive})=> isActive ? styles.active : styles.link} to="/tipus-manteniment">Tipus</NavLink>
            <NavLink className={({isActive})=> isActive ? styles.active : styles.link} to="/usuaris">Usuaris</NavLink>
        </nav>
    )
}

export default NavBar
