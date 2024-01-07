import { useEffect, useState } from 'react'
import getAllUpkeepTypes from '../../services/upkeepTypes/getAllUpkeepTypes'

import styles from './UpkeepTypes.module.css'

const UpkeepTypes = () => {
  
  const [ upkeepTypes, setUpkeepTypes ] = useState([])

  useEffect(() => {
    getAllUpkeepTypes()
    .then(upkeepTypes => {
      setUpkeepTypes(upkeepTypes)
    })
  },[])

  const titles = [ "Tipus Manteniment", "Unitats", "Estat", "Accions" ]

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
              upkeepTypes.map(element => {
                return (
                  <tr className={styles.rows} id={element._id} key={element._id}>
                    <td className={styles.columns}>{element.upkeepTypeName}</td>
                    <td className={styles.columns}>{element.upkeepTypeUnits}</td>
                    <td className={styles.columns}>{element.upkeepTypeActive ? "Actiu" : "No actiu"}</td>
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

export default UpkeepTypes
