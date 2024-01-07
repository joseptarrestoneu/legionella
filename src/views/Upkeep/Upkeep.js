import { useEffect, useState } from 'react'
import getAllUpkeeps from '../../services/upkeeps/getAllUpkeeps'

import styles from './Upkeep.module.css'

const Upkeep = () => {
  
  const [ upkeeps, setUpkeeps ] = useState([])

  useEffect(() => {
    getAllUpkeeps()
    .then(upkeep => {
      setUpkeeps(upkeep)
    })
  },[])

  const titles = [ "Manteniment", "Descripció", "Tipus manteniment", "Estat", "Accions" ]

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
              upkeeps.map(element => {
                return (
                  <tr className={styles.rows} id={element._id} key={element._id}>
                    <td className={styles.columns}>{element.upkeepName}</td>
                    <td className={styles.columns}>{element.upkeepDescription}</td>
                    <td className={styles.columns}>{element.upkeepTypeId.upkeepTypeName} ({element.upkeepTypeId.upkeepTypeUnits})</td>
                    <td className={styles.columns}>{element.upkeepActive ? "Actiu" : "No actiu"}</td>
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

export default Upkeep
