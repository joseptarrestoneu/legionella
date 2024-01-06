import { useEffect, useState } from 'react'
import getAllCompanies from '../../services/companies/getAllCompanies'

import styles from './Companies.module.css'

const Companies = () => {
  
  const [ companies, setCompanies ] = useState([])

  useEffect(() => {
    getAllCompanies()
    .then(companies => {
      setCompanies(companies)
    })
  },[])

  const titles = [ "Empresa", "CIF", "Estat", "Accions" ]

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
              companies.map(element => {
                return (
                  <tr className={styles.rows}>
                    <td className={styles.columns}>{element.companyName}</td>
                    <td className={styles.columns}>{element.companyCIF}</td>
                    <td className={styles.columns}>{element.companyActive ? "Actiu" : "No actiu"}</td>
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

export default Companies
