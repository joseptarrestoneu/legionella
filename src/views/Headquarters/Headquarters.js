import { useEffect, useState } from 'react'
import getAllHeadquarters from '../../services/headquartes/getAllHeadquarters'

import styles from './Headquarters.module.css'

const Headquarters = () => {
  
  const [ arees, setArees ] = useState([])

  useEffect(() => {
    getAllHeadquarters()
    .then(arees => {
      setArees(arees)
    })
  },[])

  const titles = [ "Àrea", "Empresa", "Estat", "Accions" ]

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
              arees.map(element => {
                return (
                  <tr className={styles.rows} id={element._id} key={element._id}>
                    <td className={styles.columns}>{element.areaName}</td>
                    <td className={styles.columns}>{element.areaCompanyId.companyName}</td>
                    <td className={styles.columns}>{element.areaActive ? "Actiu" : "No actiu"}</td>
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

export default Headquarters
