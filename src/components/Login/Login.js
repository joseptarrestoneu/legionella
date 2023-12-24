import Footer from '../Footer/Footer'
import styles from './Login.module.css'
import { useState } from 'react'

const Login = () => {

    // Guardar estat del Login: logejat o no logejat
    const [ logged, setIsLogged ] = useState(false)
    // Guardar user i password
    const [ userData, setUserData ] = useState({
        username: '',
        userpass: '',
    })
    // Guardar el tipus d'error en el logejat: per usuari o password equivocat o perquè està buit
    const [ error , setError ] = useState(null)

    const data = {
        username: 'abc@gmail.com',
        userpass: '1234',
    }

    // Funció per actualitzar el setter del usetate de loggin
    const handleLogin = (isLogged)=> setIsLogged(isLogged)

    // Handle que actua al activar el formulari del Loggin
    const handleSubmit = (event) => {
        event.preventDefault()
        if (userData.username === data.username && userData.userpass  === data.userpass) {
            handleLogin(true)
            setError(null)
        } else {
            handleLogin(false)
            if (userData.username.trim() === '' || userData.userpass.trim() === '') {
                setError("Si us plau, introduiu les dades correctament")
                console.log("1");
                
            } else {
                setError("Usuari o password incorrecte")
                console.log("2");
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
                            <a href="#" className={styles.icon}><i className="fa-brands fa-windows"></i></a>
                            <a href="#" className={styles.icon}><i className="fa-brands fa-twitter"></i></a>
                            <a href="#" className={styles.icon}><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="#" className={styles.icon}><i className="fa-solid fa-envelope"></i></a>
                        </div>
                        <span>Utilitza el teu email com a email password</span>
                        <input className={styles.email} type='email' name='username' placeholder='Email' onChange={handleChange} value={userData.username}></input>
                        <input className={styles.password} type='password' name='userpass' placeholder='Password' onChange={handleChange} value={userData.userpass}></input>
                        <button type='submit'>Sign In</button>
                        <a href="#">Has oblidat el Password?</a>
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