import { useEffect, useState } from 'react'
import getAllInspections from '../../services/inspections/getAllInspections'

import styles from './Inspections.module.css'

const Inspections = () => {
  
  const [ inpections, setInpections ] = useState([])
  
  useEffect(() => {
    getAllInspections()
    .then(inspections => {
      setInpections(inspections)
    })
  },[])
  
  const titles = [ "Element", "Manteniment", "Data Planificada", "Data Realitzada", "Usuari Planificat", "Usuari Realitzat", "Estat", "Accions" ]
  
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
              inpections.map(element => {
                return (
                  <tr className={styles.rows} id={element._id} key={element._id}>
                    <td className={styles.columns}>{element.elementId}</td>
                    <td className={styles.columns}>{element.elementUpKeepId}</td>
                    <td className={styles.columns}>{element.elementPlanningDate}</td>
                    <td className={styles.columns}>{element.elementDoDate}</td>
                    <td className={styles.columns}>{element.elementUserPlanningId}</td>
                    <td className={styles.columns}>{element.elementUserDoId}</td>
                    <td className={styles.columns}>{element.elementPlanningActive ? "Actiu" : "No actiu"}</td>
                    <td className={styles.columns}>
                      <i class="fa-solid fa-square-check"></i>
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

export default Inspections
