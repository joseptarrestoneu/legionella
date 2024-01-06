import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home';
import Companies from './views/Companies/Companies';
import Headquarters from './views/Headquarters/Headquarters';
import Inspections from './views/Inspections/Inspections';
import Elements from './views/Elements/Elements';
import Upkeep from './views/Upkeep/Upkeep';
import UpkeepTypes from './views/UpkeepTypes/UpkeepTypes';
import Users from './views/Users/Users';
import Login from './views/Login/Login';
import image from "./assets/img/logo_sant-tomas.png";

import styles from './App.module.css'

function App() {

  // Guardar estat del Login: logejat o no logejat
  const [ isLogged, setIsLogged ] = useState(false)

  const handleLogout = () => {
    setIsLogged(false)
  }

  return (
    <>
      {isLogged ? <>
        <header>
          <a href="https://www.santtomas.cat/" className={styles.logo} target='blank'><img src={image} alt="logo" /></a>
          <NavBar></NavBar>
          <p className={styles.logout} onClick={handleLogout}>Logout</p>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home></Home>}/>
            <Route path="/inspeccions" element={<Inspections></Inspections>}/>
            <Route path="/elements" element={<Elements></Elements>}/>
            <Route path="/empreses" element={<Companies></Companies>}/>
            <Route path="/centres" element={<Headquarters></Headquarters>}/>
            <Route path="/manteniments" element={<Upkeep></Upkeep>}/>
            <Route path="/tipus-manteniment" element={<UpkeepTypes></UpkeepTypes>}/>
            <Route path="/usuaris" element={<Users></Users>}/>
          </Routes>
        </main>
        <footer>
          <Footer></Footer>
        </footer> 
        </> :
        <Login isLogged={isLogged} setIsLogged={setIsLogged}></Login>
      }
    </>
  );
}

export default App;
