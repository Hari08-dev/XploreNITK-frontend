import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3008/api/fav',
    withCredentials: true
});

export const toggleFav = async(id) => {
    try{
        const response = await api.post(`/${id}`);
        return response.data;
        console.log(response);
    } catch(err){
        console.log(err);
        throw err;
    }
}