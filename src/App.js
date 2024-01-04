import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Home from './views/Home/Home';
import Elements from './views/Elements/Elements';
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
          <Route path="/elements" element={<Elements></Elements>}/>
        </Routes>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
