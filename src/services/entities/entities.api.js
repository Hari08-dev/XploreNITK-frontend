import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3008/api/entities',
    withCredentials: true
});

export const getAllEntities = async () => {
    try{
        const response = await api.get('/');
        return response.data;
    } catch(error){
        console.log(error);
        throw error;
    }
}

