import { Link } from 'react-router-dom'
import styles from './Button.module.css'

const Button = (props) => {
    return (
        <Link className={styles.button} to={props.path}>
            <i class="fa-solid fa-circle-plus"></i>
        </Link>
    )
}

export default Button