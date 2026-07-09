import axios from 'axios'

const baseUrl = 'http://localhost:3008/api/entities/'

export const getAllEntities = async () => {
    try{
        const response = await axios.get(`${baseUrl}`, {withCredentials: true});
        return response.data;
    } catch(error){
        console.log(error);
        throw error;
    }
}

