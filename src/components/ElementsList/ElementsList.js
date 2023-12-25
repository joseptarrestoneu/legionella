import styles from './ElementsList.module.css'
import { elementList } from '../../services/db.js'
import { useState } from 'react'

const ElementsList = () => {

  const [ elements, setElements ] = useState(elementList)

  return (
    <div className={styles.listElements}>
      <div className={`${styles.table} ${styles.ver3}`}>
        <table data-vertable="ver3">
          <thead>
            <tr className={`${styles.rows} ${styles.head}`}>
              <th className={`${styles.columns} ${styles.column1}`} >Id</th>
              <th className={`${styles.columns} ${styles.column2}`} >Referència</th>
              <th className={`${styles.columns} ${styles.column3}`} >Element</th>
              <th className={`${styles.columns} ${styles.column4}`} >Ubicació</th>
              <th className={`${styles.columns} ${styles.column5}`} >Àrea</th>
              <th className={`${styles.columns} ${styles.column6}`} >Empresa</th>
              <th className={`${styles.columns} ${styles.column7}`} >Estat</th>
              <th className={`${styles.columns} ${styles.column8}`} >Accions</th>
            </tr>
          </thead>
          <tbody>
            {
              elements.map(elements => {
                return (
                  <tr className={styles.rows}>
                    <td className={`${styles.columns} ${styles.column1}`} >{elements.id}</td>
                    <td className={`${styles.columns} ${styles.column2}`} >{elements.elementReference}</td>
                    <td className={`${styles.columns} ${styles.column3}`} >{elements.elementName}</td>
                    <td className={`${styles.columns} ${styles.column4}`} >{elements.elementUbication}</td>
                    <td className={`${styles.columns} ${styles.column5}`} >{elements.elementAreaId}</td>
                    <td className={`${styles.columns} ${styles.column6}`} >{elements.elementCompanyId}</td>
                    <td className={`${styles.columns} ${styles.column7}`} >{elements.elementActive && "Actiu" || "No actiu"}</td>
                    <td className={`${styles.columns} ${styles.column8}`} >
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

export default ElementsList