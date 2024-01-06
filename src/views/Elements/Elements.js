import { useEffect, useState } from 'react'
import getAllElements from '../../services/elements/getAllElements'

import styles from './Elements.module.css'

const Elements = () => {
  
  const [ elements, setElements ] = useState([])

  useEffect(() => {
    getAllElements()
    .then(elements => {
      setElements(elements)
    })
  },[])

  const titles = [ "Referència", "Element", "Ubicació", "Àrea", "Empresa", "Estat", "Accions" ]

  return (
    <div className={styles.listElements}>
      <div className={`${styles.table} ${styles.ver3}`}>
        <table data-vertable="ver3">
          <thead>
            <tr className={`${styles.rows} ${styles.head}`}>
              {
                titles.map((element) =>{
                  return <th className={styles.columns} >{element}</th>
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              elements.map(element => {
                return (
                  <tr className={styles.rows}>
                    <td className={styles.columns}>{element.elementReference}</td>
                    <td className={styles.columns}>{element.elementName}</td>
                    <td className={styles.columns}>{element.elementUbication}</td>
                    <td className={styles.columns}>{element.elementAreaId.areaName}</td>
                    <td className={styles.columns}>{element.elementCompanyId.companyName}</td>
                    <td className={styles.columns}>{element.elementActive ? "Actiu" : "No actiu"}</td>
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

export default Elements
