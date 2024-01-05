import axios from 'axios';

const getUserById = (id) => {

    return axios.get(`http://localhost:3001/api/users/${id}`)
        .then(response => {
            const {data} = response
            return data
        });
    
}
    
export default getUserById;