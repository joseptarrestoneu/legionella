import { useState } from 'react'
import { Link } from 'react-router-dom'
import getUserByName from '../../services/users/getUserByName'
import Footer from '../../components/Footer/Footer'

import styles from './Login.module.css'

const Login = (props) => {

    // Guardar user i password
    const [ userData, setUserData ] = useState({
        username: '',
        userpass: '',
    })

    // Guardar el tipus d'error en el logejat: per usuari o password equivocat o perquè està buit
    const [ error , setError ] = useState(null)

    // Funció per actualitzar el setter del usetate de loggin
    const handleLogin = (isLogged)=> props.setIsLogged(isLogged)

    // Handle que actua al activar el formulari del Loggin
    const handleSubmit = (event) => {
        event.preventDefault()
        getUserByName(userData.username, userData.userpass)
        .then(logged => {
            props.setIsLogged(logged)
        })
        if (props.isLogged === true) {
            handleLogin(true)
            setError(null)
        } else {
            handleLogin(false)
            if (userData.username.trim() === '' || userData.userpass.trim() === '') {
                setError("Si us plau, introduiu les dades correctament")
                console.log(error);
                
            } else {
                setError("Usuari o password incorrecte")
                console.log(error);
            }
        }
        // Resetejar el formulari
        setUserData({
            username: '',
            userpass: '',
        })
    }

    // Handle per controlar els inputs
    const handleChange = (event) => {
        let value = event.target.value;
        let inputName = event.target.name;
        setUserData((prevState) => {
            return {
                ...prevState,
                [inputName]: value
            }
        })
    }

    return (
        <div className={styles.bodyLogin} data-theme='dark'>
            <div className={styles.containerLogin}>
                <div className={styles.formContainer} id='formContainer'>
                    <form className={styles.formLogin} onSubmit={handleSubmit}>
                        <h1>Sign In</h1>
                        <div className={styles.socialIcons}>
                            <Link to="#" className={styles.icon}><i className="fa-brands fa-windows"></i></Link>
                            <Link to="#" className={styles.icon}><i className="fa-brands fa-twitter"></i></Link>
                            <Link to="#" className={styles.icon}><i className="fa-brands fa-linkedin-in"></i></Link>
                            <Link to="#" className={styles.icon}><i className="fa-solid fa-envelope"></i></Link>
                        </div>
                        <span>Utilitza el teu email com a email password</span>
                        <input className={styles.email} type='email' name='username' placeholder='Usuari' onChange={handleChange} value={userData.username}></input>
                        <input className={styles.password} type='password' name='userpass' placeholder='Contrasenya' onChange={handleChange} value={userData.userpass}></input>
                        <button type='submit'>Sign In</button>
                        <Link href="#">Has oblidat el Password?</Link>
                    </form>
                </div>
                <div className={styles.toggleContainer}>
                    <div className={styles.toggle}>
                        <div className={styles.togglePanel} id='toogle-left'>
                            <h1>Benvinguts!</h1>
                            <p>Esteu apunt d'accedir al programa</p> 
                            <p>de control de legionel·losi</p>
                            <p></p>
                            <p>Teniu alguna incidència o recomanació?</p>
                            <button className={styles.hidden} id='login'>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
       )
}

export default Login