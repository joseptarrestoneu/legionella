import axios from 'axios';

const getAllUsers = () => {

    return axios.get("http://localhost:3001/api/users")
        .then(response => {
            const {data} = response
            return data
        });
    
}

// const getAllUsers = async () => {

//     try {
//         const response = await fetch("http://localhost:3001/api/users")

//         if (response.ok) {
//             const data = await response.json()
//             return  data
//         }
//     } catch (error) {
//         return {message: error.message || "Something went wrong"}
//     }
    
// }
    
export default getAllUsers;