import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3008/api/ai',
    withCredentials: true
});

export const askAi = async(query, entities) => {
    try{
        const response = await api.post('/', {query: query, entities: entities})
        return response.data;
    } catch(err){
        console.log(err);
        throw err;
    }
}