import styles from './Login.module.css'
import { useState } from 'react'

const Login = () => {

    const [ logged, setIsLogged ] = useState(false)
    const [ userData, setUserData ] = useState({
        username: '',
        userpass: -1,
    })
    const [ error , setError ] = useState(null)

    const data = {
        username: 'abc@gmail.com',
        userpass: '1234',
    }

    const handleLogin = (isLogged)=> setIsLogged(isLogged)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(userData);
        if (userData.username === data.username && userData.userpass  === data.userpass) {
            handleLogin(true)
            setError(null)
        } else {
            handleLogin(false)
            if (userData.username.trim() === '' || userData.userpass.trim() === '') {
                setError("Si us plau, introduiu les dades correctament")
            } else {
                setError("Usuari o password incorrected")
            }
        }
    }

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
                        <input className={styles.email} type='email' name='username' placeholder='Email' onChange={handleChange}></input>
                        <input className={styles.password} type='password' name='userpass' placeholder='Password' onChange={handleChange}></input>
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
        </div>
    )
}

export default Login