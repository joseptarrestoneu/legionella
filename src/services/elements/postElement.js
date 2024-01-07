
const postElement = async (data) => {
    try {
        const response = await fetch(`http://localhost:3001/api/elements`, 
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
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

export default postElement;