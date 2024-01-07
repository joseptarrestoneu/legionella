import { useEffect, useState } from 'react'
import postElement from '../../services/elements/postElement'
import getAllCompanies from '../../services/companies/getAllCompanies'
import getAllHeadquarters from '../../services/headquartes/getAllHeadquarters'

import styles from './NewElement.module.css'

const NewElement = () => {

    const [ newElement, setNewElement ] = useState({})
    const [ companies, setCompanies ] = useState([])
    const [ headquarters, setHeadquarters ] = useState([])

    useEffect(() => {
        getAllCompanies()
        .then(companies => {
            setCompanies(companies)
        })
        getAllHeadquarters()
        .then(headquarters => {
            setHeadquarters(headquarters)
        })
    },[])

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData.entries())
        console.log(formJson);        
        postElement(formJson) 
        .then(newProfessional => {
            setNewElement(newProfessional);
        })
    }

    const handleChange = (event) => {
        setNewElement(event.target.value);
    }

    return (
        <div className={styles.container}>
            <h2>Alta nou element</h2>
            <form onSubmit={handleSubmit}>
                <label for="elementName">Nom</label>
                <input type='text' onChange={handleChange} name="elementName" value={newElement.elementName}></input>
                <label for="elementReference">Referència</label>
                <input type='text' onChange={handleChange} name="elementReference" value={newElement.elementReference}></input>
                <label for="elementDescription">Descripció</label>
                <textarea rows={3} type='text' onChange={handleChange} name="elementDescription" value={newElement.elementDescription}></textarea>
                <label for="elementUbication">Ubicació</label>
                <input type='text' onChange={handleChange} name="elementUbication" value={newElement.elementUbication}></input>
                <label for="elementCompanyId">Empresa</label>
                <select onChange={handleChange} name="elementCompanyId" value={newElement.elementCompanyId} id="elementCompanyId">
                    <option value="selecciona">- Selecciona -</option>
                    {
                        companies.map( element => {
                            return (
                                <option value={element._id}>{element.companyName}</option>
                            )
                        })
                    }
                </select>
                <label for="elementAreaId">Àrea</label>
                <select onChange={handleChange} name="elementAreaId" value={newElement.elementAreaId} id="elementAreaId">
                    <option value="selecciona">- Selecciona -</option>
                    {
                        headquarters.map( element => {
                            return (
                                <option value={element._id}>{element.areaName}</option>
                            )
                        })
                    }
                </select>
                <label for="elementActive">Actiu</label>
                <input type='text' onChange={handleChange} name="elementActive" value={newElement.elementActive}></input>
                <div className={styles.btn_container}>
                    <button className={styles.btn_add} type='submit'>Crear</button>
                </div>
            </form>
        </div>
    )
}

export default NewElement