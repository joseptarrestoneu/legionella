import ReactDOM from 'react-dom';
import styles from './ModalLoggin.module.css'

const ModalLoggin = () => {
  return (
    <>
        {ReactDOM.createPortal(<h1>Hello World</h1>, document.querySelector('#loggin-modal'))}
    </>
  )
}

export default ModalLoggin
