import styles from './Users.module.css'

import { useEffect, useState } from 'react'
import getAllUsers from '../../services/users/getAllUsers'

const Users = () => {
  
  const [ users, setUsers ] = useState([])
  
  useEffect(() => {
    getAllUsers()
    .then(elements => {
      setUsers(elements)
    })
  },[])
  
  const titles = [ "Usuari", "DNI", "E-mail", "Empresa", "Estat", "Accions" ]
  
  return (
    <div className={styles.listElements}>
      <div className={`${styles.table} ${styles.ver3}`}>
        <table data-vertable="ver3">
          <thead>
            <tr className={`${styles.rows} ${styles.head}`}>
              {
                titles.map((element, index) =>{
                  return <th className={styles.columns} key={index}>{element}</th>
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              users.map(element => {
                return (
                  <tr className={styles.rows} id={element._id} key={element._id}>
                    <td className={styles.columns}>{element.userLastName1} {element.userLastName2}, {element.userName}</td>
                    <td className={styles.columns}>{element.userDNI}</td>
                    <td className={styles.columns}>{element.userEmail}</td>
                    <td className={styles.columns}>{element.userCompanyId.companyName}</td>
                    <td className={styles.columns}>{element.userActive ? "Actiu" : "No actiu"}</td>
                    <td className={styles.columns}>
                      <i class="fa-solid fa-pen-to-square"></i>
                      <i class="fa-solid fa-trash" ></i>
                    </td>
                  </tr>  
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
