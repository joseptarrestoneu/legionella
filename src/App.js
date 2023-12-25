import styles from './App.module.css';
import Login from './components/Login/Login';
import ElementsList from './components/ElementsList/ElementsList';

function App() {
  return (
    <div className={styles.main}>
      {/* <Login /> */}
      <ElementsList />
    </div>
  );
}

export default App;
