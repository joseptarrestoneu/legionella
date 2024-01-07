const getAllCompanies = async () => {

    try {
        const response = await fetch("http://localhost:3001/api/companies")

        if (response.ok) {
            const data = await response.json()
            const dataNoDeleted = data.filter(element => {
                return element.companyDeleted === false
            })
            return  dataNoDeleted
        }
    } catch (error) {
        return {message: error.message || "Something went wrong"}
    }
    
}
    
export default getAllCompanies;