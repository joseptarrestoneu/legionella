const desactiveCompany = async (id) => {
    
    try {
        const response = await fetch(`http://localhost:3001/api/companies/${id}`, 
            {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ companyDeleted: true })
            }
        )
        
        if (response.ok) {
            const data = await response.json()
            return  data
        }
    } catch (error) {
        return({
            message: error.message || 'Something went wrong!'
        })
    }
}

export default desactiveCompany;