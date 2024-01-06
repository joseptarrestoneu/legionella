const getAllCompanies = async () => {

    try {
        const response = await fetch("http://localhost:3001/api/companies")

        if (response.ok) {
            const data = await response.json()
            console.log(data)
            return  data
        }
    } catch (error) {
        return {message: error.message || "Something went wrong"}
    }
    
}
    
export default getAllCompanies;