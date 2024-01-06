const getAllUpkeepTypes = async () => {

    try {
        const response = await fetch("http://localhost:3001/api/upkeepstypes")

        if (response.ok) {
            const data = await response.json()
            console.log(data)
            return  data
        }
    } catch (error) {
        return {message: error.message || "Something went wrong"}
    }
    
}
    
export default getAllUpkeepTypes;