import { useEffect, useState } from 'react'
import getAllCompanies from '../../services/companies/getAllCompanies'
import desactiveCompany from '../../services/companies/desactiveCompany'

import styles from './Companies.module.css'

const Companies = () => {
  
  const [ companies, setCompanies ] = useState([])

  useEffect(() => {
    getAllCompanies()
    .then(companies => {
      setCompanies(companies)
    })
  },[])

  const handleDesactive = (event) => {
    console.log(event.target.parentNode.parentNode.id)
    desactiveCompany(event.target.parentNode.parentNode.id)
  }

  const titles = [ "Empresa", "CIF", "Estat", "Accions" ]

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
              companies.map(element => {
                return (
                  <tr className={styles.rows} id={element._id} key={element._id}>
                    <td className={styles.columns}>{element.companyName}</td>
                    <td className={styles.columns}>{element.companyCIF}</td>
                    <td className={styles.columns}>{element.companyActive ? "Actiu" : "No actiu"}</td>
                    <td className={styles.columns}>
                      <i class="fa-solid fa-pen-to-square"></i>
                      <i class="fa-solid fa-trash" onClick={handleDesactive}></i>
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
