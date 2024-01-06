import axios from 'axios';

const getAllUsers = (userName, userPassword) => {

    return axios.get("http://localhost:3001/api/users")
        .then(response => {
            const {data} = response
            const data2 = data.filter(user => {
                return user.userUser === userName
            })
            if (data2.length !== 0 && data2[0].userPassword === userPassword) {
                return true
            } else {
                return false;
            }
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