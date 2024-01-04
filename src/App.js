import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Home from './views/Home/Home';
import Companies from './views/Companies/Companies';
import Headquarters from './views/Headquarters/Headquarters';
import Inspections from './views/Inspections/Inspections';
import Elements from './views/Elements/Elements';
import Measures from './views/Measures/Measures';
import Units from './views/Units/Units';
import Users from './views/Users/Users';
import Footer from './components/Footer/Footer';
import styles from './App.module.css'

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
        <p className={styles.logout}>Logout</p>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/empreses" element={<Companies></Companies>}/>
          <Route path="/centres" element={<Headquarters></Headquarters>}/>
          <Route path="/inspeccions" element={<Inspections></Inspections>}/>
          <Route path="/elements" element={<Elements></Elements>}/>
          <Route path="/mesures" element={<Measures></Measures>}/>
          <Route path="/unitats" element={<Units></Units>}/>
          <Route path="/usuaris" element={<Users></Users>}/>
        </Routes>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
