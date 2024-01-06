import styles from './Porlet.module.css'

const Porlet = (props) => {
    return (
        <div className={`${styles["porlet"]} ${styles[props.styleName]}`}>
            <span className={styles["porlet-data"]}>{props.data}</span>
            <span className={styles["porlet-name"]}>{props.name}</span>
        </div>
    )
}

export default Porlet