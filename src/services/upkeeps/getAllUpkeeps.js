const getAllUpkeeps = async () => {

    try {
        const response = await fetch("http://localhost:3001/api/upkeeps")

        if (response.ok) {
            const data = await response.json()
            return  data
        }
    } catch (error) {
        return {message: error.message || "Something went wrong"}
    }
    
}
    
export default getAllUpkeeps;