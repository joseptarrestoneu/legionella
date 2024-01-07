const getAllHeadquarters = async () => {

    try {
        const response = await fetch("http://localhost:3001/api/arees")

        if (response.ok) {
            const data = await response.json()
            return  data
        }
    } catch (error) {
        return {message: error.message || "Something went wrong"}
    }
    
}
    
export default getAllHeadquarters;