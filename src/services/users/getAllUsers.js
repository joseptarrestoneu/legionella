import axios from 'axios';

const getAllUsers = () => {

    return axios.get("http://localhost:3001/api/users")
        .then(response => {
            const {data} = response
            return data
        });
    
}
    
export default getAllUsers;