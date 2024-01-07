import { useEffect, useState } from 'react'
import Button from '../../components/UI/Button'
import Filter from '../../components/Filter/Filter'
import getAllElements from '../../services/elements/getAllElements'
import getAllHeadquarters from '../../services/headquartes/getAllHeadquarters'
import getAllCompanies from '../../services/companies/getAllCompanies'
import desactiveElement from '../../services/elements/desactiveElement'

import styles from './Elements.module.css'

const Elements = () => {
  
  const [ elements, setElements ] = useState([])
  const [ headquarters, setHeadquarters ] = useState([])
  const [ companies, setCompanies ] = useState([])
  const [ elementsFiltered, setElementsFiltered ] = useState([])
  const [ update, setUpdate ] = useState(false)

  useEffect(() => {
    getAllElements()
    .then(elements => {
      setElements(elements)
      setElementsFiltered(elements)
    })
    getAllHeadquarters()
    .then(headquarters => {
      setHeadquarters(headquarters)
    })
    getAllCompanies()
    .then(companies => {
      setCompanies(companies)
    })
  },[update])

  const handleDesactive = (event) => {
    desactiveElement(event.target.parentNode.parentNode.id)
    setUpdate(!update)
  }

  const titles = [ "Ref.", "Element", "Ubicació", "Àrea", "Empresa", "Estat", "Accions" ]

  // Función para hacer funcionar el filtro de elementos => por Àrea
  const handleChangeHeadquarter = (value) => {
    if (elementsFiltered.length === 0) {
      if (value.length !== 0) {
        let elementsFiltereds = elements.filter(element =>  value.includes(element.elementAreaId._id)) 
        setElementsFiltered(elementsFiltereds)
      } else {
        setElementsFiltered(elements)
      }
    } else {
      if (value.length !== 0) {
        let elementsFiltereds = elementsFiltered.filter(element =>  value.includes(element.elementAreaId._id)) 
        setElementsFiltered(elementsFiltereds)
      } else {
        setElementsFiltered(elements)
      }
    }
  }

  // Placeholder del filtro de areas
  const placeholderFilterHeadquarters = "Filtre àrea"

  // Array con los elementos del filtro de areas
  const dataHeadquarters = headquarters.map(element => {
    return {
      label: `${element.areaName}`,
      value: element._id
    }
  })

  // Función para hacer funcionar el filtro de elementos => por Empresa
  const handleChangeCompany = (value) => {
    if (elementsFiltered.length === 0) {
      if (value.length !== 0) {
        let companiesFiltered = elements.filter(element =>  value.includes(element.elementCompanyId._id)) 
        setElementsFiltered(companiesFiltered)
      } else {
        setElementsFiltered(elements)
      }
    } else {
      if (value.length !== 0) {
        let companiesFiltered = elementsFiltered.filter(element =>  value.includes(element.elementCompanyId._id)) 
        setElementsFiltered(companiesFiltered)
      } else {
        setElementsFiltered(elements)
      }
    }
  }

  // Placeholder del filtro de usuarios
  const placeholderFilterCompanies = "Filtre empresa"

  // Array con los elementos del filtro de usuarios
  const dataCompanies = companies.map(element => {
    return {
      label: `${element.companyName}`,
      value: element._id
    }
  })

  return (
    <div className={styles.container}>
    <div className={styles.main}>
      <div className={styles.filters}>
        <div className={styles.multiselector}>
          <Filter
            data={dataHeadquarters} 
            handleChange={handleChangeHeadquarter}
            placeholderFilter={placeholderFilterHeadquarters}
          />
        </div>
        <div className={styles.multiselector}>
          <Filter
            data={dataCompanies} 
            handleChange={handleChangeCompany}
            placeholderFilter={placeholderFilterCompanies}
          />
        </div>
      </div>
      <div className={styles.button}>
        <Button path="/elements/new-element" />
      </div>
    </div>
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
                elementsFiltered.map(element => {
                  return (
                    <tr className={styles.rows} id={element._id} key={element._id}>
                      <td className={styles.columns}>{element.elementReference}</td>
                      <td className={styles.columns}>{element.elementName}</td>
                      <td className={styles.columns}>{element.elementUbication}</td>
                      <td className={styles.columns}>{element.elementAreaId.areaName}</td>
                      <td className={styles.columns}>{element.elementCompanyId.companyName}</td>
                      <td className={styles.columns}>{element.elementActive ? "Actiu" : "No actiu"}</td>
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
    </div>
  )
}

export default Elements
